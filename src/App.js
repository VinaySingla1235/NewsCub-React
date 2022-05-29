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
      key:'India-general',
      country:'in',
      countryName:'India'
    }
    
  }
  changeCategory=(newCategory)=>{
    this.setState({
      category:newCategory,
      key:`${this.state.countryName}-${newCategory}`
    })
    console.log(`Category changed to ${this.state.category}`);
  }
  changeCountry=(countryCode,countryNameparam)=>{
    this.setState({
      country:countryCode,
      countryName:countryNameparam,
      key:`${countryNameparam}-${this.state.category}`
    })
  }
  render() {
    return (
      <div>
       
       <Navbar category={this.state.category} changeCategory={this.changeCategory} changeCountry={this.changeCountry}/>
       <News key={this.state.key} category={this.state.category}  country={this.state.country} countryName={this.state.countryName}/>
      </div>
    )
  }
}
