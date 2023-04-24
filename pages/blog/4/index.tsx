import Main from "@/pageModules/blog/Main/Main"
import SmoothScroll from "@/helpers/SmoothScroll"
import PageLayout from "@/components/PageLayout/PageLayout"
import data from "@/data/blogdata"
import Nav from "@/pageModules/blog/Nav/Nav"
import Container from "@/components/Container/Container"
import Head from "next/head"
import Footer from "@/components/Footer/Footer"
const BlogItem = () => {

    return (
        <SmoothScroll>
            <Head>
                <title>{data[3].title}</title>
                <meta name="description" content={data[3].prevtext}/>
            </Head>
            <PageLayout>
                <Main
                    tag={data[3].value}
                    title={data[3].title}
                    >
                    {data[3].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[4].id}
                        prevId={data[2].id}
                        nextTitle={data[4].title}
                        prevTitle={data[2].title}
                        />
                </Container>
                <Footer/>
            </PageLayout>
            
        </SmoothScroll>
    )
}

export default BlogItem