import { Helmet } from "react-helmet-async";
import Call from "../../../Components/call/Call";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../Menu/PopularMenu";
import Recommeds from "../Recommeds/Recommeds";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Recommeds></Recommeds>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;