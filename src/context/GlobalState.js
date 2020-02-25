import React, { useState } from 'react'
import AppContext from './app-context'
import imageJson from '../assets/images.json'

export default function GlobalState (props) {
  const [images, setImages] = useState(imageJson)

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
    console.log(newImages)
  }

  return (
    <AppContext.Provider
      value={{
        name: "its working",
        images,
        toggleFavorite
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}