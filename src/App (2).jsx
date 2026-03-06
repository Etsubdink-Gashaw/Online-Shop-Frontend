

import { Card } from './components/card'
import './App.css'

function App() {
 

  return (
    <>
      <div className='page'>
        <div className='nav'>
          <a href='' >Home</a>
          <a href='' >Explore</a>
          <a href='' >Categories</a>
        </div>
        <div className='first'>
        </div>
        <div className='second'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </>
  )
}

export default App
