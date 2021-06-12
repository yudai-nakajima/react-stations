// DO NOT DELETE
import React from 'react'
import PropTypes from 'prop-types'

export const BreedsSelect = ({ breeds, selectedBreed, onChangedSelect }) => {
  return (
    <>
      <select value={selectedBreed} onChange={onChangedSelect}>
        <option value="none">Select</option>
        {breeds.map(b => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>
    </>
  )
}

BreedsSelect.propTypes = {
  breeds: PropTypes.array.isRequired,
  selectedBreed: PropTypes.string.isRequired,
  onChangedSelect: PropTypes.func.isRequired,
}
