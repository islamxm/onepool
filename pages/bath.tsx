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
import Prods from "@/pageModules/home/Prods/Prods";
import { palItemPropsTypes } from "@/components/Pal/types";
import palImage from '@/public/assets/material.png';
import Pal from "@/components/Pal/Pal";
import Portfolio from "@/components/Portfolio/Portfolio";
import { portItemPropsTypes } from "@/components/Portfolio/types";
import serv1 from '@/public/assets/spa-serv-1.png';
import Feedback from "@/components/Feedback/Feedback";

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
        image: palImage,
        name: 'Липа'
    },
    {
        image: palImage,
        name: 'Липа'
    },
    {
        image: palImage,
        name: 'Липа'
    },
    {
        image: palImage,
        name: 'Липа'
    },
    {
        image: palImage,
        name: 'Липа'
    },
    {
        image: palImage,
        name: 'Липа'
    }
]


const portList:portItemPropsTypes[] = [
    {
        side: 'left',
        head: 'Коттеджный поселок "Royal Hills"',
        images: [serv1, serv1, serv1],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
    {
        side: 'right',
        head: 'Коттеджный поселок "Royal Hills""',
        images: [serv1, serv1, serv1],
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
        <>
            <Header/>
            <Hero
                bg={bgImg}
                title="Строительство современных
                бань и саун под ключ"
                subtitle="Строим бани с 2001 года по всей России!"
                />
            <Why
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
            <Footer/>
        </>
    )
}


export default BathPage;