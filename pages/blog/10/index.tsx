import Main from "@/pageModules/blog/Main/Main"
import SmoothScroll from "@/helpers/SmoothScroll"
import PageLayout from "@/components/PageLayout/PageLayout"
import data from "@/data/blogdata"
import Nav from "@/pageModules/blog/Nav/Nav"
import Container from "@/components/Container/Container"
import Head from "next/head"


const BlogItem = () => {

    return (
        <SmoothScroll>
            <Head>
                <title>{data[9].title}</title>
                <meta name="description" content={data[9].prevtext}/>
            </Head>
            <PageLayout>
                <Main
                    tag={data[9].value}
                    title={data[9].title}
                    >
                    {data[9].body}
                </Main>
                <Container>
                    <Nav
                        prevId={data[8].id}
                        prevTitle={data[8].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem