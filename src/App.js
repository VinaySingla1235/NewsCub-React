//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      category:'general',
      key:'general',
    }
    
  }
  changeCategory=(newCategory)=>{
    this.setState({
      category:newCategory,
      key:newCategory
    })
    console.log(`Category changed to ${this.state.category}`);
  }
  render() {
    return (
      <div>
       
       <Navbar category={this.state.category} changeCategory={this.changeCategory}/>
       <News key={this.state.key} category={this.state.category}  country="in"/>
      </div>
    )
  }
}
