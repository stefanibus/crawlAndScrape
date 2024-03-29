/* This example requires Tailwind CSS v2.0+ */
import React from 'react'

import { DocumentReportIcon, FingerPrintIcon } from '@heroicons/react/solid'

import { server } from '../../utils/AppConfig'

type CardProps = {
  pointToStart: string
  pointToStartFullURL: string
  depthToCrawl: number
  termToSearch: string
  staticReference: string
}

export const DemoScraper = ({
  pointToStart,
  pointToStartFullURL,
  depthToCrawl,
  termToSearch,
  staticReference,
}: CardProps) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg  mt-4 sm:mt-10">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {/* Demo on  */}
          {pointToStart}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Crawler and scraper demo with reference-links.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">
              Crawler Startingpoint
            </dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              {pointToStart}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">
              CrawlingDepth Limit:
            </dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              {`Level ${depthToCrawl}`}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">
              Scraper-Searchterm
            </dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              {`${depthToCrawl}`}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">
              IF Searchterm is true
            </dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              store all result-pages to server (JSON-File)
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              {`The Crawler will begin at the Startingpoint and crawl as deep as defined per Crawling Depth. The JSON FILE stores all Pages containing the searchterm. `}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-base font-medium text-gray-500">
              Reference Links
            </dt>
            <dd className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2">
              <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-base">
                  <div className="w-0 flex-1 flex items-center">
                    <FingerPrintIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">
                      start the scraper
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="has-tooltip">
                      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500  -mt-28 sm:-mt-20  -ml-20 ">
                        Attention: The scraper will start to run!
                        <br />
                        Wait for up to 60 seconds
                        <br />
                        until the result will show up!!
                      </span>
                      <a
                        target="_blank"
                        href={`api/${depthToCrawl}/?crawlURL=${pointToStartFullURL}&searchString=${termToSearch}`}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        rel="noreferrer"
                      >
                        run the scraping-service
                      </a>
                    </div>
                  </div>
                </li>
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-base">
                  <div className="w-0 flex-1 flex items-center">
                    <DocumentReportIcon
                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 flex-1 w-0 truncate">download</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div className="has-tooltip">
                      <span className="tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-28 sm:-mt-10 -ml-20">
                        Click here for an instant result.
                      </span>
                      <a
                        target="_blank"
                        href={`${staticReference}`}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        rel="noreferrer"
                      >
                        Download JSON FILE
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>{' '}
      <div className="overflow-hidden text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  origin-top">
        <pre className="scrollbar-none overflow-x-auto p-6 text-sm sm:leading-relaxed leading-loose  language-html text-white bg-gradient-to-r from-customblue-300 to-customblue-400 bg-opacity-75 whitespace-pre-wrap   break-words  sm:h-32   flex items-center justify-center ">
          <code className="language-html">
            <span className="token tag">
              <span className="token tag">
                <span className="text-white" id="domain_and_path">
                  {server}/api/
                  <div className="has-tooltip  inline-block">
                    <span className="hidden sm:block  tooltip absolute bottom-2 right-12  text-customred-100 bg-white rounded-lg px-3">
                      CrawlingDepth (Param)
                    </span>
                    <a className=" ScrawlingDepth font-bold  text-code-100  p-1  hover:bg-white rounded-lg hover:border-white  hover:bg-opacity-50 ">
                      {depthToCrawl}
                    </a>
                    /
                  </div>
                  <div className="has-tooltip  inline-block">
                    ?crawlURL=
                    <span className="hidden sm:block  tooltip absolute bottom-2 right-12  text-customred-100 bg-white rounded-lg px-3  ">
                      CrawlURL (Param)
                    </span>
                    <a className=" crawlURL font-bold text-yellow-400   p-1  hover:bg-white rounded-lg hover:border-white hover:bg-opacity-50 break-all ">
                      {pointToStartFullURL}
                    </a>
                  </div>
                  <div className="has-tooltip  inline-block">
                    ?searchString=
                    <span className="hidden sm:block  tooltip absolute bottom-2 right-12  text-customred-100 bg-white rounded-lg px-3">
                      searchString (Param)
                    </span>
                    <a className=" searchString font-bold text-yellow-400   p-1  hover:bg-white rounded-lg hover:border-white hover:bg-opacity-50   ">
                      {`${termToSearch}`}
                    </a>
                  </div>
                </span>
              </span>
            </span>
          </code>
        </pre>
      </div>
    </div>
  )
}
