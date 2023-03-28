import Container from "@/components/Container/Container";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Main from "@/pageModules/comp_pools/DetailPage/Main/Main";
import Colors from "@/pageModules/comp_pools/DetailPage/Colors/Colors";
import img1 from '@/public/assets/comp-8-1.jpeg';
import img2 from '@/public/assets/comp-8-2.jpeg';
import img3 from '@/public/assets/comp-8-3.jpeg';
import img4 from '@/public/assets/comp-8-4.jpeg';
import img5 from '@/public/assets/comp-8-5.jpeg';
import img6 from '@/public/assets/comp-8-6.jpeg';
import img7 from '@/public/assets/comp-8-7.jpeg';
import img8 from '@/public/assets/comp-8-8.jpeg';
// import img6 from '@/public/assets/comp-6-6.jpeg';

import colors from "@/pageModules/comp_pools/DetailPage/Colors/data";





const PoolPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main
                    images={[img1, img2,img3,img4, img5, img6, img7, img8]}
                    name="ОЛИМП"
                    descr={
                        <>
                            <span>Размер:</span> 5 х 2,4 x 1,5 м<br/>
                            <span>Объём:</span> 12 м3
                        </>
                    }
                    prices={{
                        base: 462000,
                        standart:  502200,
                        premium: 704700
                    }}
                    />
                <Colors list={colors} ex={<p>Купель АЛЬФА идеальное решение для сауны или бани если бассейн на дачи с ограниченным местом в помещении рядом с парилкой. При монтаже чаши
                АЛЬФА необходимо монтировать лестницу из нержавеющей стали для удобноговхода и выхода из бассейна.</p>}/>
            </PageLayout>
        </SmoothScroll>        
    )
}


export default PoolPage;