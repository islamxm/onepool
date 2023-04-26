import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Servs from "@/pageModules/home/Servs/Servs";
import { servItemTypes } from "@/pageModules/home/Servs/types";
import Feedback from "@/components/Feedback/Feedback";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import serv1 from '@/public/assets/serv-1.png';
import serv2 from '@/public/assets/servs-2.png';
import serv3 from '@/public/assets/spa-serv-1.png';
import Faq from "@/components/Faq/Faq";
import Head from "next/head";
import { faqItemProps } from "@/components/Faq/types";


const servList: servItemTypes[] = [
    {
        title:'Реконструкция и модернизация',
        descr: <>
            <p>
            Наша компания предоставляет услуги по реконструкции и модернизации бассейнов любой сложности, которые были построены 10-20 лет назад. Это актуально, прежде всего, для санаториев, пансионатов, гостиниц, построенных 
            в советские времена и требующих длительного простоя.
            </p>
            <p>В реконструкцию входит:</p>
            <ul>
                <li>Замена покрытия чаши (пленка ПВХ, мозаика, камень натуральный)</li>
                <li>Обновление трубопровода</li>
                <li>Замена системы фильтрации и дезинфекции</li>
            </ul>
            <p>
            Мы предоставляем также услугу модернизации бассейнов с установкой автоматической станции поддержки качества воды без использования хлора. Таким образом, мы гарантируем максимальный комфорт и безопасность при использовании бассейна, а также продлеваем его срок службы.
            </p>
        </>,
        side: 'right',
        images: [serv1]
    },
    {
        title:'Дизайн-проект',
        descr: <>
            <p>Что входит в дизайн-проект?</p>
            <ul>
                <li>Индивидуальный дизайн-проект, созданный профессиональными дизайнерами и инженерами-проектировщиками</li>
                <li>Подбор оптимальных размеров бассейна и формы чаши в зависимости от назначения бассейна</li>
                <li>Распределение необходимых зон в бассейне и пространстве вокруг него: для детей, для взрослых, активная зона с аттракционами, с джакузи и т.д.</li>
                <li>Обустройство зоны отдыха вокруг бассейна: терраса - подбор материала, цвета, формы</li>
                <li>Обустройство зоны размещения обслуживающего оборудования: станция очистки, подогрев, фильтрация и т.д</li>
                <li>Подбор аттракционов: водопад, водяная пушка, противоток (искусственное течение), гидромассаж, гейзер и т.д.</li>
                <li>Разработка дизайна облицовки бассейна и пространства вокруг него: использование нестандартных и уникальных решений</li>
            </ul>
            <p>Сервисное обслуживание может быть разовым или регулярным.</p>
        </>,
        side: 'left',
        images: [serv2]
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
            <br/>
            <p>Сервисное обслуживание может быть разовым или регулярным.</p>
        </>,
        side: 'right',
        images: [serv3]
    },
]


