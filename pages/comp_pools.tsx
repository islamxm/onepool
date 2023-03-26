import SmoothScroll from "@/helpers/SmoothScroll";
import PageLayout from "@/components/PageLayout/PageLayout";
import Catalog from "@/pageModules/comp_pools/Catalog/Catalog";
import Prods from "@/pageModules/home/Prods/Prods";
import advbg from '@/public/assets/comp-adv-bg.png';
import Adv from "@/components/Adv/Adv";
import { advItemTypes } from "@/components/Adv/types";
import advimg from '@/public/assets/comp-adv.png';
import advicon1 from '@/public/assets/comp-adv-icon-1.svg';
import advicon2 from '@/public/assets/comp-adv-icon-2.svg';
import advicon3 from '@/public/assets/comp-adv-icon-3.svg';
import advicon4 from '@/public/assets/comp-adv-icon-4.svg';
import Why from "@/components/Why/Why";
import Content from "@/pageModules/comp_pools/Content/Content";
import { whyItemPropsTypes } from "@/components/Why/types";
import why1 from '@/public/assets/iron-why-1.svg';
import why2 from '@/public/assets/iron-why-2.svg';
import why3 from '@/public/assets/iron-why-3.svg';
import why4 from '@/public/assets/iron-why-4.svg';
import why5 from '@/public/assets/iron-why-5.svg';
import why6 from '@/public/assets/iron-why-6.svg';
import Steps from "@/pageModules/home/Steps/Steps";
import { stepItemTypes } from "@/pageModules/home/Steps/types";
import Footer from "@/components/Footer/Footer";
const whyList:whyItemPropsTypes[] = [
    {
        icon: why1,
        head: 'Быстрая установка',
        text: 'Мы установим бассейн с нуля за 14 дней, благодаря большому опыту '
    },
    {
        icon: why2,
        head: 'Безопасность',
        text: 'Стенки чаши не скользят под ногами, поэтому риск травмироваться при спуске в воду минимален. '
    },
    {
        icon: why3,
        head: 'Уникальность',
        text: 'Бассейн может быть любой формы и размера — конфигурация чаши разрабатывается индивидуально для каждого участка. Это позволяет идеально интегрировать его в любой ландшафт.'
    },
    {
        icon: why4,
        head: 'Выезд инженера на объект для замера и консультации Бесплатно',
        text: 'Мы установим бассейн с нуля за 14 дней, благодаря большому опыту '
    },
    {
        icon: why5,
        head: 'Обслуживание бассейна: чистка, консервация/ расконсервация Первые 6 месяцев бесплатно!',
        text: 'Первые 6 месяцев бесплатно!'
    },
    {
        icon: why6,
        head: 'Работаем в рамках 44 и 223 ФЗ',
        text: 'Бассейн может быть любой формы и размера — конфигурация чаши '
    }
]
const advList: advItemTypes[] = [
    {
        title: 'Практичность',
        image:advimg,
        icon: advicon1,
        text: 'Композитные бассейны не нуждаются в каком-либо специальном уходе. Глянцевая поверхность чаши не дает возможности образовываться налету на поверхности. Поверхность достаточно протереть влажной губкой с добавлением обычного жидкого моющего средства и ополоснуть водой.',
        side: 'left'
    },
    {
        title: 'Травмобезопасность',
        image: advimg,
        icon: advicon2,
        text: 'Композитные чаши не имеют острых углов, все формы ступеней и сидений имеют плавные формы. Модели чаш разрабатываются с учетом эргономики человека, что в свою очередь дает Вам расслабиться и порелаксировать в воде.',
        side: 'right'
    },
    {
        title: 'Прочность',
        image: advimg,
        icon: advicon3,
        text: 'При изготовлении стеклопластиковых чаш бассейнов для создания "скелета" бассейна мы используем армированные стекловолоконные материалы, которые как раз отвечают за прочность наших бассейнов. По эксплуатационным характеристикам они не уступают бетонным, в то же время сохраняя эластичность, необходимую при зимнем давлении грунта.',
        side: 'left'
    },
    {
        title: 'Долговечность',
        image: advimg,
        icon: advicon4,
        text: 'Если сравнивать бетонные и полипропиленовые бассейны с композитными - обратите внимание на гарантии, которые дает производитель. Со временем в бетонных чашах может отлетать мозаика и плитка, в полипропиленовых образуется нестираемая ватер-линия. Подвижки грунта могут повредить бетонную чашу. На композитные же бассейны мы даем гарантию 25 лет, а срок службы 40 лет.',
        side: 'right'
    }
]

const stepsList: stepItemTypes[] = [
    {label: 'Разработка и подготовка котлована'},
    {label: 'Монтаж опалубки и армирование'},
    {label: 'Бетонирование и оштукатуривание чаши'},
    {label: 'Установка закладных элементов'},
    {label: 'Отделочные работы (облицовка)'},
    {label: 'Монтаж оборудования и пусконаладка'}
]


const CompPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Catalog/> 
                <Prods/>
                <Adv
                    title="Почему стоит заказать стальной бассейн?"
                    bg={advbg}
                    list={advList}
                    />
                <Content/>
                <Why title="Почему стоит заказать бассейн у нас?" list={whyList}/>
                <Steps title="Этапы строительства" list={stepsList}/>
                <Footer/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default CompPage;