// we are on this page:  pages/posts/[id].js
// this page is requested as follows:  https://thisdomain.com/2/?crawlURL=https://nevelingreply.de/competence&searchString=Dienstleister
// DOCUMENTATION = https://github.com/Scrapingbot/crawler
// API Documentation = https:/www.scraping-bot.io/web-scraping-documentation/

export default async (req, res) => {
  const { crawlURL, depthInfo, searchString } = req.query

  /* eslint-disable global-require */
  const request = require('request')
  const util = require('util')
  const rp = util.promisify(request)
  const sleep = util.promisify(setTimeout)
  const cheerio = require('cheerio')
  const { URL } = require('url')
  const fs = require('fs')
  /* eslint-enable global-require */

  const seenLinks = {}
  let rootNode = {}
  let currentNode = {}
  const linksQueue = []
  const printList = []
  const scrapedDetails = []
  let previousDepth = 0
  let maxCrawlingDepth = 1 // default is 5

  // eslint-disable-next-line no-unused-vars
  const options = null
  let mainDomain = null
  let mainParsedUrl = null

  class CreateLink {
    constructor(linkURL, depth, parent) {
      this.url = linkURL
      this.depth = depth
      this.parent = parent
      this.children = []
    }
  }

  // scraping bot credentials
  const username = process.env.NAMEUSER
  const apiKey = process.env.API_KEY
  const apiEndPoint = process.env.END_POINT
  const auth = `Basic ${Buffer.from(`${username}:${apiKey}`).toString(
    'base64',
  )}`

  const scrapedData = () => {
    return JSON.stringify(
      {
        see_Static_Json_File_on_Server_at:
          'https://crawl-and-scrape.vercel.app/scraped.json',
        crawlURL,
        depthInfo,
        searchString,
        SeverFile: 'https://crawl-and-scrape.vercel.app/scraped.json',
        printList,
        scrapedDetails,
      },
      null,
      2,
    )
  }

  const requestOptions = {
    method: 'POST',
    url: apiEndPoint,
    json: {
      url: 'this will be replaced in the findLinks function',
      // scraing-bot options
      options: {
        useChrome: false,
        // if you want to use headless chrome WARNING two api calls will be
        // consumed for this option
        premiumProxy: false,
        // if you want to use premium proxies Unblock Amazon,linkedIn (consuming
        // 10 calls)
      },
    },
    headers: {
      Accept: 'application/json',
      Authorization: auth,
    },
  }

  // Start Application: enter the adress you want to start your crawling with.
  // Second parameter is depth with 1: it will scrape all the links...
  // ...found on the first page but not the ones found on other pages
  // if you put 2 it will scrape all links on first page and all links found on
  // second level pages be careful with this on a huge website it will represent
  // tons of pages to scrape
  // it is recommended to limit to 5 levels
  // eslint-disable-next-line no-use-before-define
  crawlBFS(crawlURL, depthInfo)

  // eslint-disable-next-line
  async function crawlBFS(startURL, maxDepth = 5) {
    try {
      mainParsedUrl = new URL(startURL)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log('URL is not valid', e)
      return
    }

    mainDomain = mainParsedUrl.hostname
    maxCrawlingDepth = maxDepth

    const startLinkObj = new CreateLink(startURL, 0, null)

    // eslint-disable-next-line
    rootNode = currentNode = startLinkObj
    // eslint-disable-next-line no-use-before-define
    addToLinkQueue(currentNode)
    // eslint-disable-next-line no-use-before-define
    await findLinks(currentNode)
  }

  //
  async function crawl(linkObj) {
    // Add logs here if needed!
    // console.log(`Checking URL: ${options.url}`);
    // eslint-disable-next-line no-use-before-define
    await findLinks(linkObj)
  }

  // The goal is to get the HTML and look for the links inside the page.
  async function findLinks(linkObj) {
    // lets set the url we want to scrape
    requestOptions.json.url = linkObj.url
    // eslint-disable-next-line no-console
    console.log(`\n\n\nScraping URL : ${linkObj.url}`)

    let response
    try {
      response = await rp(requestOptions)
      // catch errors
      if (response.statusCode > 399) {
        if (response.statusCode === 401 || response.statusCode === 405) {
          // eslint-disable-next-line no-console
          console.log('autentication failed check your credentials')
        } else {
          // eslint-disable-next-line no-console
          console.log(
            `an error occurred check the URL${response.statusCode}`,
            response.body,
          )
        }
        return
      }
      // catch redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        // eslint-disable-next-line no-console
        console.log(
          `This URL probably has a 301 or 302 status code (page redirect). The URL is: ${response.statusCode}`,
        )
      } else {
        // catch potential success
        // eslint-disable-next-line no-console
        console.log(`This URL probably has a 200 success status code.`)
      }
      // look for the links inside in the whole content of the page
      const $ = cheerio.load(response.body)
      const links = $('body')
        .find('a')
        // eslint-disable-next-line
        .filter(function (i, el) {
          return $(this).attr('href') != null
        })
        // eslint-disable-next-line no-unused-vars, func-names
        .map(function (i, x) {
          return $(this).attr('href')
        })

      if (links.length > 0) {
        // eslint-disable-next-line array-callback-return, consistent-return
        links.map((i, x) => {
          // eslint-disable-next-line no-use-before-define
          const reqLink = checkDomain(x)
          if (reqLink) {
            // eslint-disable-next-line
              const checkPDF = reqLink.substr(reqLink.lastIndexOf('.pdf') + 1)           
            // exclude pdf files AND
            // make sure reqLink is NOT EQUAL TO the linkObj.url
            if (reqLink !== linkObj.url && checkPDF !== 'pdf') {
              // eslint-disable-next-line no-use-before-define, no-undef
              const newLinkObj = new CreateLink(
                reqLink,
                linkObj.depth + 1,
                linkObj,
              )
              // eslint-disable-next-line no-use-before-define
              return addToLinkQueue(newLinkObj)
            }
          }
        })
      } else {
        // eslint-disable-next-line no-console
        console.log(`No more links found for ${requestOptions.url}`)
        // I dont think this condition should return
        // return
      }

      // check if a specific string occurres in the whole content of the page
      const checkIfStringIsPresent = $('body').text().indexOf(searchString) > -1
      // eslint-disable-next-line no-console
      console.log(
        'Check if this URL contains the string: ',
        searchString,
        'and the result is: ',
        `${checkIfStringIsPresent}\n\n\n`,
      )

      // eslint-disable-next-line no-param-reassign
      linkObj.checkIfStringIsPresent = checkIfStringIsPresent

      const fullbody = response.body
      // eslint-disable-next-line no-console
      // console.log('fullbody: ', `${fullbody}`)

      // eslint-disable-next-line no-param-reassign
      linkObj.fullbody = fullbody

      // eslint-disable-next-line no-use-before-define
      const nextLinkObj = getNextInQueue()
      if (nextLinkObj && nextLinkObj.depth <= maxCrawlingDepth) {
        // random sleep
        // It is very important to make this long enough to avoid spamming the
        // website you want to scrape
        // if you choose a short time you will potentially be blocked or kill the
        // website you want to crawl
        // time is in milliseconds here
        const minimumWaitTime = 500
        // half a second these values are very low on a real worl example you
        // should use at least 30000 (30 seconds between each call)
        const maximumWaitTime = 4000 // max four seconds
        const waitTime = Math.round(
          minimumWaitTime + Math.random() * (maximumWaitTime - minimumWaitTime),
        )
        // eslint-disable-next-line no-console
        console.log(`wait for ${waitTime} milliseconds`)
        await sleep(waitTime)
        // next url scraping
        await crawl(nextLinkObj)
      } else {
        // eslint-disable-next-line no-use-before-define
        setRootNode()
        // eslint-disable-next-line no-use-before-define
        printTree()

        const printToJSON = () => {
          // Write the DATA into file
          // eslint-disable-next-line func-names
          fs.writeFile(
            'public/scraped.json',
            scrapedData(),
            // eslint-disable-next-line func-names
            function (err) {
              // eslint-disable-next-line no-console
              if (err) return console.log(err)
              // eslint-disable-next-line no-console
              console.log(
                `\n\n\n\nThis Result is saved on the Sever inside of a separate json-file named: scraped.json. \nYou may request that JSON-data at: http://myNetlifydomain.com/./scraped.json. \nThe json-File you currently look at has the following URL:\nhttp://myNetlifydomain.com/5/?crawlURL=${crawlURL}\n\n\n`,
              )
              return ' '
            },
          )

          // Create Write DATA into this JSON file
          res.end(scrapedData())
        }
        printToJSON()
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log('Something Went Wrong...', err)
    }
  }

  // Go all the way up and set RootNode to the parent node
  function setRootNode() {
    while (currentNode.parent != null) {
      currentNode = currentNode.parent
    }
    rootNode = currentNode
  }

  function printTree() {
    // eslint-disable-next-line no-use-before-define
    addToPrintDFS(rootNode)
    // eslint-disable-next-line no-console
    console.log(
      '\n\n\n\nPrintTree() will now join the printList ',
      printList.join('\n|'),
      scrapedDetails.reverse(),
    )
  }

  function addToPrintDFS(node) {
    // eslint-disable-next-line no-console
    // console.log('node stefano analysis: ', node)
    const spaces = Array(node.depth * 3).join('-')
    printList.push(`${spaces + node.url} `)
    if (node.checkIfStringIsPresent) {
      scrapedDetails.push({
        depth: node.depth,
        searchString: node.checkIfStringIsPresent,
        url: node.url,
        fullbody: node.fullbody,
      })
    } else {
      scrapedDetails.push({
        depth: node.depth,
        searchString: node.checkIfStringIsPresent,
        url: node.url,
      })
    }
    // scrapedDetails.push(node.depth, node.checkIfStringIsPresent, node.url)
    if (node.children) {
      // eslint-disable-next-line
      node.children.map((i, x) => {
        // eslint-disable-next-line no-lone-blocks
        {
          addToPrintDFS(i)
        }
      })
    }
  }

  // Check if the domain belongs to the site being checked
  function checkDomain(linkURL) {
    let parsedUrl
    let fullUrl = true
    try {
      parsedUrl = new URL(linkURL)
    } catch (error) {
      fullUrl = false
    }
    if (fullUrl === false) {
      if (linkURL.indexOf('/') === 0) {
        // relative to domain url
        return `${mainParsedUrl.protocol}//${mainParsedUrl.hostname}${
          linkURL.split('#')[0]
        }`
      }
      if (linkURL.indexOf('#') === 0) {
        // anchor avoid link
        return false // stefano check this (the '')
      }
      // relative url
      const path = currentNode.url.match('.*/')[0]
      return path + linkURL
    }

    const mainHostDomain = parsedUrl.hostname

    // eslint-disable-next-line eqeqeq
    if (mainDomain == mainHostDomain) {
      // console.log("returning Full Link: " + linkURL);
      parsedUrl.hash = ''
      return parsedUrl.href
    }
    return false // stefano check this (return and '')
  }

  function addToLinkQueue(linkobj) {
    // eslint-disable-next-line no-use-before-define
    if (!linkInSeenListExists(linkobj)) {
      if (linkobj.parent != null) {
        linkobj.parent.children.push(linkobj)
      }
      linksQueue.push(linkobj)
      // eslint-disable-next-line no-use-before-define
      addToSeen(linkobj)
    }
  }

  function getNextInQueue() {
    const nextLink = linksQueue.shift()
    if (nextLink && nextLink.depth > previousDepth) {
      previousDepth = nextLink.depth
      // eslint-disable-next-line no-console
      console.log(`------- CRAWLING ON DEPTH LEVEL ${previousDepth} --------`)
    }
    return nextLink
  }

  // Adds links we've visited to the seenList
  function addToSeen(linkObj) {
    // eslint-disable-next-line no-console
    // console.log('linkObj: ', linkObj)
    seenLinks[linkObj.url] = linkObj
  }

  // Returns whether the link has been seen.
  function linkInSeenListExists(linkObj) {
    return seenLinks[linkObj.url] != null
  }
}
