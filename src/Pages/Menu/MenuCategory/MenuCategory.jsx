import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, description }) => {
    return (
        <div>
            {title && description && <Cover img={coverImg} title={title} description={description}></Cover>
            }
            <div className="grid md:grid-cols-2 gap-10 my-8">
                {
                    items.slice(0, 8).map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
           <div className="text-center mt-3 mb-5">
           <Link to={`/order/${title}`}><button className="btn btn-outline uppercase border-0  border-b-4  text-white">ORDER YOUR FAVOURITE FOOD</button></Link>
           </div>
        </div>
    );
};

export default MenuCategory;