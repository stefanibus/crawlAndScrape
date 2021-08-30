// pages/posts/[id].js mydomain.com/2/?crawl=https:www.nivea.de
export default async (req, res) => {
  const { crawl, depth } = req.query
  res.end(`Depth: ${depth} \nCrawl: ${crawl}`)
}
