import React, { useContext } from "react"
import PropTypes from 'prop-types'
import AppContext from '../context/app-context'
import useHover from '../hooks/useHover'

function Image({className, img}) {
  const [ isHovering, ref ] = useHover()
  const context = useContext(AppContext)
    return (
        <div
          ref={ref}
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