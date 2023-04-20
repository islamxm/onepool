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
                    tag={data[22].value}
                    title={data[22].title}
                    >
                    {data[22].body}
                </Main>
                <Container>
                    <Nav
                        // nextId={data[20].id}
                        // nextTitle={data[20].title}
                        prevId={data[21].id}
                        prevTitle={data[21].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem