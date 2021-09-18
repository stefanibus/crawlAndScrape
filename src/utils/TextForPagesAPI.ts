import { NextApiResponse } from 'next'

export const weAreDoneHere = (
  res: NextApiResponse<any>,
  server: string,
  depthInfo: number,
  crawlURL: string,
  searchString: string,
  scrapedData: string | undefined,
) => {
  return res.end(
    `\n\n\n\n\n
    Finished! We are done here. The result is a JSON FILE containing the following data:
    \n\n\n
  
    ${scrapedData}\n\n\n\n
    ###################################################
    \n
    Please download your result using the below URL:
    \n
    \n
    ${server}/scraped.json
    \n
    ################################################### 
    \n\n\n\n\n
    This Result is saved on the Sever inside of a 
    \n
    separate json-file named: scraped.json. (see Link above)
    \n\n
    A json-File got created because you requested this URL: 
    \n\n
    ${server}/api/${depthInfo}/?crawlURL=${crawlURL}/&searchString=${searchString}
    \n
    Also see identical URL in your Browser Adress Bar (current Tab) 
    \n\n\n    
    `,
  )
}

export const weGiveUpHere = (res: NextApiResponse<any>) => {
  return res.end(
    `\n
      ###################################################
      \n
      Result: We give up after 95 seconds.
      \n
      ###################################################
      \n\n\n
      We interrupted the crawling-process after 95 seconds. 
      \n
      You cannot download your result: Because the scrawling did not finish serverside.
      \n 
      Please make sure the amount of scrawled pages is relatively small. 
      \n 
      You may try again, by hitting the reload-button for this page,
      \n 
      but we recommend you reduce the crawling depth before you do so.
      \n
      If there is no result after yet another pagerefresh, 
      \n
      then please contact the web Developer of this page.
      \n
      You should expect a result in less than 95 seconds! 
      \n 
      ####################
      \n
      `,
  )
}

export const weAreOnVercel = (res: NextApiResponse<any>) => {
  return res.end(
    `\n
      ###################################################
      \n
      Result: We are on a Vercel.com Server.
      \n
      ###################################################
      \n\n\n
      We interrupted the crawling-process . 
      \n
      Vercel generally disallows any scraping-service to be run on their server.  
      \n 
      Using Serverless Functions for scraping is against their Fair Use Policy 
      \n
      and therefore, 
      \n
      We cannot display the desired result on this server.  
      \n
      Their maximum time a Serverless Function can run is at 60 seconds.
      \n 
      We recommend you run this sevice on your local machine.
      \n  
      For more, please see: 
      \n  
      https://github.com/stefanibus/crawlAndScrape 
      \n 
      ####################
      \n
      `,
  )
}

export const weHaveAnError = (res: NextApiResponse<any>) => {
  return res.end(
    `\n
      ###################################################
      \n
      Result: We have an error.

      \n
      For Documentation please see: https://crawl-and-scrape.vercel.app/  
      \n
      Depth must be between 1 and 5
      \n
      crawlURL= must be a valid URL 
      \n
      searchString= must not be empty
      \n
      For Support please contact your Web-Developer.
      \n
      ################################################### 
      \n
      `,
  )
}
