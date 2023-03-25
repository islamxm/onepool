import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Feedback from "@/components/Feedback/Feedback";
import Main from "@/pageModules/contacts/Main/Main";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";

const ContactsPage = () => {

    return (
        <SmoothScroll>
            <PageLayout>
         
            <div className="top-block">
                <Main/>
            </div>
            <Feedback
                isLight={false}
                />

            <Footer/>
        </PageLayout>
        </SmoothScroll>
    )
}

export default ContactsPage;