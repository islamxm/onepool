import Hero from "@/pageModules/home/Hero/Hero";
import About from "@/pageModules/home/About/About";
import Prods from "@/pageModules/home/Prods/Prods";
import Servs from "@/pageModules/home/Servs/Servs";
import Why from "@/pageModules/home/Why/Why";
import Steps from "@/pageModules/home/Steps/Steps";
import Footer from "@/components/Footer/Footer";


const HomePage = () => {

    return (
        <>
           <Hero/> 
           <About/>
           <Prods/>
           <Servs/>
           <Why/>
           <Steps/>
           <Footer/>
        </>
    )
}

export default HomePage;
