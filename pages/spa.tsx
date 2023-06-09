import Header from "@/components/Header/Header";
import Hero from "@/pageModules/spa/Hero/Hero";
import Why from "@/components/Why/Why";
import { whyItemPropsTypes } from "@/components/Why/types";
import why1 from '@/public/assets/why-spa-1.svg';
import why2 from '@/public/assets/why-spa-2.svg';
import why3 from '@/public/assets/why-spa-3.svg';
import why4 from '@/public/assets/why-spa-4.svg';
import Prods from "@/pageModules/spa/Prods/Prods";
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
import Head from "next/head";
// import port1 from '@/public/assets/spa-port-1-1.jpg';
// import port2 from '@/public/assets/spa-port-1-2.jpg';
// import port3 from '@/public/assets/spa-port-1-3.jpg';
// import port4 from '@/public/assets/spa-port-1-4.jpg';
// import port5 from '@/public/assets/spa-port-1-5.jpg';
// import port6 from '@/public/assets/spa-port-2-1.jpg';
// import port7 from '@/public/assets/spa-port-2-2.jpg';
// import port8 from '@/public/assets/spa-port-2-3.jpg';
// import port9 from '@/public/assets/spa-port-2-4.jpg';
// import port10 from '@/public/assets/spa-port-2-5.jpg';
// import port11 from '@/public/assets/spa-port-2-6.jpg';
// import port12 from '@/public/assets/spa-port-2-7.jpg';

// import port13 from '@/public/assets/spa-port-3-1.jpg';
// import port14 from '@/public/assets/spa-port-3-2.jpg';
// import port15 from '@/public/assets/spa-port-3-3.jpg';
// import port16 from '@/public/assets/spa-port-3-4.jpg';
// import port17 from '@/public/assets/spa-port-3-5.jpg';
// import port18 from '@/public/assets/spa-port-3-6.jpg';
// import port19 from '@/public/assets/spa-port-3-7.jpg';
// import port20 from '@/public/assets/spa-port-3-8.jpg';

// import port21 from '@/public/assets/spa-port-4-1.jpg';
// import port22 from '@/public/assets/spa-port-4-2.jpg';
// import port23 from '@/public/assets/spa-port-4-3.jpg';
// import port24 from '@/public/assets/spa-port-4-4.jpg';
// import port25 from '@/public/assets/spa-port-4-5.jpg';
// import port26 from '@/public/assets/spa-port-4-6.jpg';
// import port27 from '@/public/assets/spa-port-4-7.jpg';
// import port28 from '@/public/assets/spa-port-4-8.jpg';


// import port29 from '@/public/assets/spa-port-5-1.jpg';
// import port30 from '@/public/assets/spa-port-5-2.jpg';
// import port31 from '@/public/assets/spa-port-5-3.jpg';
// import port32 from '@/public/assets/spa-port-5-4.jpg';
// import port33 from '@/public/assets/spa-port-5-5.jpg';
// import port34 from '@/public/assets/spa-port-5-6.jpg';
// import port35 from '@/public/assets/spa-port-5-7.jpg';


import port1 from '@/public/assets/spa-port-act-1.png'
import port2 from '@/public/assets/spa-port-act-2.png'


import Steps from "@/pageModules/home/Steps/Steps";
import { stepItemTypes } from "@/pageModules/home/Steps/types";
import PageLayout from "@/components/PageLayout/PageLayout";
import Faq from "@/components/Faq/Faq";
import StepsMob from "@/components/StepsMob/StepsMob";
import { faqItemProps } from "@/components/Faq/types";
import {useEffect} from 'react'
import ym from "react-yandex-metrika";

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
            <p>
            Компания POOLFORM с 2001 годы строит бассейны под ключ любой сложности и формы для коммерческого и частного пользования. Бетонные бассейны являются самыми надежными и долговечными, а также могут приобретать абсолютно разные размеры, формы и глубину. Облицовку чаши бассейна можно выполнить из лайнера ПВХ с 3D эффектом, мозаики или керамогранита.
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
            <p>
            Современные формы лавок отличаются четкими линиями граней спинок и сидений. 
            В концепцию дизайна современных хаммамов идеально вписываются интерьерные парогенераторы, не требующие отдельного технического помещения.
            </p>
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
            <p>
            Для того, чтобы посетитель сауны испытал не только ее лечебное воздействие, но и эстетическое удовольствие, мы предлагаем современные проекты помещений взамен на классические:
            </p>
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

