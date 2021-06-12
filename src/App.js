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
    <div className="container">
      <header className="header">
        <h1 className="header_title">Dog アプリ</h1>
      </header>
      <div className="site_description_container">
        <p className="site_description">犬の画像を表示するサイトです。</p>
        <figure className="image_container">
          <img className="image" src={dogUrl} alt="犬の画像" />
        </figure>
        <button
          className="button"
          type="button"
          onClick={changeDogUrlAtRandom}
          disabled={isLoading}
        >
          更新
        </button>
      </div>
    </div>
  )
}
