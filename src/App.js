import logo from './logo.svg';
import './App.css';
import Nav from "./assets/component/nav"
import Landing from "./assets/component/Landing"
import HighLights from './assets/component/Highlights';
import Featured from "./assets/component/Featured"
import Book from "./assets/component/ui/Book"

function App() {
  return (
    <div className="App">
     <Nav/>
     <Landing/>
     <HighLights/>
     <Featured/>
     <Book/>

    
    </div>
  );
}

export default App;
