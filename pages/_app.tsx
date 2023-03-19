import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-inter'
});

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Script 
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            { if(f.fbq)return;n=f.fbq=function(){ n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments) };
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s) }(window, document,'script',
            ' https://connect.facebook.net/en_US/fbevents.js ');
            fbq('init', ${FB_PIXEL_ID});
            fbq('track', 'PageView');
          `,
        }}
      />      
      <Component {...pageProps} />
    </main>
  )
}
