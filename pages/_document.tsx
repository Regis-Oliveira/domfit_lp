import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="facebook-domain-verification" content="ijdkr7v5pj31iakhz19tqqxbpho0sl" />
        <noscript>
          <Image
            alt="Facebook loader"
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
