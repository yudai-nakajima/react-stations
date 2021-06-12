// DO NOT DELETE
import React from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = React.useState([])

  React.useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(res => setBreeds(Object.keys(res.message)))
  }, [])
  return <div></div>
}
