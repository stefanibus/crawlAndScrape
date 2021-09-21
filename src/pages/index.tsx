import React from 'react'

import CSS from 'csstype'
import { useRouter } from 'next/router'

import { Comment } from '../comps/Comment'
import { DemoScraper } from '../comps/demo/DemoScraper'
import { Divider } from '../comps/divider/Divider'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const Index = () => {
  const router = useRouter()
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

  const startPageHeroBackground: CSS.Properties = {
    // position: 'absolute',
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
    <>
      <div>
        <Main
          meta={
            <Meta
              title="Next.js Crawler and Scraper"
              description="Next Crawler and Scraper"
            />
          }
        >
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
            <div className="max-w-4xl ">
              <h1 className="font-bold text-2xl pt-12  ">
                Crawler and Scraper will search each file
                <br />
                and clone all files matching your searchterm
              </h1>
              <hr />
              <h3 className="  pb-6 ">using an API from scraping-bot.io</h3>
              <p>
                <span role="img" aria-label="rocket">
                  🚀
                </span>
                This web-scraping tool will scrawl through the content of an
                entire domain of your choice. It will extract data without
                getting blocked. Users can configure the following
                scrawl-settings before they start scrawling:
              </p>
              <ul className="list-inside  list-disc">
                <li>five different CrawlingDepth's </li>
                <li>the Domain / Webpage they want to scrawl</li>
                <li>
                  {' '}
                  a searchterm to search for specific content inside of the
                  Domain{' '}
                </li>
              </ul>
              <p>
                All pages containing the searchstring will be considered
                relevant, and thus copied and saved to the server. PS: The
                maximum-crawling-depth is limited to a depth of 5 levels.
                <span role="img" aria-label="zap">
                  ⚡️
                </span>
                <br />
              </p>

              <h1 className="pt-12 font-bold text-2xl">First Demo</h1>
              <p>
                The first Example will search all across the domain:
                nevelingreply.de.
                <br />
                It will scrape all pages containing the term
                &quot;Dienstleister&quot; achross all pages. Matching pages will
                be cloned to our server.
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
                The second Example searches all across the domain:
                scraping-bot.io.
                <br />
                It scrapes all pages containing the term &quot;my paragraph
                of&quot;. All pages containing that searchstring-term will be
                stored to our server.
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
                The third Example scrapes across: triplesensereply.de
                <br />
                and find all pages containing the term &quot;Frontend
                Developer&quot;.
                <br />
                All pages containing that searchstring-term will be found and
                stored to the server.
              </p>
              <DemoScraper
                pointToStart="triplesensereply.de/agentur"
                pointToStartFullURL="https://www.triplesensereply.de/agentur/"
                depthToCrawl={1}
                termToSearch="Frontend Developer"
                staticReference="scraped-triplesensereply.json"
              />
              <Comment />
            </div>
          </div>
        </Main>
        {/* Tracking Pixel */}
        <div className="hidden">{trackingPixel()}</div>
      </div>
    </>
  )
}

export default Index
