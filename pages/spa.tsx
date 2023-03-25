import Header from "@/components/Header/Header";
import Hero from "@/pageModules/spa/Hero/Hero";
import Why from "@/components/Why/Why";
import { whyItemPropsTypes } from "@/components/Why/types";
import why1 from '@/public/assets/why-spa-1.svg';
import why2 from '@/public/assets/why-spa-2.svg';
import why3 from '@/public/assets/why-spa-3.svg';
import why4 from '@/public/assets/why-spa-4.svg';
import Prods from "@/pageModules/home/Prods/Prods";
import { servItemTypes } from "@/pageModules/home/Servs/types";
import Portfolio from "@/components/Portfolio/Portfolio";
import Servs from "@/pageModules/home/Servs/Servs";
import serv1 from '@/public/assets/spa-serv-1.png';
import serv2 from '@/public/assets/spa-serv-2.png';
import serv3 from '@/public/assets/spa-serv-3.png';
import serv4 from '@/public/assets/spa-serv-4.png';
import serv5 from '@/public/assets/spa-serv-5.png';
import serv6 from '@/public/assets/spa-serv-6.png';
import serv7 from '@/public/assets/spa-serv-7.png';
import serv8 from '@/public/assets/spa-serv-8.png';
import serv9 from '@/public/assets/spa-serv-9.png';
import { portItemPropsTypes } from "@/components/Portfolio/types";
import Feedback from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";
import heroBg from '@/public/assets/spa-hero-bg.png';
import SmoothScroll from "@/helpers/SmoothScroll";
import port1 from '@/public/assets/spa-port-1-1.jpg';
import port2 from '@/public/assets/spa-port-1-2.jpg';
import port3 from '@/public/assets/spa-port-1-3.jpg';
import port4 from '@/public/assets/spa-port-1-4.jpg';
import port5 from '@/public/assets/spa-port-1-5.jpg';
import port6 from '@/public/assets/spa-port-2-1.jpg';
import port7 from '@/public/assets/spa-port-2-2.jpg';
import port8 from '@/public/assets/spa-port-2-3.jpg';
import port9 from '@/public/assets/spa-port-2-4.jpg';
import port10 from '@/public/assets/spa-port-2-5.jpg';
import port11 from '@/public/assets/spa-port-2-6.jpg';
import port12 from '@/public/assets/spa-port-2-7.jpg';

import port13 from '@/public/assets/spa-port-3-1.jpg';
import port14 from '@/public/assets/spa-port-3-2.jpg';
import port15 from '@/public/assets/spa-port-3-3.jpg';
import port16 from '@/public/assets/spa-port-3-4.jpg';
import port17 from '@/public/assets/spa-port-3-5.jpg';
import port18 from '@/public/assets/spa-port-3-6.jpg';
import port19 from '@/public/assets/spa-port-3-7.jpg';
import port20 from '@/public/assets/spa-port-3-8.jpg';

import port21 from '@/public/assets/spa-port-4-1.jpg';
import port22 from '@/public/assets/spa-port-4-2.jpg';
import port23 from '@/public/assets/spa-port-4-3.jpg';
import port24 from '@/public/assets/spa-port-4-4.jpg';
import port25 from '@/public/assets/spa-port-4-5.jpg';
import port26 from '@/public/assets/spa-port-4-6.jpg';
import port27 from '@/public/assets/spa-port-4-7.jpg';
import port28 from '@/public/assets/spa-port-4-8.jpg';


import port29 from '@/public/assets/spa-port-5-1.jpg';
import port30 from '@/public/assets/spa-port-5-2.jpg';
import port31 from '@/public/assets/spa-port-5-3.jpg';
import port32 from '@/public/assets/spa-port-5-4.jpg';
import port33 from '@/public/assets/spa-port-5-5.jpg';
import port34 from '@/public/assets/spa-port-5-6.jpg';
import port35 from '@/public/assets/spa-port-5-7.jpg';


import Steps from "@/pageModules/home/Steps/Steps";
import { stepItemTypes } from "@/pageModules/home/Steps/types";
import PageLayout from "@/components/PageLayout/PageLayout";

const whList:whyItemPropsTypes[] = [
    {
        head: 'Проектирование',
        icon:why1,
        text: 'Проектирование зданий и строений банных центров; разработка дизайна интерьера для вашего банного спа-комплекса.',
    },
    {
        head: 'Строительство',
        icon:why2,
        text: 'Строим банные спа-комплексы любых сложностей; реконструкция спа в отелях, центрах отдыха, медицинских и фитнес центрах',
    },
    {
        head: 'Отделка',
        icon:why3,
        text: 'Отделочные работы в спа-салонах и банных спа-комплексах.',
    },
    {
        head: 'Обслуживание',
        icon:why4,
        text: 'Сервисное обслуживание; обучение ваших сотрудников по техническому обслуживанию оборудования.',
    },
]

const servList:servItemTypes[] = [
    {
        title:'Бассейн',
        descr: <>
            <p>
            Визитной карточкой любого банного спа-комплекса является бассейн. Для получения еще большего удовольствия от водных процедур в бассейне банного спа-комплекса устанавливаются водные аттракционы, которые являются не только отличным развлечением для детей и взрослых, но и оказывают большую пользу на организм.
            </p>
            <br/>
            <br/>
            <p>
            Компания ONEPOOL с 2001 годы строит бассейны под ключ любой сложности и формы для коммерческого и частного пользования. Бетонные бассейны являются самыми надежными и долговечными, а также могут приобретать абсолютно разные размеры, формы и глубину. Облицовку чаши бассейна можно выполнить из лайнера ПВХ с 3D эффектом, мозаики или керамогранита.
            </p>
        </>,
        side: 'left',
        images: [serv1]
    },
    {
        title:'Гидромассажные ванны',
        descr: <>
            <p>
            Гидромассажные ванны стали одними из важнейших атрибутов комфортного отдыха 
            в спа-отелях. Нет ничего лучше расслабляющего гидромассажа после трудного рабочего дня или длительных туристических прогулок по городу.
            </p>
            <br/>
            <br/>
            <p>
            Гидромассажные обладают мощным терапевтическим воздействием, которое снимает усталостные и болевые ощущения, оказывают тонизирующее и бодрящее воздействие. Данное изделие, в отличие от традиционных вариантов, снабжено форсунками, через которые под давлением подаются струи воды, активно воздействующие на нервные окончания организма.
            </p>
        </>,
        side: 'right',
        images: [serv2]
    },
    {
        title:'Паровая комната (хаммам)',
        descr: <>
            <p>
            Паровая комната обладает всеми характеристиками классического хаммама. 
            В отделке современных хаммамов вместо мозаики чаще всего используют крупноформатный керамогранит стандартной толщины и тонкий - керлит.
            </p>
            <br/>
            <br/>
            <p>
            Современные формы лавок отличаются четкими линиями граней спинок и сидений. 
            В концепцию дизайна современных хаммамов идеально вписываются интерьерные парогенераторы, не требующие отдельного технического помещения.
            </p>
            <br/>
            <br/>
            <p>
            Современный хаммам характеризуется обилием стеклянных конструкций, плоской крышей и использованием современных материалов.
            </p>
        </>,
        side: 'left',
        images: [serv3]
    },
    {
        title:'Ледяной фонтан (снегогенератор)',
        descr: <>
            <p>
            В современных спа-отелях стало популярным устанавливать лёдогенератор/снегогенератор в паровой комнате или около нее. Эта процедура подразумевает обтирание льдом/снегом после банных процедур.
            </p>
            <br/>
            <br/>
            <p>
            Мы рекомендуем устанавливать в спа-зоне именно снегогенератор, так как обтирание льдом вызывает раздражение кожи и неприятные ощущения.
            </p>
        </>,
        side: 'right',
        images: [serv4]
    },
    {
        title:'Сауны и бани',
        descr: <>
            <p>
            Одним из важных и традиционных элементов общественного банного спа-комплекса или загородного дома является баня или сауна.
            </p>
            <br/>
            <br/>
            <p>
            Для того, чтобы посетитель сауны испытал не только ее лечебное воздействие, но и эстетическое удовольствие, мы предлагаем современные проекты помещений взамен на классические:
            </p>
            <br/>
            <br/>
            <p>
            Современный хаммам характеризуется обилием стеклянных конструкций, плоской крышей и использованием современных материалов.
            </p>
            <ul>
                <li>Добавление камня в парную комнату</li>
                <li>Установка парящих полок</li>
                <li>Добавление световых элементов - на потолке, под полками.</li>
            </ul>
        </>,
        side: 'left',
        images: [serv5]
    },
    {
        title:'Соляная комната',
        descr: <>
            <p>
            Наличие соляной комнаты является отличительной особенностью спа-зоны.
            </p>
            <br/>
            <br/>
            <p>
            Отличительной особенностью комнат является особый микроклимат и стерильный воздух. Наличие и размножение каких-либо патогенных микроорганизмов в соляной комнате полностью исключены. В ней соблюдается определенный уровень температуры, влажности, давления и насыщенности воздуха ионами. При нахождении внутри помещения комнаты распыленные в воздухе микрочастицы соли легко попадают в дыхательные пути человека.
            </p>
        </>,
        side: 'right',
        images: [serv6]
    },
    {
        title:'Душ впечатлений',
        descr: <>
            <p>
            Душ впечатлений - это уникальная комбинация воды, света, запаха и звука, которая способна вызвать целую гамму незабываемых ощущений. Оборудование для душевой позволяет посетителям ощутить силу карибского шторма, холодного скандинавского ливня, погрузиться в наполненный освещающими ароматами горный туман или попасть под град тяжелых капель тропического дождя, несущего запах экзотических цветов и фруктов.
            </p>
        </>,
        side: 'left',
        images: [serv7]
    },
    {
        title:'Сухой флоатинг',
        descr: <>
            <p>
            За последние несколько лет в банных спа-комплексах и спа-отелях стала набирать популярность процедура под названием флоатинг.
            </p>
            <br/>
            <br/>
            <p>
            Сухой флоатинг — это буквально парение в состоянии невесомости, которое работает благодаря иммерсионной ванне «Пленитюд». Свое название «сухая» иммерсия получила за счет использования водоизолирующей эластической пленки, которая обеспечивает погружение тела человека в водную среду.
            </p>
            <br/>
            <br/>
            <p>
            В отличие от обычного флоатинга сухой является более безопасным абсолютно для всех посетителей, так как отсутствует соприкосновение соленой воды с кожей.
            </p>
        </>,
        side: 'right',
        images: [serv8]
    },
    {
        title:'Зона релаксации (уголок тишины)',
        descr: <>
            <p>
            Зоны релаксации банных спа-комплексов должны служить полноценным местом отдыха посетителей после процедур, где они могли бы расслабиться, забыть на время о повседневных проблемах, отвлечься от городской суеты. Поэтому важно при обустройстве мест релаксации позаботиться об их удобстве, качественном оснащении.
            </p>
            <br/>
            <br/>
            <p>
            Мебель, дизайн комнаты должны быть выдержаны в едином стиле и создавать гармонию.
            </p>
        </>,
        side: 'left',
        images: [serv9]
    }
]

