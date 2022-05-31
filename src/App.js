//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  fetchFromStorage=(parameter,defaultpara)=>{
  if(localStorage.getItem(parameter)==null){
    return defaultpara;
  }
  else{
    return localStorage.getItem(parameter);
  }

  }
  constructor(){
    super();
    this.state={
      category:this.fetchFromStorage('newsAppCategory','general'),
      key:this.fetchFromStorage('newsAppKey','India-general'),
      country:this.fetchFromStorage('newsAppCountry','in'),
      countryName:this.fetchFromStorage('newsAppCountryName','India')
    }
    
  }
  changeCategory=(newCategory)=>{
    let newKey=`${this.state.countryName}-${newCategory}`;
    this.setState({
      category:newCategory,
      key:`${this.state.countryName}-${newCategory}`
    })
    localStorage.setItem('newsAppCategory',newCategory);
    localStorage.setItem('newsAppKey',newKey);
    console.log(`Category changed to ${this.state.category}`);
  }
  changeCountry=(countryCode,countryNameparam)=>{
    let newKey=`${countryNameparam}-${this.state.category}`;
    this.setState({
      country:countryCode,
      countryName:countryNameparam,
      key:`${countryNameparam}-${this.state.category}`
    })
    localStorage.setItem('newsAppCountry',countryCode);
    localStorage.setItem('newsAppCountryName',countryNameparam);
    localStorage.setItem('newsAppKey',newKey);
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
