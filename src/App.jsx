import './App.css'

import { useState } from 'react'
// 1.const handleClick = () => {
  //   console.log("clicked")
  // }


//5.

const Display = ({counter}) => <p className='counterin-arvo'>{counter}</p>
  
const Button = ({ onClick, text }) => <button className='nappi' onClick={onClick}>{text}</button>
  

const App = () => {
const [ counter, setCounter ] = useState(0);
//4.
console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

 /*2. setTimeout

  () => setCounter(counter +1),
  1000
)

console.log("rendering...", counter),
*/
/*
  return (
    <>
      <p>{counter}</p>
      <button onClick={() => {console.log("clicked")}}>
      plus
      </button>
  </>
*/
//3.
/*
return (
  <>
    <p>{counter}</p>
    <button 
    //jokainen napin painallus lisää kounterin arvoa yhdellä
      onClick={() => setCounter(counter +1)}>
    plus </button>
  
    <button 
    //nappi tyhjentää counterin arvon takaisin nollaksi
    onClick={() => setCounter(0)}>
    zero
    </button>  
</>
*/
//4.
return (
  <>

    <Display counter={counter}/>
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />     
      <Button
        onClick={decreaseByOne}
        text='minus'
      />             
  </>
  );
};


export default App