// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg',
  )

  const changeDogUrlAtRandom = () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(res => {
      const result = res.json()
      result.then(r => setDogUrl(r.message))
    })
  }

  return (
    <div>
      <header>Dog アプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <figure>
        <img src={dogUrl} alt="犬の画像" />
      </figure>
      <button type="button" onClick={changeDogUrlAtRandom}>
        更新
      </button>
    </div>
  )
}
