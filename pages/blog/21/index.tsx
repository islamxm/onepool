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
                    tag={data[20].value}
                    title={data[20].title}
                    >
                    {data[20].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[21].id}
                        nextTitle={data[21].title}
                        prevId={data[19].id}
                        prevTitle={data[19].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem