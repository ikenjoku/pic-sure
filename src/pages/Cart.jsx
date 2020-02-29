import React, { useContext, useState } from "react"
import appContext from '../context/app-context'
import CartItem from '../components/CartItem'

function Cart() {
    const { cartItems, clearCart } = useContext(appContext)
    const [btnText, setBtnText] = useState("Place Order")
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const totalCost = () => {
      const total = cartItems.reduce((acc, nextItem) => {
        return acc = acc + (nextItem.quantity * 5.99)
        }, 0)

        return total.toLocaleString("en-NG", {style: "currency", currency: "NGN"})
    }

    const handlePlaceOrder = () => {
      setBtnText("Ordering...")
      setTimeout(() => {
        setBtnText('Place Order')
        clearCart()
      }, 2500)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost()}</p>
            <div className="order-button">
            { cartItems.length ? <button onClick={handlePlaceOrder}>{btnText}</button> : null }
            </div>
        </main>
    )
}

export default Cart