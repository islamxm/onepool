import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/pageModules/spa/Hero/Hero";
import bgImg from '@/public/assets/bath-bg.png';
import Why from "@/components/Why/Why";
import { whyItemPropsTypes } from "@/components/Why/types";
import why1 from '@/public/assets/why-bath-1.svg';
import why2 from '@/public/assets/why-bath-2.svg';
import why3 from '@/public/assets/why-bath-3.svg';
import why4 from '@/public/assets/why-bath-4.svg';
import Prods from "@/pageModules/bath/Prods/Prods";
import { palItemPropsTypes } from "@/components/Pal/types";
import palImage from '@/public/assets/material.png';
import Pal from "@/components/Pal/Pal";
import Portfolio from "@/components/Portfolio/Portfolio";
import { portItemPropsTypes } from "@/components/Portfolio/types";
import serv1 from '@/public/assets/spa-serv-1.png';
import Feedback from "@/components/Feedback/Feedback";

// import port1 from '@/public/assets/bath-port-1-1.jpg';
// import port2 from '@/public/assets/bath-port-1-2.jpg';
// import port3 from '@/public/assets/bath-port-1-3.jpg';
// import port4 from '@/public/assets/bath-port-1-4.jpg';
// import port5 from '@/public/assets/bath-port-1-5.jpg';
// import port6 from '@/public/assets/bath-port-1-6.jpg';
// import port7 from '@/public/assets/bath-port-1-7.jpg';
// import port8 from '@/public/assets/bath-port-1-8.jpg';
// import port9 from '@/public/assets/bath-port-1-9.jpg';

import port1 from '@/public/assets/spa-port-act-1.png'
import port2 from '@/public/assets/spa-port-act-2.png'
import Head from "next/head";

import pal1 from '@/public/assets/bath-mat-1.png';
import pal2 from '@/public/assets/bath-mat-2.png';
import pal3 from '@/public/assets/bath-mat-3.png';
import pal4 from '@/public/assets/bath-mat-4.png';
import pal5 from '@/public/assets/bath-mat-5.png';
import pal6 from '@/public/assets/bath-mat-6.png';
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Faq from "@/components/Faq/Faq";

const whyList: whyItemPropsTypes[] = [
    {
        head: 'Индивидуальные дизайн-проекты',
        icon: why1
    },
    {
        head: 'Современные идеи',
        icon: why2
    },
    {
        head: 'Только отборные породы древесины',
        icon: why3
    },
    {
        head: 'Качественное оборудование',
        icon: why4
    }
]

const palList: palItemPropsTypes[] = [
    {
        image: pal1,
        name: 'Липа'
    },
    {
        image: pal2,
        name: 'Алтайский кедр'
    },
    {
        image: pal3,
        name: 'Канадский кедр'
    },
    {
        image: pal4,
        name: 'Ольха'
    },
    {
        image: pal5,
        name: 'Термососна'
    },
    {
        image: pal6,
        name: 'Абаш'
    }
]


// const portList:portItemPropsTypes[] = [
//     {
//         side: 'left',
//         head: 'Коттеджный поселок "Royal Hills"',
//         images: [port1, port2, port3,port4,port5,port6,port7,port8,port9],
//         descr: <>
//             <h4>Бассейн с джакузи для дома премиум-класса</h4>
//             <p>
//             <span>Материал:</span> бетон<br/>
//             </p>
//         </>
//     },
// ]
const portList:portItemPropsTypes[] = [
    {
        side: 'left',
        head: 'Коттеджный поселок "Royal Hills""',
        // images: [port1, port2, port3, port4, port5],
        images: [port1],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <b>Материал:</b> бетон<br/>
            <b>Размер бассейна:</b> длина 12,5м, ширина 3м<br/>
            <b>Размер джакузи:</b> 2,5м в диаметре<br/>
            <b>Глубина:</b> переменная<br/>
            <b>Тип бассейна:</b> переливной, щелевого типа<br/>
            <b>Облицовка:</b> итальянская мозаика<br/>
            <b>Оборудование:</b> стандартный набор закладных элементов премиум класса, подсветка, станция дезинфекции - ультрафиолет с озонатором, подогрев<br/>
            <b>Аттракционы:</b> противоток (искусственное течение), гидромассаж, аэромассаж<br/>
            <b>Использование:</b> круглогодичное<br/>
            <b>Обустройство пространства:</b> зона отдыха с эркером для беговой дорожки<br/>
            <b>Нестандартное решение, которое было использовано:</b> обустройство террасы с травмобезопасным покрытием из композитного декинга
            </p>
        </>
    },
    {
        side: 'right',
        head: 'Гольф клуб премиум класса',
        // images: [port6, port7, port8, port9, port10, port11, port12],
        images: [port2],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <b>Материал:</b> Металлические панели с защитным покрытием (25 лет гарантии на панели!)<br/>
            <b>Размеры бассейнов:</b> Взрослый: длина 20м, ширина 10м, глубина 1,55м. Детский: длина 10м, ширина 4м, глубина 0,6м<br/>
            <b>Глубина:</b> переменная<br/>
            <b>Оборудование:</b> стандартный набор закладных элементов для общественного бассейна, фильтры с высокой загрузкой песка, система ультрафиолетовой дезинфекции, станция контроля качества воды, подсветка, коммерческие тепловые насосы для подогрева воды.<br/>
            <b>Наш заказчик</b> - амбициозный молодой мужчина, который не допускал компромиссов и полутонов. Бассейны для детей и взрослых должны были соответствовать премиум-уровню клуба и быть эстетичными, функциональными и надежными в эксплуатации. Как вы понимаете, у нас не было права на ошибку!<br/>
            <b>Сложности</b> - Наличие озера осложняло подготовительные работы: грунтовые воды подступали слишком близко к поверхности. Для решения проблемы было построено железобетонное основание, что заказчик решил взять на себя. Для исключения каких-либо ошибок на этом важном этапе, общестроительные работы велись под жестким контролем нашей опытной команды (услуга шеф-монтаж).
            </p>
        </>
    },
    // {
    //     side: 'left',
    //     head: 'Частный банный спа-комплекс в коттеджном поселке',
    //     images: [port13, port14, port15, port16, port17, port18, port19, port20],
    //     descr: <>
    //         <h4>Бассейн с джакузи для дома премиум-класса</h4>
    //         <p>
    //         <span>Материал:</span> бетон<br/>
    //         </p>
    //     </>
    // },
    // {
    //     side: 'right',
    //     head: 'Банный спа-комплекс в горном отеле',
    //     images: [port21, port22, port22, port23, port24, port25, port26, port27, port28],
    //     descr: <>
    //         <h4>Бассейн с джакузи для дома премиум-класса</h4>
    //         <p>
    //         <span>Материал:</span> бетон<br/>
    //         </p>
    //     </>
    // },
    // {
    //     side: 'left',
    //     head: 'Банный спа-комплекс в отеле',
    //     images: [port29, port30, port31, port32, port33, port34, port35],
    //     descr: <>
    //         <h4>Бассейн с джакузи для дома премиум-класса</h4>
    //         <p>
    //         <span>Материал:</span> бетон<br/>
    //         </p>
    //     </>
    // },
]


const BathPage = () => {

    return (
        <SmoothScroll>
             <Head>
                <meta name="description" content="Бани и сауны"/>
                <title>Бани и сауны</title>
            </Head>
            <PageLayout>
            <Hero
                bg={bgImg}
                title="Строительство современных
                бань и саун под ключ"
                subtitle="Строим бани с 2001 года по всей России!"
                />
            <Why
                fr
                list={whyList}
                title={'Бани и сауны'}
                sub={
                    <>
                        Одним из важных и традиционных элементов загородного дома является своя баня или сауна.
                        <br/>
                        Это идеальное место, где можно снять стресс, укрепить дыхательные пути, расслабить мышцы и насытить ткани кислородом. Благодаря богатому разнообразию древесных пород, мы подберем именно ту отделку, которая наиболее гармонично подходит Вам!
                        <br/>
                        В строительстве бань и саун мы используем:
                    </>
                }
                />
            <Prods/>
            <Pal
                list={palList}
                title="Материалы для отделки"
                subtitle="В строительстве бань и саун мы используем только качественные, долговечные и экологически чистые материалы"
                isHasAction={true}
                />
            <Portfolio
                list={portList}
                head="ПОРТФОЛИО РЕАЛИЗОВАННЫХ ПРОЕКТОВ"
                />
            <Feedback
                isLight={false}
                />
            <Faq/>
            <Footer/>
        </PageLayout>
        </SmoothScroll>
    )
}


export default BathPage;