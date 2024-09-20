import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
    const [menu,setMenu] = useState("");
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <Link to='/'><img src={logo} alt=""  onClick={()=>{setMenu("")}}/></Link>
                {/* <p>CraftsVilla</p> */}
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("fashion")}}><Link style={{textDecoration:'none'}} to='/fashion'>Fashion</Link>{menu==="fashion"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("beauty&personal")}}><Link style={{textDecoration:'none'}} to='/beauty&personal'>Beauty & Personal Care</Link>{menu==="beauty&personal"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("homeDecor")}}><Link style={{textDecoration:'none'}} to='/homeDecor'>Home Decor</Link>{menu==="homeDecor"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("electronics")}}><Link style={{textDecoration:'none'}} to='/electronics'>Electronics</Link>{menu==="electronics"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("amazingIndia")}}><Link style={{textDecoration:'none'}} to='/amazingIndia'>Amazing India</Link>{menu==="amazingIndia"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar;