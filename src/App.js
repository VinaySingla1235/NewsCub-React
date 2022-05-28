//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
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
       <Switch>
          <Route exact path="/">
          <News key="general" category="general" pageSize='4' country="in"/>
          </Route>
          <Route exact path="/business">
          <News key="business" category="business"  pageSize='4' country="in"/>
          </Route>
          <Route exact path="/entertainment">
          <News key="entertainment" category="entertainment" pageSize='4' country="in"/>
          </Route>
          <Route exact path="/health">
          <News key="health" category="health" pageSize='4' country="in"/>
          </Route>
          <Route exact path="/science">
          <News key="science" category="science"  pageSize='4' country="in"/>
          </Route>
          <Route exact path="/sports">
          <News key="sports" category="sports" pageSize='4' country="in"/>
          </Route>
          <Route exact path="/technology">
          <News key="technology" category="technology" pageSize='4' country="in"/>
          </Route>
       </Switch>
       </Router>
      </div>
    )
  }
}
