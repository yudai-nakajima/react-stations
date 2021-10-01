// DO NOT DELETE
import React from 'react'

import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([])
  const [selectedBreed, setSelectedBreed] = React.useState('none')
  const [dogImageUrls, setDogImageUrls] = React.useState([])

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(result => setBreeds(Object.keys(result.message)))
      .catch(() => alert('通信エラーが発生しました'))
  }, [])

  const onChangedSelect = e => {
    setSelectedBreed(e.target.value)
  }

  const showDogImages = () => {
    if (selectedBreed === 'none') {
      alert('犬種が選択されていません。')
    } else {
      fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
        .then(res => res.json())
        .then(result => setDogImageUrls(result.message))
        .catch(() => alert('通信エラーが発生しました'))
    }
  }

  return (
    <>
      <div className="dog-list-selector">
        <p className="dog-list-selector__text">Breeds List</p>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          onChangedSelect={onChangedSelect}
        />
        <button
          className="dog-list-selector__button"
          type="button"
          onClick={showDogImages}
        >
          表示
        </button>
      </div>
      <div className="dog-list-content">
        {dogImageUrls &&
          dogImageUrls.map((url, i) => (
            <img
              className="dog-list-content__item"
              key={i}
              src={url}
              alt={`${selectedBreed}の写真`}
            />
          ))}
      </div>
    </>
  )
}
