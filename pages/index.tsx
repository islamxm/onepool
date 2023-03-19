import Hero from "@/pageModules/home/Hero/Hero";
import About from "@/pageModules/home/About/About";
import Prods from "@/pageModules/home/Prods/Prods";
import Servs from "@/pageModules/home/Servs/Servs";
import Why from "@/components/Why/Why";
import Steps from "@/pageModules/home/Steps/Steps";
import Footer from "@/components/Footer/Footer";
import Feedback from "@/components/Feedback/Feedback";
import { whyItemPropsTypes } from "@/components/Why/types";
import why1 from '@/public/assets/why-1.svg'
import why2 from '@/public/assets/why-2.svg'
import why3 from '@/public/assets/why-3.svg'

const whList: whyItemPropsTypes[] = [
    {
        head: 'Строим нешаблонные объекты',
        icon: why1,
        text: 'В каждый проект вносим уникальные элементы, что делает бассейн, хаммам или сауну не похожей на другие. Мы не просто создаем красоту, а делаем ее неповторимой!'
    },
    {
        head: 'Гарантия высокого качества',
        icon: why2,
        text: 'Мы гарантируем максимально высокий срок, благодаря проверенным материалам и качественной сборке'
    },
    {
        head: 'Профессионализм сотрудников',
        icon: why3,
        text: 'Профессионально и быстро обслуживаем построенные нами объекты. Готовы подключиться к возведению объекта на любом этапе строительства.'
    }
]

const HomePage = () => {

    return (
        <>
           <Hero/> 
           <About/>
           <Prods/>
           <Servs/>
           <Why
            title="За что нас выбирают Клиенты?"
            list={whList}
            haveLink
            />
           <Steps/>
           <Feedback/>
           <Footer/>
           
        </>
    )
}

export default HomePage;
