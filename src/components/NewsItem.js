//import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, mode, author, date, source } =
      this.props;
    return (
      <div>
        <div className={`card bg-${mode}`} style={{ height: "29rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "-11px",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ left: "85%", zIndex: "1" }}
            >
              {source}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
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
              <small className="text-muted">
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
