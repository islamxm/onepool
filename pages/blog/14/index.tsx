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
                    tag={data[13].value}
                    title={data[13].title}
                    >
                    {data[13].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[14].id}
                        nextTitle={data[14].title}
                        prevId={data[12].id}
                        prevTitle={data[12].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem