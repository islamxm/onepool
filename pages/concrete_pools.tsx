import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/pageModules/spa/Hero/Hero";
import heroBg from '@/public/assets/conc-pool-bg.png';

const ConcPage = () => {

    return (
        <>
            <Header/>
            <Hero
                bg={heroBg}
                title="Бетонный бассейн за 14 ДНЕЙ!
                "
                subtitle="Строим бассейны с 2001 года по всей России!"
                />
            <Footer/>
        </>
    )
}

export default ConcPage;