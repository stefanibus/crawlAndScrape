import Document, { Html, Head, Main, NextScript } from 'next/document'

import { AppConfig } from '../utils/AppConfig'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <div className="px-4 sm:px-6">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
