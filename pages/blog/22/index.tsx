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
                    tag={data[21].value}
                    title={data[21].title}
                    >
                    {data[21].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[22].id}
                        nextTitle={data[22].title}
                        prevId={data[20].id}
                        prevTitle={data[20].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem