import './App.css';
import "./index.css"
import Main from './Main';
import Sidebar from './Sidebar';
import Header from './Header';


export default function App(){
  return (
    <div className="App">
      <Header/>
      <div>
        <Main userName = "Mack" num= {5} />
        <Sidebar />
      </div>
    </div>
  )
}





