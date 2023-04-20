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
                    tag={data[10].value}
                    title={data[10].title}
                    >
                    {data[10].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[11].id}
                        nextTitle={data[11].title}
                        prevId={data[9].id}
                        prevTitle={data[9].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem