import React, { Component } from 'react';
import CustomerReview from './custumer/customerReview';
import BottomVideo from './landing/BottomVideo'

export class Customers extends Component {
    state = {
        customerVideo: false
    }
    render() {
        return (
        <div>
            <div className="customer-header">
                <h1 className="customer-header-text">
                    WHY DO SO MANY OF THE WORLD'S SMARTEST COMPANIES USE INVISION?
                </h1>
            </div>

            <div className="customer-video" >
                <h1>Because startups stay agile to win</h1>
                <BottomVideo 
                    videoPlay={this.state.customerVideo}
                    onClickPlay={() => this.setState({customerVideo:true})}
                    topic=""
                    detail=""
                    containerHeight="428px"
                    videoMask="./images/video-cover-mailchimp.jpg"
                    containerWidth="80%"
                />
            </div>

            <div  className="customers-review-container" >
                <CustomerReview />
            </div>
            
        </div>
        )
    }
}

export default Customers
