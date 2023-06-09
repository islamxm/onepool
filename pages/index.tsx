import Hero from "@/pageModules/home/Hero/Hero";
import About from "@/pageModules/home/About/About";
import Prods from "@/pageModules/home/Prods/Prods";
import Servs from "@/pageModules/home/Servs/Servs";
import Why from "@/components/Why/Why";
import Steps from "@/pageModules/home/Steps/Steps";
import Footer from "@/components/Footer/Footer";
import Feedback from "@/components/Feedback/Feedback";
import { whyItemPropsTypes } from "@/components/Why/types";
import {useEffect} from 'react';
import why1 from '@/public/assets/why-1.svg'
import why2 from '@/public/assets/why-2.svg'
import why3 from '@/public/assets/why-3.svg'
import { servItemTypes } from "@/pageModules/home/Servs/types";
import serv1 from '@/public/assets/home-serv-1-1.png';
import serv2 from '@/public/assets/home-serv-1-2.png';
import serv3 from '@/public/assets/home-serv-1-3.png';
import serv4 from '@/public/assets/home-serv-2-1.png';
import serv5 from '@/public/assets/home-serv-2-2.png';
import serv6 from '@/public/assets/home-serv-2-3.png';
import serv7 from '@/public/assets/home-serv-3-1.png';
import serv8 from '@/public/assets/home-serv-3-2.png';
import serv9 from '@/public/assets/home-serv-3-3.png';
import SmoothScroll from "@/helpers/SmoothScroll";
import { stepItemTypes } from "@/pageModules/home/Steps/types";
import PageLayout from "@/components/PageLayout/PageLayout";
import Faq from "@/components/Faq/Faq";
import StepsMob from "@/components/StepsMob/StepsMob";
import Head from "next/head";
import { faqItemProps } from "@/components/Faq/types";
import Navbar from "@/components/Navbar/Navbar";
import ym from "react-yandex-metrika";

const whList: whyItemPropsTypes[] = [
    {
        head: 'Строим нешаблонные объекты',
        icon: why1,
        text: 'В каждый проект вносим уникальные элементы, что делает бассейн, хаммам или сауну не похожей на другие. Мы не просто создаем красоту, а делаем ее неповторимой!',
    },
    {
        head: 'Гарантия высокого качества',
        icon: why2,
        text: 'Мы гарантируем максимально высокий срок, благодаря проверенным материалам и качественной сборке',
    },
    {
        head: 'Профессионализм сотрудников',
        icon: why3,
        text: 'Профессионально и быстро обслуживаем построенные нами объекты. Готовы подключиться к возведению объекта на любом этапе строительства.',
    }
]


const servList: servItemTypes[] = [
    {
        title:'Реконструкция и модернизация',
        descr: <>
            <p>
            Услуга реконструкции актуальна для бассейнов, построенных 10-20 лет назад. Чаще всего услуга реконструкции требуется бассейнам различных санаториев, пансионатов, гостиниц советских времен постройки после долгого простоя.
            </p>
            <p>В реконструкцию входит:</p>
            <ul>
                <li>Замена покрытия чаши (пленка ПВХ, мозаика, камень натуральный)</li>
                <li>Обновление трубопровода</li>
                <li>Замена системы фильтрации</li>
                <li>Замена системы дезинфекции</li>
            </ul>
            <p>
            Возможна модернизация с установкой станций автоматической поддержки качества воды без использования хлора.
            </p>
        </>,
        side: 'right',
        images: [serv1,serv2,serv3]
    },
    {
        title:'Дизайн-проект',
        descr: <>
            <p>
            Для каждого клиента наши профессиональные дизайнеры 
            в команде с инженерами-проектировщиками создают индивидуальный дизайн-проект. Учитываются все пожелания заказчика от формы бассейна до изготовления эксклюзивных аттракционов.
            </p>
            <p>Что входит в дизайн-проект?</p>
            <ul>
                <li>Подбор оптимальных размеров бассейна и формы чаши в зависимости от назначения бассейна</li>
                <li>Распределение необходимых зон в бассейне и пространстве вокруг него: для детей, для взрослых, активная зона с аттракционами, с джакузи и т.д.</li>
                <li>Обустройство зоны отдыха вокруг бассейна: терраса - подбор материала, цвета, формы</li>
                <li>Обустройство зоны размещения обслуживающего оборудования: станция очистки, подогрев, фильтрация и т.д.</li>
                <li>Подбор аттракционов: водопад, водяная пушка, противоток (искусственное течение), гидромассаж, гейзер и т.д.</li>
                <li>Разработка дизайна облицовки бассейна и пространства вокруг него: использование нестандартных и уникальных решений.</li>
            </ul>
            <p>Сервисное обслуживание может быть разовым или регулярным.</p>
        </>,
        side: 'left',
        images: [serv4,serv5,serv6]
    },
    {
        title:'Обслуживание',
        descr: <>
            <p>
            Справиться с регулярным обслуживанием бассейна можно самостоятельно, использовав специальные средства 
            и оборудование.
            </p>
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
            <p>Сервисное обслуживание может быть разовым или регулярным.</p>
        </>,
        side: 'right',
        images: [serv7,serv8, serv9]
    },
]

