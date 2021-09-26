import React from 'react'
import spinner from './ajax-loader.gif'

const Spinner = ()=> {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-2">
                        <img src={spinner} alt="loading" className='spinner'  />
                    </div>
                </div>
            </div>
        )
}
export default Spinner