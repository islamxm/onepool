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
                <title>{data[8].title}</title>
                <meta name="description" content={data[8].prevtext}/>
            </Head>
            <PageLayout>
                <Main
                    tag={data[8].value}
                    title={data[8].title}
                    >
                    {data[8].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[9].id}
                        nextTitle={data[9].title}
                        prevId={data[7].id}
                        prevTitle={data[7].title}
                        />
                </Container>
                <Footer/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem