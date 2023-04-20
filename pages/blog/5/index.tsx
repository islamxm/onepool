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
                    tag={data[4].value}
                    title={data[4].title}
                    >
                    {data[4].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[5].id}
                        nextTitle={data[5].title}
                        prevId={data[3].id}
                        prevTitle={data[3].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem