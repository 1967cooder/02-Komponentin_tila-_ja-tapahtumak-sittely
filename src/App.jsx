import './App.css'

import { useState } from 'react'
// 1.const handleClick = () => {
  //   console.log("clicked")
  // }




const App = () => {
const [ counter, setCounter ] = useState(0);
//4.
const increaseByOne=  ()  => setCounter(counter +1)

const setToZero = () => setCounter(0)

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
    <p>{counter}</p>
    <button onClick = {increaseByOne}>
      plus
    </button>
    <button onClick = {setToZero}>
      Zero
    </button>                     
  </>
  );
};


export default App