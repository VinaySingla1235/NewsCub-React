import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinnner.js"
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
  }
  constructor() {
    super();
    //console.log("Hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page:1,
    };
  }
  optimizeText = (text, limit) => {
    if (text === null) {
      return "";
    } else if (text.length > limit) {
      let newText = text.slice(0, limit) + "...";
      return newText;
    } else {
      return text;
    }
  };
  handleNextClick=async ()=>{
    console.log(`Next ${this.props.category}`);
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e515e156be254089be425102eb891301&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({ articles: parsedData.articles,loading:false });
    this.setState({
      page:this.state.page+1,
    })
  }
  handlePrevClick=async ()=>{
    console.log(`Previous ${this.props.category}`);
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e515e156be254089be425102eb891301&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({ articles: parsedData.articles,loading:false });
    this.setState({
      page:this.state.page-1,
    })
  }
  async componentDidMount() {
    console.log("cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e515e156be254089be425102eb891301&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalArticles:parsedData.totalResults,loading:false });
  }
  render() {
    console.log("re rendered",this.props.category);
    return (
      <div className="container my-3">
        {this.props.category==="general"?<h1>Top Headlines</h1>:<h1>{this.props.category.capi} news</h1>}
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div
                key={element.url}
                className="col-md-6 col-lg-4 col-xxl-3 col-sm-6 col-xs-12 my-3"
                align="center"
              >
                <NewsItem
                  title={this.optimizeText(element.title, 69)}
                  description={this.optimizeText(element.description, 105)}
                  imageUrl={
                    element.urlToImage === null
                      ? "/Images/newsMonkey.jpg"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1}className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalArticles/this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
