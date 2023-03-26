import styles from './Catalog.module.scss';
import Container from '@/components/Container/Container';
import BlockHead from '@/components/BlockHead/BlockHead';
import {FC} from 'react';
import { catalogItemTypes, catalogPropsTypes } from './types';
import Item from './components/Item/Item';
import img1 from '@/public/assets/comp-catalog-1.png';
import img2 from '@/public/assets/comp-catalog-2.png';
import img3 from '@/public/assets/comp-catalog-3.png';
import img4 from '@/public/assets/comp-catalog-4.png';
import img5 from '@/public/assets/comp-catalog-5.jpg';
import img6 from '@/public/assets/comp-catalog-6.png';
import img7 from '@/public/assets/comp-catalog-7.png';
import img8 from '@/public/assets/comp-catalog-8.png';
import img9 from '@/public/assets/comp-catalog-9.png';
import img10 from '@/public/assets/comp-catalog-10.png';
import img11 from '@/public/assets/comp-catalog-11.png';
import img12 from '@/public/assets/comp-catalog-12.png';
import img13 from '@/public/assets/comp-catalog-13.png';
import img14 from '@/public/assets/comp-catalog-14.png';
import img15 from '@/public/assets/comp-catalog-15.png';
import img16 from '@/public/assets/comp-catalog-16.png';
import img17 from '@/public/assets/comp-catalog-17.png';
import img18 from '@/public/assets/comp-catalog-18.png';

const list:catalogItemTypes[] = [
    {
        image: img1,
        name:'Композитный бассейн Нео',
        descr: <>
            Длина: 1,7 м<br/>
            Ширина: 1,7 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 3 м3
        </>,
        prices: {
            oldPrice: 154440,
            price: 146718
        }
    },
    {
        image: img2,
        name:'Композитный бассейн Калипсо',
        descr: <>
            Длина: 2,4 м<br/>
            Ширина: 1,7 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 4 м3
        </>,
        prices: {
            oldPrice: 185400,
            price: 176130
        }
    },
    {
        image: img3,
        name:'Композитный бассейн Аврора',
        descr: <>
            Длина: 3 м <br/>
            Ширина: 2,4 м <br/>
            Глубина: 1,5 м<br/>
            Объём: 9 м3
        </>,
        prices: {
            oldPrice: 256500,
            price: 270000
        }
    },
    {
        image: img4,
        name:'Композитный бассейн Поло',
        descr: <>
            Длина: 3 м<br/>
            Ширина: 2,4 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 9 м3
        </>,
        prices: {
            price: 296685,
            oldPrice: 312300,
        }
    },
    {
        image: img5,
        name:'Композитный бассейн ДИОНА (мини-спа)',
        descr: <>
            Длина: 3,7 м<br/>
            Ширина: 2,4 м<br/>
            Глубина: 0,9 м<br/>
            Объём: 6 м3
        </>,
        prices: {
            price: 293550,
            oldPrice: 309000,
        }
    },
    {
        image: img6,
        name:'Композитный бассейн Бриз',
        descr: <>
            Длина: 4 м<br/>
            Ширина: 2,5 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 12 м3
        </>,
        prices: {
            price: 299250,
            oldPrice: 315000,
        }
    },
    {
        image: img7,
        name:'Композитный бассейн БАУНТИ',
        descr: <>
            Длина: 5 м<br/>
            Ширина: 2,4 м<br/>
            Глубина: 1,55 м<br/>
            Объём: 14 м3
        </>,
        prices: {
            price: 370500,
            oldPrice: 390000,
        }
    },
    {
        image: img8,
        name:'Композитный бассейн ОЛИМП',
        descr: <>
            Длина: 5 м<br/>
            Ширина: 2,4 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 12 м3
        </>,
        prices: {
            price: 438900,
            oldPrice: 462000,
        }
    },
    {
        image: img9,
        name:'Композитный бассейн ПАРАДИЗ 6',
        descr: <>
            Длина: 6 м<br/>
            Ширина: 3,7 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 30 м3
        </>,
        prices: {
            price: 513000,
            oldPrice: 540000,
        }
    },
    {
        image: img10,
        name:'Композитный бассейн РИВЬЕРА 65',
        descr: <>
            Длина: 6,5 м<br/>
            Ширина: 3,5 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 28 м3
        </>,
        prices: {
            price: 586245,
            oldPrice: 617100,
        }
    },
    {
        image: img11,
        name:'Композитный бассейн РИВЬЕРА 80352',
        descr: <>
            Длина: 8 м<br/>
            Ширина: 3,5 м<br/>
            Глубина: 1,5-2 м<br/>
            Объём: 44 м3
        </>,
        prices: {
            price: 1152900,
            oldPrice: 1281000,
        }
    },
    {
        image: img12,
        name:'Композитный бассейн ПАРАДИЗ 8',
        descr: <>
            Длина: 8 м<br/>
            Ширина: 3,7 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 40 м3
        </>,
        prices: {
            price: 843600,
            oldPrice: 888000,
        }
    },
    {
        image: img13,
        name:'Композитный бассейн РИВЬЕРА 8',
        descr: <>
            Длина: 8 м<br/>
            Ширина: 3,5 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 40 м3
        </>,
        prices: {
            price: 855000,
            oldPrice: 900000,
        }
    },
    {
        image: img14,
        name:'Композитный бассейн КЛАССИК 852',
        descr: <>
            Длина: 8,5 м<br/>
            Ширина: 3,8 м<br/>
            Глубина: 1,5-2 м<br/>
            Объём: 42 м3
        </>,
        prices: {
            price: 1206000,
            oldPrice: 1340000,
        }
    },
    {
        image: img15,
        name:'Композитный бассейн КЛАССИК 85',
        descr: <>
            Длина: 8,5 м<br/>
            Ширина: 3,8 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 42 м3
        </>,
        prices: {
            price: 877800,
            oldPrice: 924000,
        }
    },
    {
        image: img16,
        name:'Композитный бассейн КЛАССИК 10382',
        descr: <>
           Длина: 10 м<br/>
            Ширина: 3,8 м<br/>
            Глубина: 1,5-2 м<br/>
            Объём: 56 м3
        </>,
        prices: {
            price: 1458000,
            oldPrice: 1620000,
        }
    },
    {
        image: img17,
        name:'Композитный бассейн КЛАССИК 1038',
        descr: <>
           Длина: 10 м<br/>
            Ширина: 3,8 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 50 м3
        </>,
        prices: {
            price: 1054500,
            oldPrice: 1110000,
        }
    },
    {
        image: img18,
        name:'Композитный бассейн ПАРАДИЗ 10',
        descr: <>
            Длина: 10,5 м<br/>
            Ширина: 3,7 м<br/>
            Глубина: 1,5 м<br/>
            Объём: 52 м3
        </>,
        prices: {
            price: 1088700,
            oldPrice: 1146000,
        }
    }
] 

const Catalog:FC= () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.in}>
                    <div className={styles.head}>
                        <div className={styles.title}>
                            <BlockHead
                                title='Композитные бассейны от производителя'
                                />
                        </div>
                        <div className={styles.sub}>
                            Технология, которая используется на нашем производстве разработана технологами, с учетом условий эксплуатации в нашей полосе и отточена годами. 
                        </div>
                    </div>
                    <div className={styles.body}>
                        {
                            list?.map((item,index) => (
                                <div className={styles.item} key={index}>
                                    <Item {...item}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default Catalog;