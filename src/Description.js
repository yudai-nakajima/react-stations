// DO NOT DELETE
import React from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg',
  )
  const [isLoading, setIsLoading] = React.useState(false)

  const changeDogUrlAtRandom = () => {
    setIsLoading(true)

    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(r => setDogUrl(r.message))
      .catch(() => alert('画像URLの取得に失敗しました。'))
      .finally(() => setIsLoading(false))
  }

  return (
    <div className="site_description_container">
      <p className="site_description">犬の画像を表示するサイトです。</p>
      <DogImage dogUrl={dogUrl} />
      <button
        className="button"
        type="button"
        onClick={changeDogUrlAtRandom}
        disabled={isLoading}
      >
        更新
      </button>
    </div>
  )
}
