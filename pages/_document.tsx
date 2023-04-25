import { Html, Head, Main, NextScript } from 'next/document'
import favicon from '@/public/assets/favicon.png';


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="shortcut icon" href='' type='image/png'/> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'}/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      
      </Head>
      <body>
        
        <Main />

        <NextScript />
        <script
            dangerouslySetInnerHTML={{
              __html: `
    
                (function(w,d,u){
                  var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                  var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
                })(window,document,'https://bitrix24.key-corp.ru/upload/crm/site_button/loader_1_qkdjnf.js');
              
              `
            }}
            />
          
           
        
      </body>
    </Html>
  )
}
