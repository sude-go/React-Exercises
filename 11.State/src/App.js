import React, {useState} from 'react';
import Heading from './Heading';
import './App.css';

function App() {
  const [word, setWord]= React.useState('Eat')

  // setWord ('drink')
  function handleClick(){
    setWord ('Drink');
  };
  
  return (
    <div className='App'>
      <Heading message = {word + " at Little Lemon"}/>
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
}

export default App;
