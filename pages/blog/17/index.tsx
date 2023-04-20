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
                    tag={data[16].value}
                    title={data[16].title}
                    >
                    {data[16].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[17].id}
                        nextTitle={data[17].title}
                        prevId={data[15].id}
                        prevTitle={data[15].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem