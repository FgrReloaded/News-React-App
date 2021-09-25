import React, { Component } from 'react'
import spinner from './ajax-loader.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <img src={spinner} alt="loading" className={`spinner d-${this.props.loader} `} />
                    </div>
                </div>
            </div>
        )
    }
}
