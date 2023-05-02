import {useState} from 'react';
import './App.css';

//const [state, setState] = useState(initalState);
//const [showMenu, setShowMenu] = useState(false);
export default function InputComponent(){
  const [inputText, setText] = useState('Hello!!');

  function handleChange(e){
    setText(e.target.value);
  }

  return (
    <>
    <input value={inputText} onChange={handleChange}/>
    <p>You typed: {inputText}</p>
    <button onClick={() => setText('Hello!!')}>
      Reset
    </button>
    </>
  );
}



