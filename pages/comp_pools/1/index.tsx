import Container from "@/components/Container/Container";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Main from "@/pageModules/comp_pools/DetailPage/Main/Main";
import Colors from "@/pageModules/comp_pools/DetailPage/Colors/Colors";
import img1 from '@/public/assets/comp-1-1.jpg';
import img2 from '@/public/assets/comp-1-2.jpg';
import img3 from '@/public/assets/comp-1-3.jpg';




const PoolPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main
                    images={[img1, img2, img3]}
                    name="Композитный бассейн Нео"
                    descr={
                        <>
                            <span>Размер:</span> 1,7 х 1,7 x 1,5 м<br/>
                            <span>Объём:</span> 3 м3
                        </>
                    }
                    />
            </PageLayout>
        </SmoothScroll>        
    )
}


export default PoolPage;