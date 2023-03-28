import Container from "@/components/Container/Container";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Main from "@/pageModules/comp_pools/DetailPage/Main/Main";
import Colors from "@/pageModules/comp_pools/DetailPage/Colors/Colors";
import img1 from '@/public/assets/comp-11-1.jpeg';
// import img6 from '@/public/assets/comp-6-6.jpeg';

import colors from "@/pageModules/comp_pools/DetailPage/Colors/data";





const PoolPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main
                    images={[img1]}
                    name="РИВЬЕРА 80352"
                    descr={
                        <>
                            <span>Размер:</span> 8 х 3,5 x 1,5-2 м<br/>
                            <span>Объём:</span> 44 м3
                        </>
                    }
                    prices={{
                        base: 1281000,
                        standart:  1152900,
                        premium: 1620000
                    }}
                    />
                <Colors list={colors} ex={<p>Купель АЛЬФА идеальное решение для сауны или бани если бассейн на дачи с ограниченным местом в помещении рядом с парилкой. При монтаже чаши
                АЛЬФА необходимо монтировать лестницу из нержавеющей стали для удобноговхода и выхода из бассейна.</p>}/>
            </PageLayout>
        </SmoothScroll>        
    )
}


export default PoolPage;