import SmoothScroll from "@/helpers/SmoothScroll";
import Head from "next/head";
import PageLayout from "@/components/PageLayout/PageLayout";
import Main from "@/pageModules/404/Main/Main";
import Footer from "@/components/Footer/Footer";
const Notfound = () => {

    return (
        <SmoothScroll>
              <Head>
                <meta name="description" content="Бани и сауны"/>
                <title>Бани и сауны</title>
            </Head>
            <PageLayout>
                <div className="top-block">
                    <Main/>
                </div>
                <Footer/>    
            </PageLayout>
            
        </SmoothScroll>
    )
}

export default Notfound;