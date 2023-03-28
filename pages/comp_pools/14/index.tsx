import Container from "@/components/Container/Container";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Main from "@/pageModules/comp_pools/DetailPage/Main/Main";
import Colors from "@/pageModules/comp_pools/DetailPage/Colors/Colors";
import img1 from '@/public/assets/comp-14-1.jpeg';
import img2 from '@/public/assets/comp-14-2.jpeg';
import img3 from '@/public/assets/comp-14-3.jpeg';
import img4 from '@/public/assets/comp-14-4.jpeg';
import img5 from '@/public/assets/comp-14-5.jpeg';
import img6 from '@/public/assets/comp-14-6.jpeg';
import img7 from '@/public/assets/comp-14-7.jpeg';
import img8 from '@/public/assets/comp-14-8.jpeg';
// import img6 from '@/public/assets/comp-6-6.jpeg';

import colors from "@/pageModules/comp_pools/DetailPage/Colors/data";





const PoolPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main
                    images={[img1, img2,img3,img4, img5, img6, img7, img8]}
                    name="КЛАССИК 852"
                    descr={
                        <>
                            <span>Размер:</span> 8,5 х 3,8 x 1,5-2 м<br/>
                            <span>Объём:</span> 42 м3
                        </>
                    }
                    prices={{
                        base: 1340000,
                        standart:  1206000,
                        premium: 1636200
                    }}
                    />
                <Colors list={colors} ex={<p>Купель АЛЬФА идеальное решение для сауны или бани если бассейн на дачи с ограниченным местом в помещении рядом с парилкой. При монтаже чаши
                АЛЬФА необходимо монтировать лестницу из нержавеющей стали для удобноговхода и выхода из бассейна.</p>}/>
            </PageLayout>
        </SmoothScroll>        
    )
}


export default PoolPage;