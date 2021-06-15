// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'

export const DogImage = ({ url }) => {
  return (
    <figure className="dog-image">
      <img className="dog-image__image" src={url} alt="犬の画像" />
    </figure>
  )
}

DogImage.propTypes = {
  url: PropTypes.string.isRequired,
}
