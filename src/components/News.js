import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types'

export class News extends Component {
  

  render() {
    return (
      <div>
        This is a news component
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}

export default News
