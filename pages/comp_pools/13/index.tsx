import Container from "@/components/Container/Container";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Main from "@/pageModules/comp_pools/DetailPage/Main/Main";
import Colors from "@/pageModules/comp_pools/DetailPage/Colors/Colors";
import img1 from '@/public/assets/comp-13-1.jpeg';
import img2 from '@/public/assets/comp-13-2.jpeg';
import img3 from '@/public/assets/comp-13-3.jpeg';
import img4 from '@/public/assets/comp-13-4.jpeg';
import img5 from '@/public/assets/comp-13-5.jpeg';
import img6 from '@/public/assets/comp-13-6.jpeg';
import img7 from '@/public/assets/comp-13-7.jpeg';
import img8 from '@/public/assets/comp-13-8.jpeg';
import img9 from '@/public/assets/comp-13-9.jpeg';
import img10 from '@/public/assets/comp-13-10.jpeg';
// import img6 from '@/public/assets/comp-6-6.jpeg';

import colors from "@/pageModules/comp_pools/DetailPage/Colors/data";





const PoolPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main
                    images={[img1, img2,img3,img4, img5, img6, img7, img8, img9, img10]}
                    name="РИВЬЕРА 8"
                    descr={
                        <>
                            <span>Размер:</span> 8 х 3,5 x 1,5 м<br/>
                            <span>Объём:</span> 40 м3
                        </>
                    }
                    prices={{
                        base: 900000,
                        standart:  974700,
                        premium: 1490400
                    }}
                    />
                <Colors list={colors} ex={<p>Купель АЛЬФА идеальное решение для сауны или бани если бассейн на дачи с ограниченным местом в помещении рядом с парилкой. При монтаже чаши
                АЛЬФА необходимо монтировать лестницу из нержавеющей стали для удобноговхода и выхода из бассейна.</p>}/>
            </PageLayout>
        </SmoothScroll>        
    )
}


export default PoolPage;