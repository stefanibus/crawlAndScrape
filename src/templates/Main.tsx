import { ReactNode } from 'react'

import Link from 'next/link'

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
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-700 border-none hover:text-gray-900">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="text-gray-700 border-none hover:text-gray-900">
                  About
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="text-gray-700 border-none hover:text-gray-900"
                href="https://github.com/stefanibus/crawlAndScrape/"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
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
