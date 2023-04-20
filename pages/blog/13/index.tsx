import Main from "@/pageModules/blog/Main/Main"
import SmoothScroll from "@/helpers/SmoothScroll"
import PageLayout from "@/components/PageLayout/PageLayout"
import data from "@/data/blogdata"
import Nav from "@/pageModules/blog/Nav/Nav"
import Container from "@/components/Container/Container"

const BlogItem = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main
                    tag={data[12].value}
                    title={data[12].title}
                    >
                    {data[12].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[13].id}
                        nextTitle={data[13].title}
                        prevId={data[11].id}
                        prevTitle={data[11].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem