import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Feedback from "@/components/Feedback/Feedback";
import Main from "@/pageModules/contacts/Main/Main";

const ContactsPage = () => {

    return (
        <>
            <Header/>
            <div className="top-block">
                <Main/>
            </div>
            <Feedback
                isLight={false}
                />

            <Footer/>
        </>
    )
}

export default ContactsPage;