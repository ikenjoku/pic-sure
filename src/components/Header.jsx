import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import appContext from '../context/app-context'

function Header() {
    const { cartItems } = useContext(appContext)
    const cartIcon = cartItems.length ? (<i className="ri-shopping-cart-fill ri-fw ri-2x"></i>) :
    (<i className="ri-shopping-cart-line ri-fw ri-2x"></i>)
    return (
        <header>
            <h2><Link to="/">Pic Sure</Link></h2>
            <Link to="/cart">{cartIcon}</Link>
        </header>
    )
}

export default Header
