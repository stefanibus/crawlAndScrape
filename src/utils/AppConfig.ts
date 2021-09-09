export const AppConfig = {
  site_name: 'Starter',
  title: 'Crawler and Scraper for nevelingreply.de on NextJS',
  description: 'Using an API-service from scraping-bot.io',
  locale: 'de_DE',
}

const dev = process.env.NODE_ENV !== 'production'
export const server = dev
  ? 'http://localhost:3000'
  : 'https://crawl-and-scrape.vercel.app'
