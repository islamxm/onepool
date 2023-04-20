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
                    tag={data[5].value}
                    title={data[5].title}
                    >
                    {data[5].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[6].id}
                        nextTitle={data[6].title}
                        prevId={data[4].id}
                        prevTitle={data[4].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem