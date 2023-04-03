import SmoothScroll from "@/helpers/SmoothScroll";
import PageLayout from "@/components/PageLayout/PageLayout";
import List from "@/pageModules/blog/List/List";
const BlogPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
                <List/>
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogPage;