import React, { ReactNode } from 'react'

import { useRouter } from 'next/router'

import { Navigation } from '../comps/Nav'
import { AppConfig } from '../utils/AppConfig'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => {
  const router = useRouter()

  return (
    <div className="antialiased w-full text-gray-700">
      {props.meta}

      <div>
        <div>
          <Navigation />
        </div>

        <div
          className={`pb-5 mt-px  text-xl content ${
            router.pathname === '/' ? 'nix' : '-mt-px'
          }`}
        >
          {props.children}
        </div>
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
}
export { Main }
