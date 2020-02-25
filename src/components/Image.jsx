import React, { useState, useContext } from "react"
import AppContext from '../context/app-context'

function Image({className, img}) {
  const [isHovering, setIsHovering] = useState(false)
  const context = useContext(AppContext)

    return (
        <div
         onMouseOver={() => setIsHovering(true)}
         onMouseLeave={() => setIsHovering(false)}
         className={`${className} image-container`}>
          { isHovering && (
          <>
            <i onClick={() => context.toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
            <i className="ri-add-circle-line cart"></i>
          </>
          )}
          <img alt="gallery" src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image