import React, { ReactNode } from 'react'

import { Navigation } from '../comps/Nav'
import { AppConfig } from '../utils/AppConfig'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-bold text-3xl text-gray-900">
            {AppConfig.title}
          </div>
          <div className="text-xl">{AppConfig.description}</div>
        </div>
        <div className="pt-10">
          <Navigation />
          <nav className="flex items-center justify-between flex-wrap bg-customblue-150 p-6">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow invisible " />
              <div className="grid justify-items-center">
                <a
                  href="https://github.com/stefanibus/crawlAndScrape/"
                  rel="noreferrer"
                  target="_blank"
                  className="  inline-block text-sm px-4 py-2 leading-none border rounded text-customblue-50 border-white hover:border-transparent hover:text-customblue-400 hover:bg-white mt-4 lg:mt-0"
                >
                  GitHub Project
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        {` © Copyright ${new Date().getFullYear()} ${
          AppConfig.title
        }. Powered with `}
        <span role="img" aria-label="Love">
          {` ♥ `}
        </span>
        by <a href="https://make-mobile.de">Make-Mobile.de</a>
      </div>
    </div>
  </div>
)

export { Main }
