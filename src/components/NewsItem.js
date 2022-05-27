//import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      
      <div>
        <div className="card" style={{height:"25.9rem"}}>
          <img src={imageUrl} className="card-img-top" style={{maxHeight:"10.5rem"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn-sm btn-primary" style={{textDecoration:"none"}}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
