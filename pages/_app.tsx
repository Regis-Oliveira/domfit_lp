import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google';
import Script from 'next/script';
import Image from 'next/image';

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['400', '700'],
  variable: '--font-roboto'
});

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export default function App({ Component, pageProps }: AppProps) {  
  return (
    <main className={`${roboto.variable} font-sans`}>
    
    <Script id="facebook-pixel">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js%27);
        fbq('init', ${FB_PIXEL_ID});
        fbq('track', 'PageView');
      `}
    </Script>
    <noscript>
      <Image 
        alt="Facebook pixel" 
        height="1" 
        width="1" 
        className="display:none"
        src="https://www.facebook.com/tr?id=974260586880350&ev=PageView&noscript=1"      
      />
    </noscript>

      <Component {...pageProps} />
    </main>
  )
}
