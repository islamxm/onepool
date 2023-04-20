import SmoothScroll from "@/helpers/SmoothScroll";
import PageLayout from "@/components/PageLayout/PageLayout";
import List from "@/pageModules/blog/List/List";
import { values } from "@/data/blogdata";
import data from "@/data/blogdata";
import { IData } from "@/data/blogdata";


const BlogPage = () => {



    return (
        <SmoothScroll>
            <PageLayout>
                <List
                    list={data}
                    />
            </PageLayout>
        </SmoothScroll>
    )
}

export default BlogPage;