const faqList: faqItemProps[] = [
    {
        head: 'Строительство SPA комплексов под ключ:',
        text: <>
            <p>
            Строительство SPA комплексов - это большой и сложный проект, который требует много внимания к деталям и квалифицированных специалистов. Если вы живете в Сочи и мечтаете о создании своего собственного SPA комплекса, то компания PoolForm может помочь вам в реализации этой задачи. Мы предоставляем полный спектр услуг по строительству SPA комплексов под ключ в Сочи и на всей территории Краснодарского края.
            </p>
        </>,
        moreText: <>
            <p>
            Наша компания имеет многолетний опыт работы в сфере строительства бассейнов, бань и саун, поэтому мы знаем все о том, как создать идеальный SPA комплекс. Мы работаем только с лучшими материалами и используем передовые технологии, чтобы обеспечить нашим клиентам высокое качество и долговечность нашей работы.
            </p>
            <p>
            Процесс работы с нами начинается с бесплатной консультации, где мы обсудим ваши пожелания и потребности, и дадим советы по дизайну и функционалу вашего будущего SPA комплекса. Мы разработаем индивидуальный проект, который будет отвечать всем вашим требованиям и пожеланиям.
            </p>
            <p>
            После утверждения проекта мы начнем строительство вашего SPA комплекса. Наши специалисты будут работать на стройке в течение всего процесса, чтобы обеспечить правильное выполнение всех работ и контролировать качество. Мы также будем вас информировать о ходе строительства и предоставлять детальные отчеты по каждому этапу.
            </p>
            <p>
            По завершении работ, мы предоставляем нашим клиентам гарантию на нашу работу, чтобы вы могли наслаждаться своим новым SPA комплексом без всяких проблем. Мы также предоставляем сервисное обслуживание и ремонт, если это необходимо.
            </p>
            <p>
            Так что, если вы хотите создать свой собственный SPA комплекс в Сочи, обращайтесь к нам. Мы обеспечим вас качественными услугами и индивидуальным подходом к каждому проекту.
            </p>
        </>
    },
    {
        head: 'Проектирование идеального банный комплекса под ключ:',
        text: <>
            <p>
            Планируя строительство банных комплексов, важно учесть множество деталей, чтобы получить идеальный результат. Но какой должен быть идеальный банный комплекс? Этот вопрос лучше всего задать экспертам компании PoolForm, которые могут помочь с проектированием и строительством банных комплексов под ключ в Краснодарском крае, включая город Сочи.
            </p>
        </>,
        moreText: <>
            <p>
            Перед тем, как начать строительство, важно рассмотреть все необходимые аспекты проектирования, включая выбор места, размеры и стиль банных комплексов, а также выбор материалов и оборудования.
            </p>
            <p>
            Компания PoolForm специализируется на строительстве банных комплексов под ключ в Краснодарском крае и предлагает своим клиентам профессиональное проектирование с учетом всех этих факторов. Опытные дизайнеры и инженеры помогут клиентам создать идеальный банный комплекс, учитывая все их пожелания и предпочтения.
            </p>
            <p>
            Кроме того, PoolForm предоставляет подробные проекты банных комплексов с расчетом стоимости и описанием всех необходимых материалов и оборудования, что поможет клиентам управлять своим бюджетом и избежать непредвиденных расходов.
            </p>
            <p>
            Следующим шагом является строительство банных комплексов под ключ. Компания PoolForm обеспечивает полное сопровождение проекта, начиная от подготовки места для строительства до финальной отделки и установки оборудования. Клиенты могут быть уверены, что все работы выполняются профессионально и в срок.
            </p>
            <p>
            Таким образом, выбор компании PoolForm для проектирования и строительства банных комплексов под ключ в Краснодарском крае является лучшим решением для тех, кто хочет получить идеальный результат и избежать непредвиденных расходов.
            </p>
            <p>
            Когда речь идет о проектировании и строительстве идеального банный комплекса в Краснодарском крае, важно учитывать множество факторов. Например, выбор материалов, определение площади и расположения здания, проектирование парной и других помещений, оборудование и многое другое. В этой статье мы расскажем о некоторых важных аспектах, которые помогут создать идеальный банный комплекс под ключ в Краснодарском крае вместе с компанией PoolForm.
            </p>
            <p>
            Выбор материалов<br/>
            При выборе материалов для строительства банный комплекса, необходимо учитывать множество факторов, таких как стоимость, прочность, изоляционные свойства, экологичность и т.д. Одним из самых популярных материалов является дерево, которое придает банный комплексу теплую атмосферу и экологичность. Кроме того, дерево обладает хорошими изоляционными свойствами, которые помогают сохранить тепло внутри бани. Однако, дерево может требовать регулярного ухода и обработки специальными средствами для сохранения своих свойств.
            </p>
            <p>
            Планирование и проектирование помещений<br/>
            Планирование и проектирование помещений - важный этап при создании идеального банный комплекса. Необходимо учитывать площадь здания, количество и размер помещений, расположение их внутри здания, а также функциональность каждого помещения. Одним из основных помещений является парная, которая должна быть спроектирована с учетом особенностей выбранного материала, а также размеров и формы помещения.
            </p>
            <p>
            Оборудование<br/>
            При создании идеального банный комплекса, необходимо также уделить внимание оборудованию. В зависимости от потребностей и пожеланий заказчика, можно выбрать различные виды оборудования, такие как парогенераторы, каменки, устройства для подогрева воды и т.д. Кроме того, необходимо учитывать технические требования к установке оборудования и соответствующие нормы безопасности.
            </p>
            <p>
            Кроме того, мы предлагаем нашим клиентам не только возможность строительства банного комплекса под ключ, но и проектирование самого оптимального варианта, который будет соответствовать всем их пожеланиям и требованиям.
            </p>
            <p>
            При проектировании банных комплексов, наши специалисты учитывают не только размеры участка и желаемое количество помещений, но и особенности климата и географии места, где будет расположен комплекс. Кроме того, мы также учитываем личные пожелания наших клиентов, касающиеся дизайна, материалов и технических особенностей.
            </p>
            <p>
            Одним из главных преимуществ нашей компании является использование современных технологий и инновационных материалов в проектировании и строительстве банных комплексов. Мы используем только качественные и проверенные материалы, которые обеспечивают долговечность и прочность конструкции.
            </p>
            <p>
            Кроме того, наши специалисты следят за техническими новинками в области оборудования и систем автоматизации, которые могут значительно повысить комфорт и функциональность банного комплекса. Мы готовы предложить нашим клиентам широкий выбор оборудования и систем, которые позволят создать идеальную атмосферу для отдыха и релаксации.
            </p>
            <p>
            Также, мы уделяем большое внимание вопросам безопасности и соблюдению всех норм и требований по строительству банного комплекса. Наши специалисты имеют большой опыт работы в данной области и знают все тонкости и нюансы, связанные с правильным строительством и эксплуатацией банных комплексов.
            </p>
            <p>
            Таким образом, обращаясь к нашей компании PoolForm для проектирования и строительства банных комплексов под ключ, вы можете быть уверены, что получите качественный и надежный продукт, который будет полностью соответствовать вашим требованиям и пожеланиям.
            </p>
        </>
    },
    {
        head: "Стоимость строительства спа комплексов в Сочи и Краснодарском крае.",
        text: <>
            <p>
            При оценке стоимости строительства SPA комплексов, необходимо учитывать несколько ключевых факторов:
            </p>
            <p>
            Площадь комплекса: чем больше площадь, тем больше материалов и времени потребуется для его строительства.
            </p>
        </>,
        moreText: <>
            <p>
            Используемые материалы: выбор материалов может сильно влиять на стоимость. Например, натуральный камень или эксклюзивные породы дерева могут быть дороже, чем обычный кирпич или бетон.
            </p>
            <p>
            Уровень оснащения: от выбора оборудования и мебели до инсталляции специальных систем вентиляции и управления водой, все это может влиять на стоимость проекта.
            </p>
            <p>
            Расположение объекта: расстояние до места строительства, сложность транспортировки материалов, доступность строительной площадки - все это может повлиять на стоимость.
            </p>
            <p>
            Компания PoolForm предлагает комплексный подход к оценке стоимости строительства SPA комплексов, учитывая все эти факторы и предлагая наиболее оптимальное решение для каждого проекта.
            </p>
            <p>
            Стоимость строительства SPA комплексов в Краснодарском крае и Сочи может варьироваться от 500 тысяч до нескольких миллионов рублей. Окончательная цена зависит от многих факторов, поэтому для точной оценки стоимости лучше обратиться к специалистам компании PoolForm. Они могут провести бесплатную консультацию и предложить наилучший вариант для вашего SPA комплекса.
            </p>
            <p>
            Помимо основной стоимости материалов и работ, следует учитывать и другие расходы, такие как оборудование, мебель, декор и технические системы (вентиляция, отопление, электричество и т.д.). Все эти элементы могут влиять на конечную стоимость проекта, поэтому важно учесть их заранее при расчете бюджета.
            </p>
            <p>
            Компания PoolForm готова помочь вам рассчитать стоимость строительства SPA комплекса под ключ в соответствии с вашими потребностями и пожеланиями. Мы предлагаем индивидуальный подход к каждому клиенту и проектирование SPA комплексов любой сложности, от простых вариантов до элитных проектов. Мы также поможем вам подобрать оптимальный вариант оборудования и технических систем, чтобы обеспечить максимальный комфорт и удовлетворение потребностей клиентов.
            </p>
            <p>
            Кроме того, наша компания гарантирует высокое качество работы и соблюдение всех сроков выполнения проекта. Мы работаем только с проверенными поставщиками материалов и оборудования, чтобы обеспечить долговечность и безопасность ваших SPA комплексов.
            </p>
            <p>
            Если вы хотите заказать строительство SPA комплекса под ключ в Краснодарском крае или Сочи, обратитесь к компании PoolForm. Мы с удовольствием поможем вам воплотить в жизнь вашу мечту о идеальном SPA комплексе.
            </p>
        </>
    }
]

