// we are on this page:  api/test/[depthinfo].js
// this is a testpage only. it is requested as follows:
// http://localhost:3000/api/test/1/?crawlURL=someURLHere&searchString=someString
// RESULT:  VERCEL DOES NOT ALLOW STREAMING res.write for longer than 5 Seconds
// I will have to give up. more info on:
// https://vercel.com/docs/error/application/FUNCTION_INVOCATION_TIMEOUT

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
  for (let i = 0; i < 22; i++) {
    if (i > 900) {
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

    // never scrawl for longer than 100 seconds
    if (i > 20) {
      // we will res.end error-message with weGiveUpHere()
      res.end(
        `This is a test-Environment. Usually we would call: weGiveUpHere(res)`,
      )
      // weGiveUpHere(res)
      stillScraping = false
      // res.set('Connection', 'close')
      // jump out of the for loop
      break
    }
    if (stillScraping === true) {
      // res.write(JSON.stringify({ dummy2: 'data2' }))
      res.write(`Crawling since  ${i * 5} seconds, pls. wait...\n\n`)
      // eslint-disable-next-line no-await-in-loop
      await sleepingtime(50)
    } else {
      // we will res.end success-message with weAreDoneHere()
      res.end(
        `This is a test-Environment. Usually we would call: weAreDoneHere()`,
      )
      stillScraping = false
      break // jump out of the for loop
    }
  }
}

export default handler
