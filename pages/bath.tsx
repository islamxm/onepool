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
import port1 from '@/public/assets/bath-port-1-1.jpg';
import port2 from '@/public/assets/bath-port-1-2.jpg';
import port3 from '@/public/assets/bath-port-1-3.jpg';
import port4 from '@/public/assets/bath-port-1-4.jpg';
import port5 from '@/public/assets/bath-port-1-5.jpg';
import port6 from '@/public/assets/bath-port-1-6.jpg';
import port7 from '@/public/assets/bath-port-1-7.jpg';
import port8 from '@/public/assets/bath-port-1-8.jpg';
import port9 from '@/public/assets/bath-port-1-9.jpg';
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
        name: 'Ольха'
    },
    {
        image: pal3,
        name: 'Термососна'
    },
    {
        image: pal4,
        name: 'Алтайский кедр'
    },
    {
        image: pal5,
        name: 'Канадский кедр'
    },
    {
        image: pal6,
        name: 'Абаш'
    }
]


const portList:portItemPropsTypes[] = [
    {
        side: 'left',
        head: 'Коттеджный поселок "Royal Hills"',
        images: [port1, port2, port3,port4,port5,port6,port7,port8,port9],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
]


const BathPage = () => {

    return (
        <SmoothScroll>
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