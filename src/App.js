//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
  constructor(){
    super();
    this.state={
      category:'general'
    }
    
  }
  // changeCategory=(newCategory)=>{
  //   this.setState({
  //     category:newCategory
  //   })
  //   console.log(`Category changed to ${this.state.category}`);
  // }
  render() {
    return (
      <div>
       <Router>
       <Navbar category={this.state.category}/>
       <Routes>
          <Route exact path="/" element={<News key="general" category="general"  country="in"/>}/>
          <Route exact path="/business" element={<News key="business" category="business"   country="in"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment"  country="in"/>}/>
          <Route exact path="/health" element={<News key="health" category="health"  country="in"/>}/>
          
          <Route exact path="/science" element={<News key="science" category="science"   country="in"/>}/>
          
          <Route exact path="/sports" element={<News key="sports" category="sports"  country="in"/>}/>
          
        
          <Route exact path="/technology" element={<News key="technology" category="technology"  country="in"/>}/>
          
       </Routes>
       </Router>
      </div>
    )
  }
}
