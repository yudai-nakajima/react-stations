// DO NOT DELETE
import * as React from 'react'
import './App.css'

import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div className="app">
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}
