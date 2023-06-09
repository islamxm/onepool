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
                <title>{data[4].title}</title>
                <meta name="description" content={data[4].prevtext}/>
            </Head>
            <PageLayout>
                <Main
                    tag={data[4].value}
                    title={data[4].title}
                    >
                    {data[4].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[5].id}
                        nextTitle={data[5].title}
                        prevId={data[3].id}
                        prevTitle={data[3].title}
                        />
                </Container>
                <Footer/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem