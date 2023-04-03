import Container from "@/components/Container/Container";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Main from "@/pageModules/comp_pools/DetailPage/Main/Main";
import Colors from "@/pageModules/comp_pools/DetailPage/Colors/Colors";
import img1 from '@/public/assets/comp-2-1.png';
import colors from "@/pageModules/comp_pools/DetailPage/Colors/data";
import Key from "@/pageModules/comp_pools/DetailPage/Key/Key";
import Pal from "@/pageModules/comp_pools/DetailPage/Pal/Pal";
import Price from "@/pageModules/comp_pools/DetailPage/Price/Price";
import Button from "@/components/Button/Button";


const PoolPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main
                    images={[img1]}
                    name="КАЛИПСО"
                    descr={
                        <>
                            <span>Размер:</span> 2,4 х 1,7 x 1,5 м<br/>
                            <span>Объём:</span> 4 м3
                        </>
                    }
                    prices={{
                        base: 185400,
                        standart: 201960,
                        premium: 326700
                    }}
                    />
                <Colors list={colors} ex={<p>Купель КАЛИПСО отличное решение для сауны или бани. При монтаже чаши Калипсо необходимо монтировать лестницу из нержавеющей стали для удобного входа и выхода из бассейна.</p>}/>
                <Key>
                    Возможность изготовления чаши Premium для установки на поверхности без заглубления при соблюдении правил установки в зависимости от условий эксплуатации.
                    <br/>
                    <br/>
                    Заводская теплоизоляция (ППУ 4 см) -  21 600 руб.
                    <br/>
                    <br/>
                    Композитный бордюрный камень (цвета капучино и оникс) 
                    <br/>
                    <br/>
                    Цвета ЗD: синий бриллиант, голубой бриллиант, фараон, серебро, металлик, жемчуг.
                    <Pal/>
                    <b>Преимущества наших чаш:</b>
                    <br/>
                    <br/>
                        <ul>
                            <li>
                                Первый слой (декоративный) состоит из двух слоев влагостойких материалов:<br/>
                                Прозрачный гелькоут
                                Прозрачный гелькоут с чипсами (чипсы-камушки изготавливаем сами из тех же влагостойких гелькоутов – остальные производители чипсы покупают, а покупают чипсы из невлагостойких материалов).
                            </li>
                            <li>
                                Второй слой состоит из эпокси-винилэфирной смолы армированной стекломатом. После высыхания производится дефектовка и устранение дефектов.
                            </li>
                            <li>
                                Третий слой – состоит из прозрачной влагостойкой смолы (производитель PALF Англия), смола сертифицирована по ЛОЙД – международный регистр для морского судоходства. Этот слой наносится машиной, что обеспечивает оптимальное сочетание смолы и материала, а это очень важно для физико-механических свойств корпуса чаши бассейна. Третий слой создается за 2 подхода.
                            </li>
                            <li>
                                Четвертый слой. Делается из той же смолы что и третий. Этот слой формируется вместе с закладными элементами в чашу – металлическими прутками для погрузки и ребрами жесткости. Ребра жесткости расположены вертикально и обеспечивают дополнительное усиление корпуса бассейна. Кроме того, наша чаша имеет горизонтальные ребра от 3-х до 15 см.
                            </li>
                        </ul>
                </Key>
                <Price
                    images={[img1]}
                    name="КАЛИПСО"
                    descr={
                        <>
                            <span>Размер:</span> 2,4 х 1,7 x 1,5 м<br/>
                            <span>Объём:</span> 4 м3
                        </>
                    }
                    prices={{
                        base: 185400,
                        standart: 201960,
                        premium: 326700
                    }}
                    >
                    <b>Состав работ:</b>
                    <br/>
                    <br/>
                    <ul>
                        <li>
                            <b>Разбивка осей</b> котлована в натуре с согласованием от заказчика место установки водосборного колодца;
                        </li>
                        <li>
                            <b>Выборка грунта</b> экскаватором под отметки дна котлована с последующим складированием в отвал для последующей утилизации (заказчиком, при договорённости Подрядчик);
                        </li>
                        <li>
                            <b>Планировка дна</b> котлована вручную по высотным отметкам с уплотнением (трамбованием) и нивелировкой (на отметку - 350 мм по дну чаши);
                        </li>
                        <li>
                            <b>Укладка геотекстиля</b> (200 мкр) в котлован с креплением его кольями по дну и по бортам;
                        </li>
                        <li>
                            <b>Монтаж дренажных труб</b> по периметру будущей чаши (с откопкой вручную -80мм- канавку) с разуклонкой и устройством водосборных колодцев (труба д=318мм с отводами, дном, крышкой);
                        </li>
                        <li>
                            <b>Устройство щебеночного основания</b> из гранитного щебня фр.20-40 (толщ. 150мм) с последующей расклинцовкой щебнем гранитным фр. 5-20 (толщ. 100 мм) и ручным послойным уплотнением (трамбованием 100 кг/м2);
                        </li>
                        <li>
                            <b>Укладка пеноплекса</b> на дно котлована, а также на стены котлована. Толщина пеноплексса 50мм
                        </li>
                        <li>
                            <b>Доставка</b> и разгрузка бассейна в котлован (необходимо обеспечить возможность подъезда техники к котловану) в пределах 20 км от МКАД/КАД;
                        </li>
                        <li>
                            <b>Приемка чаши</b> с последующей нивелировкой по заданным отметкам;
                        </li>
                        <li>
                            <b>Монтаж</b> закладных элементов и обвязка чаши, одновременно выполняется монтаж системы фильтрации (при условии своевременной поставки);
                        </li>
                        <li>
                            <b>Обратная засыпка</b> полостей цементно-песчанной смесью (без трамбования) и последовательным наполнением чаши (вода от заказчика необходимый напор 3-4 м3/ч)
                        </li>
                        <li>
                            <b>Обратная засыпка</b> траншеи для прокладки инженерного оборудования (после монтажа соответственно);
                        </li>
                    </ul>
                    <br/>
                    <br/>
                    <b>Оборудование с подключением</b>
                    <br/>
                    <br/>
                    <ul>
                        <li>Система фильтрации с закладными из пластика (скиммер и форсунки)</li>
                        <li>Электрические материалы для подключения</li>
                        <li>Труба и фитинг для обвязки чаши и подключения оборудования</li>
                        <li>Запуск бассейна, пусконаладочные работы.</li>
                    </ul>
                </Price>
            </PageLayout>
        </SmoothScroll>        
    )
}


export default PoolPage;