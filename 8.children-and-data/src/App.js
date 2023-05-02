import './App.css';
import Child from './Child.js'

//State data is data inside the component, and the component can control and mutate the data.   
//The props data is data outside the component and cannot mutate.


function App() {
  return (
   <div>
    <Child message={Date.toLocaleTimeString()}/>
   </div>
  );
}

export default App;
