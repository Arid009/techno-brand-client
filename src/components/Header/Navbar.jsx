import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }

    const links = <>
        <li>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-400 underline bg-[#7521fc]" : ""
                }
                to='/'
            >Home</NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-400 underline bg-[#7521fc]" : ""
                }
                to='/addproduct'
            >Add Product</NavLink>
        </li>
        <li>
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-green-400 underline bg-[#7521fc]" : ""
                }
                to='/MyCart'
            >My Cart</NavLink>
        </li>
    </>

    return (
        <div className="navbar bg-gradient-to-r from-[#00FF87] to-blue-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className="w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSRSdv9YkkfzzsbgiztdlzTA8yV-kYE3XxA&usqp=CAU" alt="" />
                    <p>Techno</p>
                </a>
            </div>
            <div className="">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

            </div>
            <div className="ml-3 navbar-end">
                {user && <div className="invisible flex justify-center items-center space-x-3 mr-5 lg:visible">
                    <p className="mr-2 text-[18px]">{user?.displayName}</p>
                    <div className="h-[40px]">
                        <img className="rounded-full w-[40px] h-[40px]" src={user?.photoURL} alt="" />
                    </div>
                </div>}
                {user ? <button onClick={handleLogOut} className="btn bg-green-400 border-none">Log Out</button>
                    :
                    <Link to='/login' className="btn bg-green-400 border-none">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;