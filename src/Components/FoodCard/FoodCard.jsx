
const FoodCard = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} className="rounded-xl" />
            </figure>
            <p className= "absolute right-0 px-2 mt-4 mr-4 bg-slate-900 text-white">{price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline hover:bg-orange-700  mt-4  uppercase border-0 border-b-4 text-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;