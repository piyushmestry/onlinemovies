import React, { Component,useState ,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Movies from './components/Movies'
import Musics from './components/Musics'
import Watchlist from './components/Watchlist'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import { useParams} from 'react-router-dom';

// class App extends Component {
  const App = ()=>{
    const [navauth, setnavauth] = useState(true)
    let { slug } = useParams('/');
    
    
  // use
  // render() {
    useEffect(() => {
   
    }, [])

    // const Nav = ({disabled })=>{
    //   if(slug){
    //   return disabled
    //   }
    // }
    
   

    return (
      <BrowserRouter>
      <div className="App">
        <Nav ></Nav>
      <Routes>
        <Route path='/' element={<Login></Login>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/movies' element={<Movies></Movies>}/>
        <Route path='/musics' element={<Musics></Musics>}/>
        <Route path='/watchlist' element={<Watchlist></Watchlist>}/>
        {/* <Route path='/:id' element={<Nav></Nav>}/> */}
      </Routes>
     
      </div>
      </BrowserRouter>
      
    );
  //}
}

export default App;
