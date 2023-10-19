/**
 * All the shared stuff that goes into <head> on `(blog)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */

export default function BlogMeta() {

  const WebsiteMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Website',
    url: 'https://www.theword.fyi',
  }

  return (
    <>
      {/* Name Meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="/robots.txt" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@MazorodzeHQ" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      <script
        key="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WebsiteMarkup) }}
      />
    </>
  )
}
