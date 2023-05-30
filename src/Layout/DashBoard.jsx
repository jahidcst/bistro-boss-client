import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaShoppingBag, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();

    const isAdmin = true;

    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-56 bg-[#D1A054] ">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home' ><FaHome></FaHome>Admin Home </NavLink></li>
                            <li><NavLink to='/dashboard/reservations' ><FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to='/dashboard/history' ><FiMenu></FiMenu>Manage Items </NavLink></li>
                            <li><NavLink to='/dashboard/history' ><FaBook></FaBook> Manage Bookings </NavLink></li>
                            <li><NavLink to='/dashboard/allusers' ><FaUsers></FaUsers>All Users </NavLink></li>
                            

                        </> : <>
                            {/* <!-- Sidebar content here --> */}
                            <li><NavLink to='/dashboard/home' ><FaHome></FaHome>User Home </NavLink></li>
                            <li>
                                <NavLink to='/dashboard/mycart'><FaShoppingCart
                                ></FaShoppingCart> My Cart
                                    <span className="badge  badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                            <li><NavLink to='/dashboard/history' ><FaWallet></FaWallet>Payment History </NavLink></li>
                            <li><NavLink to='/dashboard/reservations' ><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>

                        </>
                    }



                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome> Home </NavLink></li>
                    <li ><NavLink to='/menu'> <FiMenu></FiMenu> Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'> <FaShoppingBag></FaShoppingBag> Order Food</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;