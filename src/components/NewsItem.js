//import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date, source } =
      this.props;
    return (
      <div>
        <div className={`card bg-${mode}`} style={{ height: "28.5rem" }}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%',zIndex:'1'}}>
              {source}
              <span class="visually-hidden">unread messages</span>
            </span>
          <img
            src={imageUrl}
            className="card-img-top"
            style={{ maxHeight: "10.5rem" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn-sm btn-primary"
              style={{ textDecoration: "none" }}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
