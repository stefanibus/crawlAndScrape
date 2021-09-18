// we are on this page:  api/[depthinfo].js
// this page is requested as follows:  https://thisdomain.com/api/2/?crawlURL=https://nevelingreply.de/competence&searchString=Dienstleister
// DOCUMENTATION = https://github.com/Scrapingbot/crawler
// API Documentation = https:/www.scraping-bot.io/web-scraping-documentation/
import { NextApiRequest, NextApiResponse } from 'next'

import { server } from '../../../utils/AppConfig'
import { weAreDoneHere } from '../../../utils/TextForPagesAPI'

let stillScraping = true
// const errorMessage = false
const sleepingtime = (ms: number | undefined) =>
  new Promise((resolve) => setTimeout(resolve, ms))

const scrapedData = () => {
  return JSON.stringify(
    {
      no: 'data stefano, this is only a test',
      SeverFile: `${server}/scraped.json`,
    },
    null,
    2,
  )
}

// curl -Nv localhost:3000/api/see
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { depthInfo, crawlURL, searchString } = req.query as any
  const depthInformation = parseInt(depthInfo as string, 10)

  // Stream a response to the endpoint inbetween.
  // This way we prevent VERCEL.com from returning a 504 Gateway error
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 'no-cache, no-transform')
  res.setHeader('X-Accel-Buffering', 'no')

  res.setHeader('Content-Type', 'text/event-stream;charset=utf-8')

  res.write(`Please expect this Crawling to take approx. 60 seconds\n\n`)

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 97; i++) {
    // if (errorMessage === true) {
    //   stillScraping = false
    //   weHaveAnError(res)
    //   break
    // }
    if (i > 9) {
      stillScraping = false
      weAreDoneHere(
        res,
        server,
        depthInformation,
        crawlURL,
        searchString,
        scrapedData(),
      )
      break
    }

    // never scrawl for longer than 95 seconds
    if (i > 95) {
      // we will res.end error-message with weGiveUpHere()
      res.end(`Stefano weGiveUpHere(res)`)
      // weGiveUpHere(res)
      stillScraping = false
      // res.set('Connection', 'close')
      // jump out of the for loop
      break
    }
    if (stillScraping === true) {
      // res.write(JSON.stringify({ dummy2: 'data2' }))
      res.write(`Crawling since  ${i * 1} seconds, pls. wait...\n\n`)
      // eslint-disable-next-line no-await-in-loop
      await sleepingtime(1000)
    } else {
      // we will res.end success-message with weAreDoneHere()
      res.end(`Stefano weAreDoneHere()`)
      // weAreDoneHere(
      //   res,
      //   server,
      //   depthInformation,
      //   crawlURL,
      //   searchString,
      //   scrapedData(),
      // )
      stillScraping = false
      // res.set('Connection', 'close')
      break // jump out of the for loop
    }
  }
}

export default handler
