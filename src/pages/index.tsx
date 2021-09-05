import { Comment } from '../comps/comment/Comment'
import { DemoScraper } from '../comps/demo/DemoScraper'
import { Divider } from '../comps/divider/Divider'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const Index = () => {
  return (
    <>
      <div>
        <Main
          meta={
            <Meta
              title="Next.js Crawler and Scraper for nevelingreply.de"
              description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
            />
          }
        >
          <div className="overflow-hidden bg-cover bg-hero-about relative">
            <div className="aspectRatioIdenticalToAboutHeroImage" />
          </div>
          <h1 className="font-bold text-2xl">
            All Files matching the searchterm you choose will be copied to the
            server.
          </h1>
          <p>
            <span role="img" aria-label="rocket">
              🚀
            </span>{' '}
            This is a Web scraping service to scrape and extract data from any
            webpage without getting blocked! The two examples below showcase the
            different CrawlingDepth the user can apply, as well as the way the
            &quot;Domain and Path&quot; can be choosen to start the scrawl.{' '}
            <span role="img" aria-label="zap">
              ⚡️
            </span>{' '}
            <br />
            <br />
            The user may apply a searchstring: In that case, all pages
            containing the relevant string will be found, copied and saved on
            our server. PS: The maximum-crawling-depth of this bot is limited to
            a depth of 5 levels.
          </p>
          <DemoScraper
            pointToStart="nevelingreply.de/competence"
            pointToStartFullURL="https://nevelingreply.de/competence"
            depthToCrawl={2}
            termToSearch="Dienstleister"
            staticReference="scraped-neverling.json"
          />
          <Divider />
          <p className="pt-12">
            The second Example will search all across the domain:
            scraping-bot.io. and scrape all pages containing the term &quot;my
            paragraph of&quot;. All pages containing that searchstring-term will
            be stored to our server.
          </p>
          <DemoScraper
            pointToStart="scraping-bot.io/crawler/second-page.html"
            pointToStartFullURL="https://www.scraping-bot.io/crawler/second-page.html"
            depthToCrawl={5}
            termToSearch="my paragraph of the second page"
            staticReference="scraped-scraping-bot.json"
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
              </span>{' '}
              PostCSS for processing Tailwind CSS
            </li>
            <li>
              <span role="img" aria-label="tada">
                🎉
              </span>{' '}
              Type checking Typescript
            </li>
            <li>
              <span role="img" aria-label="pencil2">
                ✏️
              </span>{' '}
              Linter with{' '}
              <a href="https://eslint.org" rel="nofollow">
                ESLint
              </a>
            </li>
            <li>
              <span role="img" aria-label="hammer_and_wrench">
                🛠
              </span>{' '}
              Code Formatter with{' '}
              <a href="https://prettier.io" rel="nofollow">
                Prettier
              </a>
            </li>
            <li>
              <span role="img" aria-label="fox_face">
                🦊
              </span>{' '}
              Husky for Git Hooks
            </li>
            <li>
              <span role="img" aria-label="no_entry_sign">
                🚫
              </span>{' '}
              Lint-staged for running linters on Git staged files
            </li>
            <li>
              <span role="img" aria-label="no_entry_sign">
                🗂
              </span>{' '}
              VSCode configuration: Debug, Settings, Tasks and extension for
              PostCSS, ESLint, Prettier, TypeScript
            </li>
            <li>
              <span role="img" aria-label="robot">
                🤖
              </span>{' '}
              SEO metadata, JSON-LD and Open Graph tags with Next SEO
            </li>
            <li>
              <span role="img" aria-label="robot">
                ⚙️
              </span>{' '}
              <a
                href="https://www.npmjs.com/package/@next/bundle-analyzer"
                rel="nofollow"
              >
                Bundler Analyzer
              </a>
            </li>
            <li>
              <span role="img" aria-label="rainbow">
                🌈
              </span>{' '}
              Include a FREE minimalist theme
            </li>
            <li>
              <span role="img" aria-label="hundred">
                💯
              </span>{' '}
              Maximize lighthouse score
            </li>
          </ul>
          <p>Built-in feature from Next.js:</p>
          <ul>
            <li>
              <span role="img" aria-label="coffee">
                ☕
              </span>{' '}
              Minify HTML &amp; CSS
            </li>
            <li>
              <span role="img" aria-label="dash">
                💨
              </span>{' '}
              Live reload
            </li>
            <li>
              <span role="img" aria-label="white_check_mark">
                ✅
              </span>{' '}
              Cache busting
            </li>
          </ul>
          <h2 className="font-semibold text-lg">Our Starter code Philosophy</h2>
          <ul>
            <li>Minimal code</li>
            <li>SEO-friendly</li>
            <li>
              <span role="img" aria-label="rocket">
                🚀
              </span>{' '}
              Production-ready
            </li>
          </ul>
          <p>
            Check my GitHub project for more information about{' '}
            <a href="">Nextjs Boilerplate</a>
          </p>
        </Main>
      </div>
    </>
  )
}

export default Index