const faqList: faqItemProps[] = [
    {
        head: 'Реконструкция бассейнов: как сэкономить на строительстве нового бассейна',
        text: <>
            <p>
            Реконструкция бассейна - это эффективный способ сэкономить деньги на строительстве нового бассейна. Наша компания, PoolForm, предоставляет услуги по реконструкции бассейнов любой сложности, включая замену покрытия чаши, обновление трубопроводов и системы фильтрации и дезинфекции. Мы поможем преобразить ваш старый бассейн в современный и комфортный объект отдыха, который соответствует современным стандартам качества и безопасности.
            </p>
        </>,
        moreText: <>
            <p>
            Реконструкция бассейна - это также возможность улучшить дизайн вашего бассейна и добавить новые функции, например, гидромассаж или водопад. Мы используем только высококачественные материалы и оборудование, чтобы гарантировать долговечность и надежность нашей работы.
            </p>
            <p>
            Выбирая реконструкцию бассейна вместо строительства нового, вы можете сэкономить значительную сумму денег и время. Обратитесь к нам, чтобы получить консультацию по реконструкции вашего бассейна и узнать, как мы можем помочь вам сэкономить на строительстве нового бассейна. Наша компания, PoolForm, готова предоставить вам высококачественные и профессиональные услуги реконструкции бассейна в Краснодарском крае и городе Сочи.
            </p>
            <p>
            При реконструкции бассейнов, наши специалисты проводят необходимый анализ состояния бассейна и предлагают оптимальное решение для его модернизации. Наша компания использует только качественные материалы и профессиональное оборудование для проведения реконструкции, что гарантирует безопасность и долговечность бассейна.
            </p>
            <p>
            Одной из главных причин, по которой наши клиенты выбирают реконструкцию бассейна вместо строительства нового, является экономия времени и денег. Реконструкция бассейна может быть более выгодной альтернативой строительству нового, так как мы используем уже существующий бассейн и не требуется проведение работ по его полной перестройке. Таким образом, мы можем значительно сократить время и стоимость реконструкции.
            </p>
            <p>
            Кроме того, реконструкция бассейна позволяет сохранить историческую ценность и архитектурный стиль здания, в котором он расположен. Это может быть важным фактором для объектов культурного наследия, санаториев и гостиниц, где сохранение исторической ценности является приоритетом.
            </p>
            <p>
            Обращаясь к нам, вы получаете профессиональную и качественную реконструкцию бассейна, которая не только сэкономит ваши деньги, но и обеспечит безопасность и удобство использования бассейна на долгие годы вперед. Не откладывайте реконструкцию бассейна на потом, обратитесь к нам прямо сейчас!
            </p>
        </>
    },
    {
        head: 'Модернизация бассейнов: новые технологии безопасности и экономии воды',
        text: <>
            <p>
            Наша команда профессиональных инженеров и техников поможет вам обновить ваш бассейн, установить новую систему фильтрации, автоматическую систему управления, оборудование для очистки воды и другие современные технологии, которые могут значительно улучшить качество воды и снизить затраты на обслуживание.
            </p>
        </>,
        moreText: <>
            <p>
            Мы также предлагаем услугу установки новой системы безопасности для вашего бассейна, которая может включать в себя автоматическую систему контроля качества воды, сенсоры движения, замки на дверях и ограждения вокруг бассейна.
            </p>
            <p>
            Помните, что модернизация бассейна не только улучшит его внешний вид, но и может значительно повысить его эффективность и безопасность. Обратитесь к нам, чтобы получить качественные услуги модернизации бассейнов и сделать свой бассейн более современным и экономичным.
            </p>
            <p>
            Компания PoolForm рада предложить свои услуги по модернизации бассейнов любой сложности. Мы устанавливаем новейшие технологии безопасности и экономии воды, что позволяет снизить затраты на эксплуатацию бассейна и обеспечить безопасность для пользователей.
            </p>
            <p>
            Одной из новейших технологий, которую мы предлагаем, является установка автоматической станции поддержки качества воды без использования хлора. Эта технология обеспечивает максимальную безопасность для здоровья и комфорт для плавающих. Она также снижает затраты на эксплуатацию бассейна, т.к. не требуется покупка и использование хлора.
            </p>
            <p>
            Мы также устанавливаем системы экономии воды, которые позволяют снизить расход воды при заполнении бассейна и в процессе эксплуатации. Это помогает не только снизить расходы на воду, но и снижает влияние на окружающую среду.
            </p>
            <p>
            Обратитесь к нам, чтобы получить квалифицированную консультацию и выбрать наилучшие решения для модернизации вашего бассейна. Мы гарантируем качество нашей работы и полную удовлетворенность клиентов.
            </p>
        </>
    },
    {
        head: 'Интерьер и экстерьер бассейнов: как создать стильный и комфортный дизайн своей мечты',
        text: <>
            <p>
            Интерьер и экстерьер бассейнов: как создать стильный и комфортный дизайн своей мечты
            </p>
            <p>
            Хотите создать незабываемый дизайн бассейна, который будет не только стильным и современным, но и комфортным для использования? Наша компания PoolForm предоставляет услуги по созданию дизайна интерьера и экстерьера бассейнов любой сложности.
            </p>
        </>,
        moreText: <>
            <p>
            Мы предлагаем индивидуальный дизайн-проект, созданный профессиональными дизайнерами и инженерами-проектировщиками. Мы учитываем все ваши пожелания и предпочтения, а также особенности местности, на которой будет установлен бассейн.
            </p>
            <p>
            В нашем дизайн-проекте мы подберем оптимальные размеры и форму чаши бассейна, а также распределим необходимые зоны в бассейне и пространстве вокруг него, учитывая возраст и предпочтения пользователей. Также мы разработаем дизайн облицовки бассейна и пространства вокруг него, используя нестандартные и уникальные решения.
            </p>
            <p>
            Мы предлагаем обустройство зоны отдыха вокруг бассейна, подбор материала, цвета и формы террасы, а также обустройство зоны размещения обслуживающего оборудования: станции очистки, подогрева, фильтрации и т.д.
            </p>
            <p>
            В нашем ассортименте также есть аттракционы для бассейна: водопад, водяная пушка, противоток (искусственное течение), гидромассаж, гейзер и т.д.
            </p>
            <p>
            Мы гарантируем создание стильного и комфортного дизайна, который будет полностью соответствовать вашим потребностям и предпочтениям. Свяжитесь с нами, чтобы получить консультацию и заказать дизайн-проект бассейна уже сегодня!
            </p>
            <p>
            Когда вы строите бассейн, дизайн является одним из самых важных аспектов проекта. Важно, чтобы ваш бассейн сочетал в себе функциональность и эстетическое привлекательность. Наши профессиональные дизайнеры и инженеры-проектировщики помогут вам создать уникальный и стильный интерьер и экстерьер для вашего бассейна.
            </p>
            <p>
            Мы предлагаем индивидуальный дизайн-проект, который будет учитывать все ваши пожелания и потребности, а также особенности вашего участка. Мы поможем подобрать оптимальные размеры и форму чаши бассейна, а также распределить зоны в бассейне и пространстве вокруг него.
            </p>
            <p>
            Мы также предлагаем широкий выбор аттракционов для вашего бассейна, таких как водопад, водяная пушка, противоток (искусственное течение), гидромассаж, гейзер и многое другое.
            </p>
            <p>
            Наши профессиональные дизайнеры подберут для вас материалы и цветовые решения, которые будут идеально сочетаться с архитектурой вашего дома и ландшафтом вашего участка.
            </p>
            <p>
            С нами вы получите не только стильный дизайн, но и максимальный комфорт и безопасность при использовании бассейна. Обращайтесь к нам, чтобы создать свой идеальный бассейн мечты.
            </p>
        </>
    },
    {
        head: 'Дизайн-проект бассейна: как сохранить гармонию при интеграции бассейна в ландшафтный дизайн участка',
        text: <>
            <p>
            Дизайн бассейна – это не только создание красивой и удобной конструкции, но и ее гармоничное интегрирование в окружающий ландшафт. В компании PoolForm мы предлагаем услуги по разработке индивидуальных дизайн-проектов, которые учитывают особенности участка и пожелания заказчика.
            </p>
        </>,
        moreText: <>
            <p>
            Наша команда профессиональных дизайнеров и инженеров-проектировщиков поможет вам подобрать оптимальные размеры и форму чаши бассейна, а также распределить необходимые зоны вокруг него: для детей, для взрослых, активную зону с аттракционами и т.д. Мы также обеспечим обустройство зоны отдыха вокруг бассейна, подберем материалы для террасы, и разместим обслуживающее оборудование, такое как станция очистки, подогрев, фильтрация и т.д.
            </p>
            <p>
            Важным этапом нашей работы является разработка дизайна облицовки бассейна и пространства вокруг него, при которой мы используем нестандартные и уникальные решения. Мы также предлагаем подбор аттракционов для создания уникального образа вашего бассейна.
            </p>
            <p>
            При этом мы гарантируем, что бассейн будет интегрирован гармонично в ландшафтный дизайн вашего участка, сохраняя единство стиля и создавая комфортную атмосферу. Обратитесь к нам, и мы поможем создать бассейн вашей мечты! Название нашей компании - PoolForm.
            </p>
            <p>
            Вы мечтаете о бассейне, который станет не только вашим источником удовольствия, но и гармоничным элементом ландшафта вашего участка? Мы поможем вам реализовать свою мечту! Компания PoolForm предоставляет услуги по созданию индивидуальных дизайн-проектов бассейнов, которые будут соответствовать вашим потребностям и пожеланиям.
            </p>
            <p>
            Мы предлагаем комплексный подход к проектированию бассейна, который включает в себя не только техническую сторону, но и архитектурное и ландшафтное проектирование. Наши профессиональные дизайнеры и инженеры-проектировщики подберут оптимальные размеры и форму бассейна, которые соответствуют его функциональному назначению и гармонично впишутся в ландшафт вашего участка.
            </p>
            <p>
            Мы учитываем все особенности местности, используем только качественные материалы и инновационные технологии. При проектировании мы также обращаем внимание на расположение бассейна на участке, выбираем оптимальное место, чтобы он максимально соответствовал вашим потребностям и создавал уютную атмосферу для отдыха.
            </p>
            <p>
            При проектировании мы учитываем все детали и особенности ландшафта вашего участка, чтобы бассейн не нарушал гармонии окружающей природы, а стал органичным элементом ландшафтного дизайна. Мы подбираем атрибуты декора, которые не только подчеркнут стиль вашего участка, но и сделают бассейн уютным и комфортным для отдыха.
            </p>
        </>
    },
    {
        head: '10 советов по регулярному обслуживанию бассейна: как поддерживать кристальную чистоту и безопасность воды',
        text: <>
            <ol>
                <li>Проверяйте качество воды. Регулярно контролируйте уровень pH и содержание хлора в воде, чтобы избежать размножения бактерий и других микроорганизмов.</li>
            </ol>
        </>,
        moreText: <>
            <ol>
                <li style={{display: 'none'}}></li>
                <li>Чистите фильтры. Регулярно проверяйте и чистите фильтры, чтобы избежать засорения и ухудшения качества воды.</li>
                <li>
                Убирайте мусор. Регулярно убирайте мусор с поверхности воды и из бассейна, чтобы избежать загрязнения воды.
                </li>
                <li>
                Проверяйте оборудование. Регулярно проверяйте работу оборудования и исправляйте возможные неисправности.
                </li>
                <li>
                Не используйте бассейн при наличии ран или порезов на коже. Это может привести к инфекции.
                </li>
                <li>
                Установите ограждение вокруг бассейна. Это позволит избежать падений в воду.
                </li>
                <li>
                Не купайтесь в бассейне при грозе. Это опасно и может привести к удару молнии.
                </li>
                <li>
                Используйте средства защиты от солнца. Длительное пребывание на солнце может привести к ожогам и другим проблемам со здоровьем.
                </li>
                <li>
                Не купайтесь в бассейне с едой и напитками. Это может привести к загрязнению воды и привлечению насекомых.
                </li>
                <li>
                Обращайтесь к профессионалам. Если вы не уверены в своих способностях по уходу за бассейном, лучше обратитесь за помощью к профессионалам.
                </li>
            </ol>
            <p>
            Наша компания предоставляет услуги по регулярному обслуживанию бассейнов. Мы гарантируем качественное обслуживание и безопасность при эксплуатации бассейна. Обращайтесь к нам и наши специалисты ответят на все ваши вопросы.
            </p>
        </>
    },
    {
        head: 'Сервисное обслуживание бассейнов: почему это важно для продления срока эксплуатации и экономии расходов',
        text: <>
            <p>
            Сервисное обслуживание бассейнов: почему это важно для продления срока эксплуатации и экономии расходов
            </p>
            <p>
            Регулярное сервисное обслуживание бассейнов является важным условием для продления срока эксплуатации бассейна и экономии расходов. Наша компания PoolForm предлагает полный комплекс услуг по сервисному обслуживанию бассейнов любой сложности.
            </p>
        </>,
        moreText: <>
            <p>
            Почему нужно регулярное сервисное обслуживание?
            </p>
            <p>
            Безопасность: регулярная проверка качества воды и состояния оборудования гарантирует безопасность при использовании бассейна.
            </p>
            <p>
            Экономия: регулярное обслуживание оборудования и замена неисправных компонентов позволяет избежать крупных ремонтов и сэкономить на расходах.
            </p>
            <p>
            Продление срока эксплуатации: регулярное сервисное обслуживание помогает предотвратить поломки оборудования и продлевает срок его службы.
            </p>
            <p>
            Комфорт: сервисное обслуживание бассейнов позволяет обеспечить максимальный комфорт при использовании бассейна.
            </p>
            <p>
            Наши специалисты имеют большой опыт в обслуживании бассейнов и всегда готовы предложить нашим клиентам индивидуальные решения, учитывающие все требования и особенности конкретного бассейна. Мы предлагаем как разовые, так и регулярные услуги сервисного обслуживания бассейнов, что позволяет выбрать оптимальное решение для каждого клиента.
            </p>
            <p>
            Заключение договора на сервисное обслуживание бассейна с нашей компанией PoolForm - это гарантия надежности и безопасности. С нами вы можете быть уверены в том, что ваш бассейн всегда будет в отличном состоянии.
            </p>
        </>
    }
]

const ServsPage = () => {

    return (
        <SmoothScroll>
            <Head>
                <meta name="description" content="Услуги"/>
                <title>Услуги</title>
            </Head>
            <PageLayout>
      
            <div className={'top-block'}>
                <Servs
                list={servList}
                title="Наши услуги"
                sub="В поисках идеальной бани или сауны для вашего загородного дома? PoolForm строит их под ключ как для частного, 
                так и для общественного пользования, с использованием только самых современных технологий и материалов. Мы предлагаем широкий выбор отделки, включая несколько видов дерева, таких как алтайский и канадский кедр, ольха, африканский абаш из экваториальных лесов, и термодерево, которые гармонично подойдут к любому интерьеру. Доверьте нам создание идеального места для релаксации и наслаждения!"
                isHomePage
                />
            </div>
            <Feedback
                isLight={false}
                />
            {/* <Faq list={faqList}/> */}
            <Footer/>
            </PageLayout>

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
          />
        <noscript><div><img src="https://mc.yandex.ru/watch/93342244" style={{position: 'absolute', left: '-9999px'}} alt="" /></div></noscript>
        </SmoothScroll>
    )
}

export default ServsPage;