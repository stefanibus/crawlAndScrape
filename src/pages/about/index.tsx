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
      <h1 className="font-bold text-2xl  pt-12 pb-6">About...</h1>
      <p>
        <span role="img" aria-label="rocket">
          🚀
        </span>
        In case of any questions, feel free to contact me.This Web scraping
        service will extract data from any webpage you choose without getting
        blocked. Choose a searchstring and save pages matching your searchterm
        to the server.
        <span role="img" aria-label="zap">
          ⚡️
        </span>
      </p>
    </Main>
  )
}

export default About
