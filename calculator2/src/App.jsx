import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [list1, setL1] = useState([])

  const [list2, setL2] = useState([])

  const [var1, setV1] = useState('')

  const [var2, setV2] = useState(0)

  const [show, setShow] = useState()

  const one = () =>{
    setL1(prevL1 => [...prevL1, '1'])
    setV1(var1 + '1')
    setV2(var2 + 1)
  }

  const two = () =>{
    setL1(prevL1 => [...prevL1, '2'])
    setV1(var1 + '2')
    setV2(var2 + 1)
  }

  const three = () =>{
    setL1(prevL1 => [...prevL1, '3'])
    setV1(var1 + '3')
    setV2(var2 + 1)
  }

  const four = () =>{
    setL1(prevL1 => [...prevL1, '4'])
    setV1(var1 + '4')
    setV2(var2 + 1)
  }

  const five = () =>{
    setL1(prevL1 => [...prevL1, '5'])
    setV1(var1 + '5')
    setV2(var2 + 1)
  }

  const six = () =>{
    setL1(prevL1 => [...prevL1, '6'])
    setV1(var1 + '6')
    setV2(var2 + 1)
  }

  const seven = () =>{
    setL1(prevL1 => [...prevL1, '7'])
    setV1(var1 + '7')
    setV2(var2 + 1)
  }

  const eight = () =>{
    setL1(prevL1 => [...prevL1, '8'])
    setV1(var1 + '8')
    setV2(var2 + 1)
  }

  const nine = () =>{
    setL1(prevL1 => [...prevL1, '9'])
    setV1(var1 + '9')
    setV2(var2 + 1)
  }

  const zero = () =>{
    setL1(prevL1 => [...prevL1, '0'])
    setV1(var1 + '0')
    setV2(var2 + 1)
  }

  const plus = () =>{
    setL1(prevL1 => [...prevL1, ' + '])
    setL2(prevL2 => [...prevL2, var1])
    setL2(prevL2 => [...prevL2, '+'])
    setV1('')
    setV2(var2 + 1)
  }

  const minus = () =>{
    setL1(prevL1 => [...prevL1, ' - '])
    setL2(prevL2 => [...prevL2, var1])
    setL2(prevL2 => [...prevL2, '-'])
    setV1('')
    setV2(var2 + 1)
  }

  const divide = () =>{
    setL1(prevL1 => [...prevL1, ' ÷ '])
    setL2(prevL2 => [...prevL2, var1])
    setL2(prevL2 => [...prevL2, '/'])
    setV1('')
    setV2(var2 + 1)
  }

  const times = () =>{
    setL1(prevL1 => [...prevL1, ' x '])
    setL2(prevL2 => [...prevL2, var1])
    setL2(prevL2 => [...prevL2, 'x'])
    setV1('')
    setV2(var2 + 1)
  }

  const equals = () =>{
    for(let x = 0; x < list2.length; x++){
      for(let y = 0; y < list2.length; y++){
        if (list2[y] == 'x'){
          
        }
      }
    }
  }

  useEffect(() => {setShow(list1), console.log(list2)}, [var2])
  /*useEffect(() => {console.log(list1)}, [var2])*/

  return (
    <>
      <div>
        <label>{show}</label>
        <p></p>
        <button>«</button>
        <button>»</button>
        <button>C</button>
        <button>⌫</button>
        <br></br>
        <button>⟮</button>
        <button>⟯</button>
        <button>%</button>
        <button onClick={divide}>÷</button>
        <br></br>
        <button onClick={seven}>7</button>
        <button onClick={eight}>8</button>
        <button onClick={nine}>9</button>
        <button onClick={times}>x</button>
        <br></br>
        <button onClick={four}>4</button>
        <button onClick={five}>5</button>
        <button onClick={six}>6</button>
        <button onClick={minus}>-</button>
        <br></br>
        <button onClick={one}>1</button>
        <button onClick={two}>2</button>
        <button onClick={three}>3</button>
        <button onClick={plus}>+</button>
        <br></br>
        <button>±</button>
        <button onClick={zero}>0</button>
        <button>.</button>
        <button>=</button>
      </div>
    </>
  )
}

export default App
