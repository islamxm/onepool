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
                    tag={data[1].value}
                    title={data[1].title}
                    >
                    {data[1].body}
                </Main>
                <Container>
                    <Nav
                        prevId={data[0].id}
                        nextId={data[2].id}
                        nextTitle={data[2].title}
                        prevTitle={data[0].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem