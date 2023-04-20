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
                    tag={data[19].value}
                    title={data[19].title}
                    >
                    {data[19].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[20].id}
                        nextTitle={data[20].title}
                        prevId={data[18].id}
                        prevTitle={data[18].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem