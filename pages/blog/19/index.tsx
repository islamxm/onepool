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
                    tag={data[18].value}
                    title={data[18].title}
                    >
                    {data[18].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[19].id}
                        nextTitle={data[19].title}
                        prevId={data[17].id}
                        prevTitle={data[17].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem