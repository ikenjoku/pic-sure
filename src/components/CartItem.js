import React, { useContext } from "react"
import appContext from '../context/app-context'
import useHover from '../hooks/useHover'

export default function CartItem ({ item }) {
  const [isHovered, ref] = useHover()
  const { removeItems } = useContext(appContext)
  const iconFill = isHovered ? 'fill' : 'line'
  return (
    <div className="cart-item">
        <i
          ref={ref}
         onClick={() => removeItems(item.id)}
         className={`ri-delete-bin-${iconFill}`}></i>
        <img src={item.url} width="130px" alt="product"/>
        <p>{item.quantity}</p>
    </div>
  )
}