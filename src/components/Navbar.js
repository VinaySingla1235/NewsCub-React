import React, { Component } from 'react'
//import PropTypes from 'prop-types'
export class Navbar extends Component {
  
  render() {
    
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">NewsMonkey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
              <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li className="dropdown-item" onClick={()=>{this.props.changeCategory('business')}} >Business</li>
            <li className="dropdown-item" onClick={()=>{this.props.changeCategory('entertainment')}} >Entertainment</li>
            <li className="dropdown-item" onClick={()=>{this.props.changeCategory('health')}} >Health</li>
            <li className="dropdown-item" onClick={()=>{this.props.changeCategory('science')}} >Science</li>
            <li className="dropdown-item" onClick={()=>{this.props.changeCategory('sports')}} >Sports</li>
            <li className="dropdown-item" onClick={()=>{this.props.changeCategory('technology')}} >Technology</li>
          </ul>
        </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

