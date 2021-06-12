// DO NOT DELETE
import React from 'react'

import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([])
  const [selectedBreed, setSelectedBreed] = React.useState('none')

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(res => setBreeds(Object.keys(res.message)))
  }, [])

  const onChangedSelect = e => {
    setSelectedBreed(e.target.value)
  }

  return (
    <div className="dog-list-container">
      <p className="dog-list-container__text">Breeds List</p>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onChangedSelect={onChangedSelect}
      />
    </div>
  )
}
