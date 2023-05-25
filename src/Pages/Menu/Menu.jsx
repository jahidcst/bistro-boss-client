import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';



// import PopularMenu from '../Home/Menu/PopularMenu';
const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu" description="Would You like to try a dish?"></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}

            <div>
                <MenuCategory items={offered}></MenuCategory>
               
            </div>
            {/* dessert items */}
            <div>
                <MenuCategory
                    items={dessert}
                    title="Dessert"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    coverImg={dessertImg}
                ></MenuCategory>
                
            </div>

            {/* pizza items */}
            <div>
                <MenuCategory
                    items={pizza}
                    title="pizza"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    coverImg={pizzaImg}
                ></MenuCategory>
                
            </div>

            {/* salad items */}
            <div>
                <MenuCategory
                    items={salad}
                    title="salad"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    coverImg={saladImg}
                ></MenuCategory>
                </div>

            {/* soup items */}
            <div>
                <MenuCategory
                    items={soup}
                    title="soup"
                    description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    coverImg={soupImg}
                ></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;