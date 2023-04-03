import Main from "@/pageModules/blog/Main/Main"
import SmoothScroll from "@/helpers/SmoothScroll"
import PageLayout from "@/components/PageLayout/PageLayout"

const BlogItem = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <Main/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogItem