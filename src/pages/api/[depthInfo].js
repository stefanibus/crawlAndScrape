// pages/posts/[id].js mydomain.com/2/?crawl=https:www.nivea.de
export default async (req, res) => {
  const { crawlURL, depthInfo } = req.query
  // res.end(`Depth: ${depth} \nCrawl: ${crawlURL}`)
  // eslint-disable-next-line no-console
  // console.log(`Depth: ${depthInfo} \nCrawl: ${crawlURL}`)
  // DOCUMENTATION = https://github.com/Scrapingbot/crawler  ,
  // SOURCE = https:/www.scraping-bot.io/web-scraping-documentation/

  /* eslint-disable global-require */

  const request = require('request')
  const util = require('util')

  const rp = util.promisify(request)
  const sleep = util.promisify(setTimeout)
  const cheerio = require('cheerio')
  const { URL } = require('url')
  const fs = require('fs')
  /* eslint-enable global-require */

  // const dbconfig = require('./dbconfig.js')

  const seenLinks = {}

  let rootNode = {}
  let currentNode = {}

  const linksQueue = []
  const printList = []

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

  // eslint-disable-next-line no-console
  console.log('username: ', username)

  const requestOptions = {
    method: 'POST',
    url: apiEndPoint,
    json: {
      url: 'this will be replaced in the findLinks function',
      // scraing-bot options
      options: {
        useChrome: false,
        // if you want to use headless chrome WARNING two api calls wiil be
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

  // Start Application put here the adress  you want to start your crawling with
  // second parameter is depth with 1: it will scrape all the links...
  // ...found on the first page but not the ones found on other pages
  // if you put 2 it will scrape all links on first page and all links found on
  // second level pages be careful with this on a huge website it will represent
  // tons of pages to scrape
  // it is recommended to limit to 5 levels
  //
  // crawlBFS('https://www.scraping-bot.io/crawler/index.html', 1)
  // eslint-disable-next-line no-use-before-define
  crawlBFS(crawlURL, 1)
  // it is recommanded to limit to 1 levels
  // crawlBFS("https://www.nivea.de", 1);

  function killedTemoarily() {
    // eslint-disable-next-line no-console
    // console.log(`  The crawler is currently deactivated -->
    // crawlBFS func is not called -->
    // see code-lines above this message! `)
  }
  killedTemoarily()

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

    // eslint-disable-next-line no-console
    console.log(
      'startURL: und mainParsedUrl: und startLinkObj: ',
      startURL,
      mainParsedUrl,
      startLinkObj,
    )

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
    console.log(`Scraping URL : ${linkObj.url}`)
    let response
    try {
      response = await rp(requestOptions)
      if (response.statusCode !== 200) {
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
        // eslint-disable-next-line array-callback-return
        links.map((i, x) => {
          // eslint-disable-next-line no-use-before-define
          const reqLink = checkDomain(x)
          if (reqLink) {
            // eslint-disable-next-line
            if (reqLink != linkObj.url) {
              const newLinkObj = new CreateLink(
                reqLink,
                linkObj.depth + 1,
                linkObj,
              )
              // eslint-disable-next-line no-use-before-define, no-undef
              addToLinkQueue(newLinkObj)
            }
          }
        })
      } else {
        // eslint-disable-next-line no-console
        console.log(`No more links found for ${requestOptions.url}`)
      }

      // check if a specific string occurres in the whole content of the page
      const checkForString = $('body').text().indexOf('Handcreme') > -1
      if (checkForString) {
        // eslint-disable-next-line no-console
        console.log('This URL contains the string: HANDCREME', checkForString)
      }

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
        const maximumWaitTime = 5000 // max five seconds
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
    console.log(printList.join('\n|'))
  }

  function addToPrintDFS(node) {
    const spaces = Array(node.depth * 3).join('-')
    printList.push(spaces + node.url)
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
        return '' // stefano check this (the '')
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
    return '' // stefano check this (return and '')
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
    seenLinks[linkObj.url] = linkObj
  }

  // Returns whether the link has been seen.
  function linkInSeenListExists(linkObj) {
    return seenLinks[linkObj.url] != null
  }

  const resultArray = { resultArray: 1, something: 'more' }

  const scrapedData = () => {
    return JSON.stringify(
      {
        crawlURL,
        depthInfo,
        resultArray,
        SeverFile: 'http://localhost:3000/scrapedResults.json',
      },
      null,
      2,
    )
  }

  // eslint-disable-next-line func-names
  fs.writeFile('public/scrapedResults.json', scrapedData(), function (err) {
    // eslint-disable-next-line no-console
    if (err) return console.log(err)
    // eslint-disable-next-line no-console
    console.log(
      'The JSON-data can be requested at: http://myNetlifydomain.com/2/?crawlURL=https:www.google.de  AND the Result is additionally saved on Sever, see file: ./scrapedResults.json.',
    )
    return ' '
  })

  res.end(scrapedData())
}
