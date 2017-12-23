import React, { Component } from 'react';
import { Row , Col } from 'antd';
import { custumers } from '../../FIELD/content'


export class CustomerReview extends Component {
    renderCol() {
        return custumers.map(customer => {
            return (
                <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{marginBottom: "40px"}} >
                    <div className="contain-customer-logo">
                        <div className="customer-logo" style={customer.logoStyle} ></div>
                    </div>

                    <p>{customer.detail}</p>
                    <div className="customer-author" style={customer.authorImgStyle} ></div>
                    <p>{customer.author}</p>
                </Col>
            )
        })
    }

    render() {
        return (
        <Row type="flex" gutter={24} style={{alignContent: "baseline"}} >
            {this.renderCol()}
        </Row>
        )
    }
}

export default CustomerReview
