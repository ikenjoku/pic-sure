import React, { useState } from 'react'
import AppContext from './app-context'
import imageJson from '../assets/images.json'

export default function GlobalState (props) {
  const [images, setImages] = useState(imageJson)
  const [cartItems, setCartItems] = useState([])
  const addItems = (item) => {
    const itemIndex = cartItems.findIndex(each => item.id === each.id)
    if (itemIndex > -1) {
      const newCart =cartItems.map(each => {
        if (item.id === each.id) {
          each.quantity++
        }
        return each
      })
      setCartItems(newCart)
    } else {
      item.quantity = 1
      const newCart = [...cartItems, item]
      setCartItems(newCart)
    }
  }

  const removeItems = (id) => {
    const cart = cartItems
    const itemIndex = cartItems.findIndex(item => item.id === id)
    if (cartItems[itemIndex].quantity > 1) {
      const newCart = cartItems.map(each => {
        if (id === each.id) {
          each.quantity--
        }
        return each
      })
      setCartItems(newCart)
    } else {
      cart.splice(itemIndex, 1)
      setCartItems([...cart])
    }
  }

  const toggleFavorite = (id) => {
    const newImages = images.map(image => {
      if (image.id === id) {
        return {
          ...image,
          isFavorite: !image.isFavorite
        }
      }
      return image
    })
    setImages(newImages)
  }

  const clearCart = () => setCartItems([])

  return (
    <AppContext.Provider
      value={{
        images,
        cartItems,
        clearCart,
        addItems,
        removeItems,
        toggleFavorite
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}