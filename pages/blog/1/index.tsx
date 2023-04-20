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
                    tag={data[0].value}
                    title={data[0].title}
                    >
                    {data[0].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[1].id}
                        nextTitle={data[1].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem