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
                    tag={data[8].value}
                    title={data[8].title}
                    >
                    {data[8].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[9].id}
                        nextTitle={data[9].title}
                        prevId={data[7].id}
                        prevTitle={data[7].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem