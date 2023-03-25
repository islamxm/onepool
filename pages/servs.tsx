import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Servs from "@/pageModules/home/Servs/Servs";
import { servItemTypes } from "@/pageModules/home/Servs/types";
import Feedback from "@/components/Feedback/Feedback";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import serv1 from '@/public/assets/home-serv-1-1.jpg';
import serv2 from '@/public/assets/home-serv-1-2.jpg';
import serv3 from '@/public/assets/home-serv-1-3.jpg';
import serv4 from '@/public/assets/home-serv-1-4.jpg';
import serv5 from '@/public/assets/home-serv-1-5.jpg';
import serv6 from '@/public/assets/home-serv-1-6.jpg';
import serv7 from '@/public/assets/home-serv-2-1.jpg';
import serv8 from '@/public/assets/home-serv-2-2.jpg';
import serv9 from '@/public/assets/home-serv-2-3.jpg';
import serv10 from '@/public/assets/home-serv-3-1.jpg';
import serv11 from '@/public/assets/home-serv-3-2.jpg';
const servList: servItemTypes[] = [
    {
        title:'Реконструкция и модернизация',
        descr: <>
            <p>
            Услуга реконструкции актуальна для бассейнов, построенных 10-20 лет назад. Чаще всего услуга реконструкции требуется бассейнам различных санаториев, пансионатов, гостиниц советских времен постройки после долгого простоя.
            </p>
            <br/>
      
            <p>В реконструкцию входит:</p>
            <br/>
            {/* <br/> */}
            <ul>
                <li>Замена покрытия чаши (пленка ПВХ, мозаика, камень натуральный)</li>
                <li>Обновление трубопровода</li>
                <li>Замена системы фильтрации</li>
                <li>Замена системы дезинфекции</li>
            </ul>
            <br/>
            <p>
            Возможна модернизация с установкой станций автоматической поддержки качества воды без использования хлора.
            </p>
        </>,
        side: 'right',
        images: [serv1,serv2,serv3,serv4,serv5,serv6]
    },
    {
        title:'Дизайн-проект',
        descr: <>
            <p>
            Для каждого клиента наши профессиональные дизайнеры 
            в команде с инженерами-проектировщиками создают индивидуальный дизайн-проект. Учитываются все пожелания заказчика от формы бассейна до изготовления эксклюзивных аттракционов.
            </p>
            <br/>
            <p>Что входит в дизайн-проект?</p>
            <br/>
            <ul>
                <li>Подбор оптимальных размеров бассейна и формы чаши в зависимости от назначения бассейна</li>
                <li>Распределение необходимых зон в бассейне и пространстве вокруг него: для детей, для взрослых, активная зона с аттракционами, с джакузи и т.д.</li>
                <li>Обустройство зоны отдыха вокруг бассейна: терраса - подбор материала, цвета, формы</li>
                <li>Обустройство зоны размещения обслуживающего оборудования: станция очистки, подогрев, фильтрация и т.д.</li>
                <li>Подбор аттракционов: водопад, водяная пушка, противоток (искусственное течение), гидромассаж, гейзер и т.д.</li>
                <li>Разработка дизайна облицовки бассейна и пространства вокруг него: использование нестандартных и уникальных решений.</li>
            </ul>
            <br/>
            <p>Сервисное обслуживание может быть разовым или регулярным.</p>
        </>,
        side: 'left',
        images: [serv7,serv8,serv9]
    },
    {
        title:'Обслуживание',
        descr: <>
            <p>
            Справиться с регулярным обслуживанием бассейна можно самостоятельно, использовав специальные средства 
            и оборудование.
            </p>
            <br/>
            <p>
            Специалисты отдела сервисного обслуживания нашей Компании готовы взять заботу о бассейне на себя.
            </p>
            <p>
            В сервисное обслуживание входит:
            </p>
            <ul>
                <li>Выезд специалиста</li>
                <li>Проверка качества воды</li>
                <li>Проверка работоспособности оборудования</li>
                <li>Замена необходимых компонентов</li>
                <li>Сезонная консервация/расконсервация бассейна</li>
            </ul>
            <br/>
            <p>Сервисное обслуживание может быть разовым или регулярным.</p>
        </>,
        side: 'right',
        images: [serv10,serv11]
    },
]

const ServsPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
      
            <div className={'top-block'}>
                <Servs
                list={servList}
                title="Наши услуги"
                sub="Мы используем современные, эстетичные и инновационные решения, обеспечивая максимальное целебное воздействие и удовольствие от посещения."
                isHomePage
                />
            </div>
            <Feedback
                isLight={false}
                />
            <Footer/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default ServsPage;