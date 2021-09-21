import CSS from 'csstype'
import { useRouter } from 'next/router'

import { Meta } from '../../layout/Meta'
import { Main } from '../../templates/Main'

const About = () => {
  const router = useRouter()

  const startPageHeroBackground: CSS.Properties = {
    position: 'absolute',
    backgroundColor: '#05177e',
    width: '100%',
    height: '242px',
    bottom: '0',
    zIndex: -1,
  }

  const heroImage = {
    clipPath: 'inset(0% 1% 0% 0%)',
  }

  return (
    <Main meta={<Meta title="About" description="About" />}>
      <div className="mx-auto flex items-center justify-center flex-wrap relative">
        <div style={startPageHeroBackground}>&nbsp;</div>
        <img
          style={heroImage}
          src={`${router.basePath}/assets/images/scraping-animated_darkblue.gif
              
              `}
          alt="Nextjs starter banner"
        />

        <div className="frameForElementor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 19.6"
            preserveAspectRatio="none"
            className="elementor"
          >
            <path
              className="elementor-shape-fill opacity-30"
              d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
            />
            <path
              className="elementor-shape-fill opacity-30"
              d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
            />
            <path
              className="elementor-shape-fill  opacity-30"
              d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
            />
            <path
              className="elementor-shape-fill"
              d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="font-bold text-2xl  pt-12 pb-6">Contact...</h1>
        <p>
          <span role="img" aria-label="rocket">
            🚀
          </span>
          In case of any questions, feel free to contact me.This Web scraping
          service will extract data from any webpage you choose without getting
          blocked. A searchstring can be added to the crawl. Matching pages will
          be stored on the server.
          <span role="img" aria-label="zap">
            ⚡️
          </span>
        </p>

        <h2 className="font-semibold text-lg">
          Crawler and Scraper Example on NextJS{' '}
        </h2>
        <p>Developed with:</p>
        <ul>
          <li>
            <span role="img" aria-label="fire">
              🔥
            </span>{' '}
            <a href="https://nextjs.org" rel="nofollow">
              Next.js
            </a>{' '}
            for Static Site Generator
          </li>
          <li>
            <span role="img" aria-label="art">
              🎨
            </span>
            <a href="https://tailwindcss.com" rel="nofollow">
              Tailwind CSS
            </a>
          </li>
          <li>
            <span role="img" aria-label="nail_care">
              💅
            </span>
            {' PostCSS for processing Tailwind CSS '}
          </li>
          <li>
            <span role="img" aria-label="tada">
              🎉
            </span>
            {' Type checking Typescript'}
          </li>
          <li>
            <span role="img" aria-label="pencil2">
              ✏️
            </span>
            {' Linter with '}

            <a href="https://eslint.org" rel="nofollow">
              ESLint
            </a>
          </li>
          <li>
            <span role="img" aria-label="hammer_and_wrench">
              🛠
            </span>
            {' Code Formatter with '}

            <a href="https://prettier.io" rel="nofollow">
              {' Prettier '}
            </a>
          </li>
          <li>
            <span role="img" aria-label="fox_face">
              🦊
            </span>
            {' Husky for Git Hooks '}
          </li>
          <li>
            <span role="img" aria-label="no_entry_sign">
              🚫
            </span>
            {' Lint-staged for running linters on Git staged files '}
          </li>
          <li>
            <span role="img" aria-label="no_entry_sign">
              🗂
            </span>
            {
              ' VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript '
            }
          </li>
          <li>
            <span role="img" aria-label="robot">
              🤖
            </span>
            {' SEO metadata, JSON-LD and Open Graph tags with Next SEO '}
          </li>
          <li>
            <span role="img" aria-label="robot">
              ⚙️
            </span>{' '}
            <a
              href="https://www.npmjs.com/package/@next/bundle-analyzer"
              rel="nofollow"
            >
              {' Bundler Analyzer '}
            </a>
          </li>
        </ul>
        <p>Built-in features from Next.js:</p>
        <ul>
          <li>
            <span role="img" aria-label="coffee">
              ☕
            </span>
            {' Minify HTML & CSS'}
          </li>
          <li>
            <span role="img" aria-label="dash">
              💨
            </span>
            {' Live reload'}
          </li>
          <li>
            <span role="img" aria-label="white_check_mark">
              ✅
            </span>
            {' Cache busting'}
          </li>
        </ul>
      </div>
    </Main>
  )
}

export default About
