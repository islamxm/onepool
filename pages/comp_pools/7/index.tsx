import Container from "@/components/Container/Container";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Main from "@/pageModules/comp_pools/DetailPage/Main/Main";
import Colors from "@/pageModules/comp_pools/DetailPage/Colors/Colors";
import img1 from '@/public/assets/comp-7-1.jpeg';
import img2 from '@/public/assets/comp-7-2.jpeg';
import img3 from '@/public/assets/comp-7-3.jpeg';
import img4 from '@/public/assets/comp-7-4.jpeg';
import img5 from '@/public/assets/comp-7-5.jpeg';
import img6 from '@/public/assets/comp-7-6.jpeg';
import img7 from '@/public/assets/comp-7-7.jpeg';
import img8 from '@/public/assets/comp-7-8.jpeg';
// import img6 from '@/public/assets/comp-6-6.jpeg';

import colors from "@/pageModules/comp_pools/DetailPage/Colors/data";





const PoolPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main
                    images={[img1, img2,img3,img4, img5, img6, img7, img8]}
                    name="БАУНТИ"
                    descr={
                        <>
                            <span>Размер:</span> 5 х 2,4 x 1,55 м<br/>
                            <span>Объём:</span> 14 м3
                        </>
                    }
                    prices={{
                        base: 390000,
                        standart:  427680,
                        premium: 594000
                    }}
                    />
                <Colors list={colors} ex={<p>Купель АЛЬФА идеальное решение для сауны или бани если бассейн на дачи с ограниченным местом в помещении рядом с парилкой. При монтаже чаши
                АЛЬФА необходимо монтировать лестницу из нержавеющей стали для удобноговхода и выхода из бассейна.</p>}/>
            </PageLayout>
        </SmoothScroll>        
    )
}


export default PoolPage;