const stepsList: stepItemTypes[] = [
    {
        label: <>Консультация</>
    },
    {
        label: <>Предварительная смета</>
    },
    {
        label: <>Договор</>
    },
    {
        label: <>Дизайн-проект</>
    },
    {
        label: <>Строительство</>
    },
    {
        label: <>Гарантийное сервисное обслуживание</>
    }
]


const faqList:faqItemProps[] = [
    {
        head: 'Все, что вы хотели знать о композитных бассейнах: материалы, технологии, преимущества',
        text: <>
            <p>
            Композитные бассейны являются одним из самых популярных и востребованных видов бассейнов в настоящее время. В этой статье мы расскажем все, что вы хотели знать о композитных бассейнах, начиная от материалов, используемых в их производстве, и заканчивая преимуществами, которые они предоставляют своим владельцам.
            </p>
        </>,
        moreText: <>
            <p>
            Композитные бассейны изготавливаются из высококачественных материалов, таких как стекловолокно, полимеры и смолы, которые делают их прочными, легкими и долговечными. Такие бассейны отлично подходят для любого климата, особенно в зонах с большим количеством осадков и влажности.
            </p>
            <p>
            Композитные бассейны также имеют ряд преимуществ по сравнению с другими типами бассейнов, таких как монтаж и установка в течение нескольких дней, экономия на затратах на обслуживание, минимальный уровень поглощения воды, легкость в установке и перемещении и многое другое.
            </p>
            <p>
            Если вы желаете установить композитный бассейн на своем участке, обращайтесь в нашу компанию PoolForm. Мы предлагаем качественные услуги по проектированию, установке и обслуживанию композитных бассейнов в Краснодарском крае и городе Сочи. Наша команда профессионалов поможет вам выбрать идеальный вариант для вашего участка и предоставит все необходимые услуги для установки и обслуживания вашего бассейна.
            </p>
            <p>
            Композитные бассейны являются идеальным решением для тех, кто хочет иметь на своем участке надежный и красивый бассейн. Изготовленные из современных композитных материалов, они отличаются высокой прочностью, устойчивостью к коррозии и возможностью создавать различные формы и размеры.
            </p>
            <p>
            Компания PoolForm предлагает широкий выбор композитных бассейнов различных моделей и конфигураций, которые могут быть установлены как внутри помещений, так и на открытом воздухе. Мы используем только высококачественные материалы и новейшие технологии производства, чтобы создавать бассейны, которые будут радовать вас своим качеством и долговечностью.
            </p>
            <p>
            Композитные бассейны также имеют ряд преимуществ по сравнению с другими типами бассейнов, такими как легкий вес, простота установки и удобство в эксплуатации. Они также не подвержены коррозии, не требуют регулярного покраски и могут быть легко обслуживаемыми. Кроме того, они могут быть изготовлены в различных цветах и фактурах, чтобы соответствовать любому стилю дома и участка.
            </p>
            <p>
            Обратитесь к нам, компании PoolForm, чтобы получить квалифицированную консультацию и помощь в выборе и установке композитного бассейна. Мы гарантируем высокое качество нашей работы и материалов, а также доступные цены и индивидуальный подход к каждому клиенту.
            </p>
        </>
    },
    {
        head: 'Стальные бассейны: прочность и надежность для вашего дома и сада',
        text: <>
            <p>
            Стальные бассейны от PoolForm – это надежное решение для создания комфортного и функционального пространства для купания на вашем участке. Мы предлагаем качественные стальные бассейны различных форм и размеров, которые будут идеальным дополнением к вашему дому или саду.
            </p>
        </>,
        moreText: <>
            <p>
            Прочность и надежность – главные преимущества стальных бассейнов. Мы используем только высококачественные материалы и современные технологии, чтобы обеспечить долговечность и надежность конструкции. Наши стальные бассейны не подвержены коррозии, устойчивы к температурным перепадам и легко монтируются.
            </p>
            <p>
            Установка стального бассейна – это процесс, который требует опыта и знаний. Наши специалисты обладают необходимыми знаниями и опытом для установки стального бассейна на вашем участке. Мы предоставляем полный спектр услуг – от проектирования до установки, гарантируя высокое качество и надежность нашей работы.
            </p>
            <p>
            Если вы хотите приобрести стальной бассейн для вашего дома или сада, обращайтесь к нам – компании PoolForm. Мы гарантируем индивидуальный подход, высокое качество нашей работы и доступные цены. С нами вы получите идеальный бассейн для вашей семьи и друзей.
            </p>
            <p>
            Стальные бассейны – это популярное решение для тех, кто ищет прочный и надежный бассейн для своего дома или сада. В компании PoolForm мы предлагаем широкий выбор стальных бассейнов различных размеров и форм, которые отличаются не только прочностью, но и эстетическим дизайном. Мы работаем с производителями, которые используют только качественные материалы и технологии для изготовления стальных бассейнов.
            </p>
            <p>
            Одним из главных преимуществ стальных бассейнов является их прочность и долговечность. Композиционная сталь, из которой изготавливаются наши бассейны, имеет высокую устойчивость к коррозии и механическим повреждениям. Благодаря этому стальные бассейны могут прослужить вам долгие годы без замены.
            </p>
            <p>
            Кроме того, стальные бассейны отличаются своей универсальностью и легкостью монтажа. Благодаря простому и надежному каркасу, нашу бассейны можно установить практически на любой тип грунта и в любых условиях. Кроме того, наша компания PoolForm предоставляет услуги по проектированию и монтажу стальных бассейнов под ключ, что позволит вам полностью довериться профессионалам и не беспокоиться о качестве работы.
            </p>
            <p>
            Если вы хотите приобрести стальной бассейн, обратитесь к нам, компании PoolForm. Мы гарантируем высокое качество наших услуг, долговечность и надежность наших бассейнов, а также индивидуальный подход к каждому клиенту.
            </p>
        </>
    },
    {
        head: 'Уход за бассейном: как правильно обслуживать и поддерживать чистоту вашего бассейна',
        text: <>
            <p>
            Ищете информацию о том, как правильно ухаживать за своим бассейном и поддерживать его в чистоте? Обратитесь к нам, компании PoolForm, чтобы получить профессиональные советы и рекомендации по уходу за вашим композитным или стальным бассейном.
            </p>
        </>,
        moreText: <>
            <p>
            Правильный уход за бассейном - это гарантия его долговечности и сохранности красивого внешнего вида. Мы расскажем вам о материалах и средствах, которые необходимы для поддержания чистоты воды в бассейне, и расскажем о методах, которые помогут избежать появления водорослей и бактерий.
            </p>
            <p>
            Учитывая регион нашей работы - Краснодарский край и город Сочи, мы знаем, что в этом регионе вода может быстро загрязняться из-за жаркого климата, поэтому мы предоставляем специальные инструменты и средства, чтобы помочь вам легко и быстро поддерживать чистоту воды в бассейне.
            </p>
            <p>
            Обращаясь к нам, компании PoolForm, вы можете быть уверены, что ваш бассейн будет всегда в отличном состоянии, и вы сможете наслаждаться купанием в нем в любое время. Свяжитесь с нами, чтобы получить профессиональную помощь в уходе за вашим бассейном.
            </p>
            <p>
            При правильном уходе за бассейном вы продлите его срок службы и сэкономите деньги на ремонте. В этой статье мы расскажем, как правильно обслуживать и поддерживать чистоту вашего бассейна.
            </p>
            <p>
            Регулярная чистка фильтра<br/>
            Фильтр является ключевым компонентом вашего бассейна, так как он удаляет из воды загрязнения и микроорганизмы. Регулярно чистите фильтр, чтобы он продолжал работать на максимальной эффективности. Это можно сделать самостоятельно, промыв фильтр с помощью воды из шланга, или же обратиться к специалистам.
            </p>
            <p>
            Регулярная очистка бассейна<br/>
            Необходимо регулярно очищать дно и стенки бассейна от песка, грязи, листьев и других отложений. Используйте для этого сетку или щетку, и обращайте особое внимание на зоны у водной линии
            </p>
            <p>
            Контроль за уровнем pH<br/>
            Контроль за уровнем pH очень важен для здоровья вашего бассейна и его пользователей. Идеальный уровень pH составляет от 7,2 до 7,6. Необходимо регулярно проверять уровень pH с помощью специального тест-набора и корректировать его при необходимости.
            </p>
            <p>
            Установка покрытия для бассейна<br/>
            Установка покрытия для бассейна поможет предотвратить загрязнение и сохранить температуру воды. Выберите покрытие в зависимости от ваших потребностей и бюджета.
            </p>
            <p>
            Регулярный осмотр оборудования<br/>
            Регулярно проверяйте оборудование вашего бассейна на наличие повреждений или износа. Если вы обнаружите проблему, немедленно обратитесь к профессионалам, чтобы они ее устранили.
            </p>
            <p>
            Обращайтесь к нам, компании PoolForm, чтобы получить профессиональную помощь в уходе за вашим бассейном. Мы предоставляем качественные услуги по обслуживанию и ремонту бассейнов, гарантируя высокое качество и надежность.
            </p>
        </>
    }
]



const HomePage = () => {

    useEffect(() => {
        ym && ym('init')
    }, [])
    

    return (
        <SmoothScroll>
            <Head>
                <title>Главная</title>
                <meta name="description" content="Главная"/>
            </Head>
           <PageLayout>
           <Hero/> 
           <About/>
           <Prods/>
           <Servs
            list={servList}
            title="Наши услуги"
            sub="Мы используем современные, эстетичные и инновационные решения, обеспечивая максимальное целебное воздействие и удовольствие от посещения."
            isHomePage
            />
           <Why
            title="За что нас выбирают Клиенты?"
            list={whList}
            haveLink
            />
           <Steps list={stepsList} title="Простые шаги реализации Вашего проекта"/>
           <StepsMob list={stepsList} title="Простые шаги реализации Вашего проекта"/>
           <Feedback
            isLight={false}
            />
            <Faq list={faqList}/>
           <Footer/>
           
           </PageLayout>
{/* 
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

export default HomePage;
