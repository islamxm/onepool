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
                <title>{data[2].title}</title>
                <meta name="description" content={data[2].prevtext}/>
            </Head>
            <PageLayout>
                <Main
                    tag={data[2].value}
                    title={data[2].title}
                    >
                    {data[2].body}
                </Main>
                <Container>
                    <Nav
                        prevId={data[1].id}
                        nextId={data[3].id}
                        nextTitle={data[3].title}
                        prevTitle={data[1].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem