import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/styles.scss';
import type { AppProps } from 'next/app'
import Header from '@/components/Header/Header';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Mobmenu from '@/components/Mobmenu/Mobmenu';
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react';
import { toggleMenu } from '@/store/actions';
import { useAppDispatch } from '@/hooks/useTypesRedux';
import TopBtn from '@/components/TopBtn/TopBtn';


export default function App({ Component, pageProps }: AppProps) {




  return (
    <Provider store={store}>
      <div className='wrapper'>
        <Header/>
        <Component {...pageProps} />
      </div>
      <TopBtn/>
      <Mobmenu/>
     
      
       
    </Provider>
  )
}
