import React, { Component } from 'react'
import BannerHeading from './css/Banner.module.css'

class Banner extends Component {
    buttonHandler() {
        console.log("hello World")
    }
    render() {
        return (
            <>
                <div className='container-fluid text-center'>
                    <h1 className={BannerHeading.head}>Hello World</h1>

                    <button className='btn btn-primary' onClick={this.buttonHandler}>Click Me</button>
                </div>
            </>
        )
    }
}


export default Banner;
