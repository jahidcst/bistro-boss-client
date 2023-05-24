import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, description }) => {
    return (
        <div>
           { title && description && <Cover img={coverImg} title={title} description={description}></Cover>
           }
            <div className="grid md:grid-cols-2 gap-10 my-8">
                {
                    items.slice(0,8).map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;