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
                    tag={data[17].value}
                    title={data[17].title}
                    >
                    {data[17].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[18].id}
                        nextTitle={data[18].title}
                        prevId={data[16].id}
                        prevTitle={data[16].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem