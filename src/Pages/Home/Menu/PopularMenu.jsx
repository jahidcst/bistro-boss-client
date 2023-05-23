import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
   

    return (
        <section className="mb-10">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            ></SectionTitle>

            {/* map popular items */}
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-3">
            <button className="btn btn-outline  uppercase border-0 border-b-4 text-gray-600">View Full Menu</button>

            </div>
        </section>
    );
};

export default PopularMenu;