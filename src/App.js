import logo from './logo.svg';
import './App.css';
import Nav from "./assets/component/nav"
import Landing from "./assets/component/Landing"
import HighLights from './assets/component/Highlights';
import Featured from "./assets/component/Featured"
import Book from "./assets/component/ui/Book"
import Discounted from './assets/component/ui/Discounted';
import Explore from './assets/component/Explore';
import Footer from './assets/component/Footer';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './Pages/Home';
import Books from './Pages/Books';



function App() {
  return (
    <Router>
     
    
    <div className="App">
     <Nav/>
     <Route path = "/" component = {Home}/>
     <Route path="/books" exact render={() => <Books books={Books} />} />
    
     


     
     
     <Footer/>


    </div>
    </Router>
  );
}

export default App;
