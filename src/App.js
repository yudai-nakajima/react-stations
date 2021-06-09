// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <header>Dog アプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img
        src="https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg"
        alt="犬の画像"
      />
    </div>
  )
}
