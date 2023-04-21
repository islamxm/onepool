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
                <title>{data[7].title}</title>
                <meta name="description" content={data[7].prevtext}/>
            </Head>
            <PageLayout>
                <Main
                    tag={data[7].value}
                    title={data[7].title}
                    >
                    {data[7].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[8].id}
                        nextTitle={data[8].title}
                        prevId={data[6].id}
                        prevTitle={data[6].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem