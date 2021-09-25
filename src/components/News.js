import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general',
        query: '',
        bg: ''
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        query: PropTypes.string,
        bg: PropTypes.string        
    }
    constructor(props) {
        super(props)
        this.style = { display: 'block' }
        this.state = {
            articles: [],
            page: 1,
            spinner: false,
            totalResults: 0
        }
        let categories = this.props.category;
        document.title = `GlobalNews- ${categories.charAt(0).toUpperCase() + categories.slice(1)}`
    }
    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.props.query}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
        this.setState({ spinner: true });
        this.props.setProgress(30);
        let Data = await fetch(url);
        let parseData = await Data.json();
        this.props.setProgress(50);
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            spinner: false
        })
        this.props.setProgress(100);
    }  
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&q=${this.props.query}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&q=${this.props.query}`;
        this.setState({ spinner: true });
        let Data = await fetch(url);
        let parseData = await Data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            spinner: false
        });
    }
    categories = this.props.category;
    category_title = this.categories.charAt(0).toUpperCase() + this.categories.slice(1);
    render() {
        return (
            <>
                <div className="container my-5">
                    <h3 className='text-center my-5' >GlobalNews.com -- {this.categories==='general'?'Top':this.category_title} Headlines</h3>
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles !== this.state.totalArticles}
                        loader={<Spinner loader={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize) ? 'none' : 'block'} />}>
                        <div className="container">
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div key={element.url} className="col-md-4">
                                        <NewsItems title={element.title ? element.title.slice(0, 40) : ''} description={element.description ? element.description.slice(0, 80) : ''} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} bg={this.props.bg} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
    }
}
