import { useRouter } from 'next/router'

import { Meta } from '../../layout/Meta'
import { Main } from '../../templates/Main'

const About = () => {
  const router = useRouter()

  return (
    <Main meta={<Meta title="About" description="About" />}>
      <div>
        <img
          src={`${router.basePath}/assets/images/Crawling-vs-scraping.png.webp`}
          alt="Nextjs starter banner"
        />
      </div>
      <h1 className="font-bold text-2xl">About...</h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        This is a Web scraping service to scrape and extract data from any
        webpage without getting blocked! The three examples below showcase the
        different CrawlingDepth the user can apply, as well as the way the
        &quot;Domain and Path&quot; can be choosen to start the scrawl.
        <span role="img" aria-label="zap">
          ⚡️
        </span>{' '}
        <br />
        <br />
        The user may apply a searchstring: In that case, all pages containing
        the relevant string will be found, copied and saved on our server. PS:
        The maximum-crawling-depth of this bot is limited to a depth of 5
        levels.
      </p>
    </Main>
  )
}

export default About
