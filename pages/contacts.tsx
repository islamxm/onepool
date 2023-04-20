import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Feedback from "@/components/Feedback/Feedback";
import Main from "@/pageModules/contacts/Main/Main";
import PageLayout from "@/components/PageLayout/PageLayout";
import SmoothScroll from "@/helpers/SmoothScroll";
import Faq from "@/components/Faq/Faq";
import Head from "next/head";
const ContactsPage = () => {

    return (
        <SmoothScroll>
            <Head>
                <meta name="description" content="Контакты"/>
                <title>Контакты</title>
            </Head>
            <PageLayout>
         
            <div className="top-block">
                <Main/>
            </div>
            <Feedback
                isLight={false}
                />
            <Faq/>
            <Footer/>
        </PageLayout>
        </SmoothScroll>
    )
}

export default ContactsPage;