
const ChefCard = ({ item }) => {
    const { name, recipe, image} = item;
    return (
        <div className="gap-10">
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions mt-4">
                    <button className="btn btn-outline hover:bg-orange-700  uppercase border-0 border-b-4 text-orange-400">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;