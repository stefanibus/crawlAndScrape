import React from 'react'

import { Comment } from '../comps/Comment'
import { DemoScraper } from '../comps/demo/DemoScraper'
import { Divider } from '../comps/divider/Divider'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const Index = () => {
  // Tracking Pixel
  const trackingPixel = () => {
    return (
      <img
        alt="scraper-at-work"
        id="trackingPixel"
        src="https://www.make-mobile.de/webportal/assets/php/2019_together.php?"
      />
    )
  }

  return (
    <>
      <div>
        <Main
          meta={
            <Meta
              title="Next.js Crawler and Scraper for nevelingreply.de"
              description="Next Crawler and Scraper"
            />
          }
        >
          <div className="overflow-hidden bg-cover bg-hero-about relative">
            <div className="aspectRatioIdenticalToAboutHeroImage pb-46%" />
          </div>
          <h1 className="font-bold text-2xl pt-12 pb-6">
            Search content all across entire domains
            <br />
            Clone files matching your searchterm
          </h1>
          <p>
            <span role="img" aria-label="rocket">
              🚀
            </span>
            This is a Web scraping service. It can be used to extract data from
            any webpage without getting blocked. A documentation can be found
            below. Three examples can be found below. They showcase the way
            params can be entered before the scrawling is requested. Five
            different CrawlingDepth's are available.
            <br />
            <br />
            Please find showcases below.
            <span role="img" aria-label="zap">
              ⚡️
            </span>
            <br />
            <br />
            The user may apply a searchstring: In that case, all pages
            containing the relevant string will be found, copied and saved on
            our server. PS: The maximum-crawling-depth of this bot is limited to
            a depth of 5 levels.
            <br />
          </p>

          <h1 className="pt-12 font-bold text-2xl">First Demo</h1>
          <p>
            The first Example will search all across the domain:
            nevelingreply.de. It will scrape all pages containing the term
            &quot;Dienstleister&quot; achross all pages. Matching pages will be
            cloned to our server.
          </p>

          <DemoScraper
            pointToStart="nevelingreply.de/competence"
            pointToStartFullURL="https://nevelingreply.de/competence"
            depthToCrawl={2}
            termToSearch="Dienstleister"
            staticReference="scraped-neverling.json"
          />
          <Divider />

          <h1 className="pt-12 font-bold text-2xl">Second Demo</h1>
          <p>
            The second Example searches all across the domain: scraping-bot.io.
            and scrapes all pages containing the term &quot;my paragraph
            of&quot;. All pages containing that searchstring-term will be stored
            to our server.
          </p>
          <DemoScraper
            pointToStart="scraping-bot.io/crawler/second-page.html"
            pointToStartFullURL="https://www.scraping-bot.io/crawler/second-page.html"
            depthToCrawl={5}
            termToSearch="my paragraph of the second page"
            staticReference="scraped-scraping-bot.json"
          />
          <Divider />
          <h1 className="pt-12 font-bold text-2xl">Third Demo</h1>
          <p>
            The third Example scrapes across: triplesensereply.de to find all
            pages containing the term &quot;Frontend Developer&quot;. All pages
            containing that searchstring-term will be found and then stored to
            our server.
          </p>
          <DemoScraper
            pointToStart="triplesensereply.de/agentur"
            pointToStartFullURL="https://www.triplesensereply.de/agentur/"
            depthToCrawl={1}
            termToSearch="Frontend Developer"
            staticReference="scraped-triplesensereply.json"
          />
          <Comment />
          <h2 className="font-semibold text-lg">
            Crawler and Scraper Example for nevelingreply.de on NextJS{' '}
          </h2>
          <p>Developer experience first:</p>
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
              </span>{' '}
              Integrate with{' '}
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
            <li>
              <span role="img" aria-label="rainbow">
                🌈
              </span>
              {' Include a FREE minimalist theme '}
            </li>
            <li>
              <span role="img" aria-label="hundred">
                💯
              </span>
              {' Maximize lighthouse score '}
            </li>
          </ul>
          <p>Built-in feature from Next.js:</p>
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
          <h2 className="font-semibold text-lg">Our Starter code Philosophy</h2>
          <ul>
            <li>Minimal code</li>
            <li>SEO-friendly</li>
            <li>
              <span role="img" aria-label="rocket">
                🚀
              </span>
              {' Production-ready'}
            </li>
          </ul>
          <p>
            {'Check my GitHub project for more information about '}
            <a href="https://github.com/stefanibus/crawlAndScrape/">
              Nextjs crawl and scrape
            </a>
          </p>
        </Main>

        {/* Tracking Pixel */}
        {/* {dimensions && <div className="hidden">{trackingPixel()}</div>} */}
        <div className="hidden">{trackingPixel()}</div>
      </div>
    </>
  )
}

export default Index
