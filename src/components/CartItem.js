import React, { useContext, useState } from "react"
import appContext from '../context/app-context'

export default function CartItem ({ item }) {
  const [iconFill, setIconFill] = useState('line')
  const { removeItems } = useContext(appContext)
  return (
    <div className="cart-item">
        <i
         onMouseLeave={() => setIconFill('line')}
         onMouseOver={() => setIconFill('fill')}
         onClick={() => removeItems(item.id)}
         className={`ri-delete-bin-${iconFill}`}></i>
        <img src={item.url} width="130px" alt="product"/>
        <p>{item.quantity}</p>
    </div>
  )
}