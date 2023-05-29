import { useContext } from "react";
import { Link } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import { AuthContext } from "../../../providers/AuthProvider";
import img from '../../../assets/icon/logo.png'
import useCart from "../../../hooks/useCart";


const Navber = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart();
    
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }


    const navOptions = <>
        <li className="text-lg font-bold hover:text-green-500"><Link to='/'>Home</Link></li>
        <li className="text-lg font-bold hover:text-green-500"><Link to=''>Contact Us</Link></li>
        <li className="text-lg font-bold hover:text-green-500"><Link to='/menu'>Our Menu</Link></li>
        <li className="text-lg font-bold hover:text-green-500"><Link to='/order/salad'>Order Food</Link></li>

        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn gap-2">
                  <FaShoppingCart/>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>



    </>
    return (
        <>
            <div className="navbar max-w-screen-lg fixed z-10  text-white bg-opacity-25 bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <Link><img className="w-12 ml-5" src={img} alt="" /></Link>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost uppercase text-2xl">Bistro Boss</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?
                            <>
                                <div className="avatar mr-5 flex gap-4 items-center  tooltip tooltip-left tooltip-neutral" data-tip={user?.displayName}>
                                    <div className="w-11 rounded-full ring">
                                        <img src={user?.photoURL} alt="" />
                                    </div>
                                    <button className="btn btn-outline btn-error btn-sm mr-12" onClick={handleLogout}>LogOut</button>
                                </div>

                            </> :
                            <>
                                <div className="mr-10">
                                    <button className="btn btn-outline text-white btn-sm mr-12"><Link to='/login'>Login</Link></button>
                                </div>
                            </>
                    }

                </div>
            </div>



        </>
    );
};

export default Navber;