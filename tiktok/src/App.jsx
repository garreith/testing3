import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [heart, setheart] = useState('heart')

  const bHeart = () =>{
    if (count == 0){
      setCount(1)
      setheart('heart1')
    }
    else{
      setCount(0)
      setheart('heart')
    }
  }

  return (
    <>
      <div>
        <hr className='black'></hr>
        <label className='usn1'>username_abc</label>
        <button className={heart} onClick={bHeart}>heart</button>
        <button className='comment'>comment</button>
        <label className='des1'>description description description description</label>
        <label className='des2'>description description description description</label>
      </div>
    </>
  )
}

export default App
