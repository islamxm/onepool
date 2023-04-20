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
                    tag={data[11].value}
                    title={data[11].title}
                    >
                    {data[11].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[12].id}
                        nextTitle={data[12].title}
                        prevId={data[10].id}
                        prevTitle={data[10].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem