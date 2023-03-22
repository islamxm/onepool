import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";
import { portItemPropsTypes } from "@/components/Portfolio/types";
import serv1 from '@/public/assets/spa-serv-1.png';
import Gal from "@/pageModules/works/Gal/Gal";
import Feedback from "@/components/Feedback/Feedback";

const portList:portItemPropsTypes[] = [
    {
        side: 'left',
        head: 'Коттеджный поселок "Royal Hills"',
        images: [serv1, serv1, serv1],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
    {
        side: 'right',
        head: 'Коттеджный поселок "Royal Hills""',
        images: [serv1, serv1, serv1],
        descr: <>
            <h4>Бассейн с джакузи для дома премиум-класса</h4>
            <p>
            <span>Материал:</span> бетон<br/>
            </p>
        </>
    },
]



const WorksPage = () => {

    return (
        <>  
            <Header/>
            <div className="top-block">
                <Portfolio
                    head="Портфолио реализованных проектов"
                    list={portList}
                    />
            </div>
            <Gal/>
            <Feedback
                isLight={true}
                />
            <Footer/>
        </>
    )
}

export default WorksPage;