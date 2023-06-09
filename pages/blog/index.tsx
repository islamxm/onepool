import SmoothScroll from "@/helpers/SmoothScroll";
import PageLayout from "@/components/PageLayout/PageLayout";
import List from "@/pageModules/blog/List/List";
import { values } from "@/data/blogdata";
import data from "@/data/blogdata";
import { IData } from "@/data/blogdata";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";

const BlogPage = () => {



    return (
        <SmoothScroll>
            <Head>
                <title>Блог</title>
                <meta name="description" content="Блог"/>
            </Head>
            <PageLayout>
                <List
                    list={data}
                    />
                <Footer/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogPage;