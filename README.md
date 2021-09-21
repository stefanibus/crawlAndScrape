# Crawler and Scraper on NextJS
##### Using an API-service from scraping-bot.io   [![Scraping-bot.io Logo](https://www.scraping-bot.io/wp-content/uploads/2019/07/logo_scrapingbot-full-white-192x35.png?raw=true)](https://www.scraping-bot.io/)

 
 
---

[![Sponsor Next JS Boilerplate](https://raw.githubusercontent.com/stefanibus/crawlAndScrape/main/public/assets/images/imageScraper2.png?raw=true)](https://crawl-and-scrape.vercel.app/)


#### Demo: https://crawl-and-scrape.vercel.app/


### Web scraping service  with three parameters: "Domain/Path", "CrawlingDepth" and "Searchterm" 
🚀 This is a Web scraping service to scrape and extract data from any webpage without getting blocked. The three examples below showcase the different CrawlingDepth the user can apply, as well as the way the "Domain and Path" can be choosen to start the scrawl. ⚡️
### matching Files will be copied to your server
The user may apply a searchterm: In that case, all matching pages (containing the relevant string) will be found, copied and saved to your server. PS: The maximum-crawling-depth of this bot is limited to a depth of 5 levels. 

#### build with
- scraping-bot.io 
- 🔥 [Next.js](https://nextjs.org) for Static Site Generator 
- 🎨 [Tailwind CSS](https://tailwindcss.com) (w/ JIT mode)
- 🎉 [TypeScript](https://www.typescriptlang.org) for Type checking
- ✏️ Lint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 [Prettier](https://prettier.io) Code Formatter
- 💅 PostCSS for processing Tailwind CSS and integrated to `styled-jsx` 
- ✅ Strict Mode for TypeScript and React 1  
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ One click deploymen to  Vercel  

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting
 
 
### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/stefanibus/crawlAndScrape.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
📦src
 ┣ 📂comps
 ┃ ┣ 📂comment
 ┃ ┃ ┗ 📜Comment.tsx
 ┃ ┣ 📂demo
 ┃ ┃ ┗ 📜DemoScraper.tsx
 ┃ ┗ 📂divider
 ┃ ┃ ┗ 📜Divider.tsx
 ┣ 📂layout
 ┃ ┗ 📜Meta.tsx
 ┣ 📂pages
 ┃ ┣ 📂about
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜[depthInfo].js
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜_document.tsx
 ┣ 📂styles
 ┃ ┗ 📜main.css
 ┣ 📂templates
 ┃ ┗ 📜Main.tsx
 ┗ 📂utils
 ┃ ┗ 📜AppConfig.ts

```
 
 
---

Made with ♥ by [make-mobile.de](https://make-mobile.de)  
 
