import React, { useState, useContext } from "react"
import PropTypes from 'prop-types'
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
            { !img.isFavorite ?
            (<i onClick={() => context.toggleFavorite(img.id)} className="ri-heart-line favorite"></i>) :
            (<i onClick={() => context.toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>) }
            <i onClick={() => context.addItems(img)} className="ri-add-circle-line cart"></i>
          </>
          )}
          <img alt="gallery" src={img.url} className="image-grid"/>
        </div>
    )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
}

export default Image