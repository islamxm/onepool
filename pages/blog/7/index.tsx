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
                    tag={data[6].value}
                    title={data[6].title}
                    >
                    {data[6].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[7].id}
                        nextTitle={data[7].title}
                        prevId={data[5].id}
                        prevTitle={data[5].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem