import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";
import { portItemPropsTypes } from "@/components/Portfolio/types";
import Gal from "@/pageModules/works/Gal/Gal";
import Feedback from "@/components/Feedback/Feedback";
import SmoothScroll from "@/helpers/SmoothScroll";
import PageLayout from "@/components/PageLayout/PageLayout";
import Faq from "@/components/Faq/Faq";

import port1 from '@/public/assets/spa-port-act-1.png'
import port2 from '@/public/assets/spa-port-act-2.png'
import Head from "next/head";

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


// const portList:portItemPropsTypes[] = [
//     {
//         side: 'left',
//         head: 'Коттеджный поселок "Royal Hills"',
//         images: [serv1, serv1, serv1],
//         descr: <>
//             <h4>Бассейн с джакузи для дома премиум-класса</h4>
//             <p>
//             <span>Материал:</span> бетон<br/>
//             </p>
//         </>
//     },
//     {
//         side: 'right',
//         head: 'Коттеджный поселок "Royal Hills""',
//         images: [serv1, serv1, serv1],
//         descr: <>
//             <h4>Бассейн с джакузи для дома премиум-класса</h4>
//             <p>
//             <span>Материал:</span> бетон<br/>
//             </p>
//         </>
//     },
// ]



const WorksPage = () => {

    return (
        <SmoothScroll>  
            <Head>
                <meta name="description" content="Наши работы"/>
                <title>Наши работы</title>
            </Head>
            <PageLayout>
            <div className="top-block">
                <Portfolio
                    head="Портфолио реализованных проектов"
                    list={portList}
                    />
            </div>
            <Gal/>
            <Feedback
                isLight={true}
                />
            <Faq/>
            <Footer/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default WorksPage;