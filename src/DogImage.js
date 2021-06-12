// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'

export const DogImage = ({ url }) => {
  return (
    <figure className="image_container">
      <img className="image" src={url} alt="犬の画像" />
    </figure>
  )
}

DogImage.propTypes = {
  url: PropTypes.string.isRequired,
}
