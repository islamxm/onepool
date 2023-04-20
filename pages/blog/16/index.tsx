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
                    tag={data[15].value}
                    title={data[15].title}
                    >
                    {data[15].body}
                </Main>
                <Container>
                    <Nav
                        nextId={data[16].id}
                        nextTitle={data[16].title}
                        prevId={data[14].id}
                        prevTitle={data[14].title}
                        />
                </Container>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem