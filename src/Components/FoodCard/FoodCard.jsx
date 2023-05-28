import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item)
        if (user && user.email) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:8000/carts',
            {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your Food added on the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {

            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} className="rounded-xl" />
            </figure>
            <p className="absolute right-0 px-2 mt-4 mr-4 bg-slate-900 text-white">{price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline hover:bg-orange-700  mt-4  uppercase border-0 border-b-4 text-orange-400">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;