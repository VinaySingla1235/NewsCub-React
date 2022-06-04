import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinnner.js"
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:20,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
  }
  constructor(props) {
    super(props);
    //console.log("Hello i am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalArticles:0,
      //stateIndex:0,
      //index:0,
    };
    document.title=`NewsCub-${this.capitalizeFirstLetter(this.props.category)}`
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
  async updateNews(page){
    // console.log(this.state.page);
    this.props.setProgress(10);
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    //console.log(parsedData);
    this.setState({ articles: parsedData.articles,loading:false,totalArticles:parsedData.totalResults });
    // console.log(parsedData.totalResults,this.state.page);
    // console.log(url);
    this.props.setProgress(100);
  }
  
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    //let page=this.state.page+1;
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();
    //console.log(parsedData);
    this.setState({ articles: this.state.articles.concat(parsedData.articles),totalArticles:parsedData.totalResults,page:this.state.page + 1 });
    //console.log(url);
    //console.log(this.state.articles.length,this.state.totalArticles)
  };
  async componentDidMount() {
    //console.log("cdm");
    this.updateNews();
  }
  render() {
    
    
    return (
      <>
        
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner/>}
    >
        <div className="container">
        <h1 className="m-2">{this.props.countryName} {this.props.category==="general"?'Top Headlines':(this.capitalizeFirstLetter(this.props.category))+' news'}</h1>
        <div className="row">
          {/*!this.state.loading &&*/ this.state.articles.map((element,index) => {
           //this.setState({stateIndex:index})
            return (
              <div
                key={index}
                className="col-md-6 col-lg-4 col-xxl-3 col-sm-6 col-xs-12 my-3"
                align="center"
              >
                <NewsItem
                  mode={this.props.mode}
                  title={this.optimizeText(element.title, 60)}
                  description={this.optimizeText(element.description, 100)}
                  imageUrl={
                    element.urlToImage === null
                      ? "logo.png"
                      : element.urlToImage
                  }
                  newsUrl={element.url}
                  author={element.author===null?'unknown':element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div> 
            );
           
          })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    );
  }
}

export default News;
