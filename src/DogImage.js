// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'

export const DogImage = ({ dogUrl }) => {
  return (
    <figure className="image_container">
      <img className="image" src={dogUrl} alt="犬の画像" />
    </figure>
  )
}

DogImage.propTypes = {
  dogUrl: PropTypes.string.isRequired,
}
