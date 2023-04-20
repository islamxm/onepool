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
                    tag={data[3].value}
                    title={data[3].title}
                    >
                    {data[3].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[4].id}
                        prevId={data[2].id}
                        nextTitle={data[4].title}
                        prevTitle={data[2].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem