import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/styles.scss';
import type { AppProps } from 'next/app'
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='wrapper'>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}