const portList:portItemPropsTypes[] = [
    {
        side: 'left',
        head: 'Банный спа-комплекс в апарт-отеле"',
        images: [port1, port2, port3, port4, port5],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
    {
        side: 'right',
        head: 'Домашний банный спа-комплекс""',
        images: [port6, port7, port8, port9, port10, port11, port12],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
    {
        side: 'left',
        head: 'Частный банный спа-комплекс в коттеджном поселке',
        images: [port13, port14, port15, port16, port17, port18, port19, port20],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
    {
        side: 'right',
        head: 'Банный спа-комплекс в горном отеле',
        images: [port21, port22, port22, port23, port24, port25, port26, port27, port28],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
    {
        side: 'left',
        head: 'Банный спа-комплекс в отеле',
        images: [port29, port30, port31, port32, port33, port34, port35],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
]

const stepsList: stepItemTypes[] = [
    {
        label: <>
            Проектирование и дизайн
            <span>Мы разработаем для вас проект уникальной зоны отдыха, обеспечивающей максимальное удобство, комфорт и безопасность.</span>
        </>
    },
    {
        label: <>
            Строительство
            <span>Реализуем весь комплекс строительных и отделочных работ. Производим подбор и монтаж необходимого оборудования, отделочных и строительных материалов. Сдаем объекты в эксплуатацию точно в срок.</span>
        </>
    },
    {
        label: <>
            Обслуживание
            <span>В сервисное обслуживание входит: выезд специалиста, проверка качества воды, проверка работоспособности оборудования, замена необходимых компонентов.</span>
        </>
    }
]


const SpaPage = () => {
    return (
        <SmoothScroll>
            <PageLayout>
            <Hero
                title="Строительство современных
                банных спа-комплексов 
                и Wellness зон под ключ"
                subtitle="Строим спа с 2001 года по всей России!"
                bg={heroBg}
                />
            <Why
                title="Банные спа-комплексы"
                list={whList}
                sub={
                    <>
                        Одним из приоритетных направлений ONE POOL является строительство банных спа-комплексов.
                        <br/>
                        <br/>
                        С 2001 года мы воплотили в жизнь более 70 проектов по строительству частных и общественных спа и wellmess зон, и зарекомендовали себя с наилучшей стороны.
                        <br/><br/>
                        <span>Можно выделить четыре основных пункта строительства, реконструкции
                        и модернизации банных спа-комплексов:</span>
                    </>
                }
                />
            <Prods/>
            <Servs
                list={servList}
                title="Решения для вашего банного спа-комплекса"
                />
            <Steps
                list={stepsList}
                title="Этапы строительства"
                />
            <Portfolio
                head="ПОРТФОЛИО РЕАЛИЗОВАННЫХ ПРОЕКТОВ"
                list={portList}
                />
            <Feedback
                isLight={false}
                />
            <Footer/>
            </PageLayout>
            
        </SmoothScroll>
    )
}

export default SpaPage;