const SpaPage = () => {
    useEffect(() => {
        ym && ym('init')
    }, [])
    
    return (
        <SmoothScroll>
            <Head>
                <meta name='description' content="Спа"/>
                <title>Спа</title>
            </Head>
            <PageLayout>
            <Hero
                title="Строительство современных
                банных спа-комплексов 
                и Wellness зон под ключ"
                subtitle="Строим спа с 2001 года по всей России!"
                bg={heroBg}
                />
            <Why
                fr
                title="Банные спа-комплексы"
                list={whList}
                sub={
                    <>
                        Одним из приоритетных направлений POOLFORM является строительство банных спа-комплексов.
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
            <StepsMob
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
            <Faq list={faqList}/>
            <Footer/>
            </PageLayout>
            {/* <script
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                    m[i].l=1*new Date();
                    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                 
                    ym(93342101, "init", {
                         clickmap:true,
                         trackLinks:true,
                         accurateTrackBounce:true,
                         webvisor:true
                    });
                 
                    `
                }}
                />
                <noscript><div><img src="https://mc.yandex.ru/watch/93342101" style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>

                <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
         
            ym(93342244, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });
         
            `
          }}
          /> */}
        <noscript><div><img src="https://mc.yandex.ru/watch/93342244" style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
        </SmoothScroll>
    )
}

export default SpaPage;
