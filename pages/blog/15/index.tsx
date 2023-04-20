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
                    tag={data[14].value}
                    title={data[14].title}
                    >
                    {data[14].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[15].id}
                        nextTitle={data[15].title}
                        prevId={data[13].id}
                        prevTitle={data[13].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem