import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
            <>
                <div className="card my-4" style={{width: "auto",margin:'auto' }}>
                    <img src={imageUrl?imageUrl:'https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_960_720.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5><span className={`badge bg-${this.props.bg}`}>{source}</span>
                        <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <p className="card-text text-center">{description}...</p>
                        <a href={newsUrl} rel='noreferrer' target="_blank" className="btn btn-sm btn-outline-info">Read News</a>
                    </div>
                </div>
            </>
        )
    }
}
