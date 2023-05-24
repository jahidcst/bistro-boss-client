
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
   

    return (
        <section className="mb-10">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            ></SectionTitle>

            {/* map popular items */}
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem 
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