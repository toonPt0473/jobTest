import React , { Component } from 'react';
import { Row , Col } from 'antd';
import { enterpriseFeature } from '../../FIELD/content'

export class EnterpriseFeature extends Component {

    renderCol() {
        return enterpriseFeature.map(content => {
            return  <Col xs={24} sm={24} md={24} lg={12} style={{marginBottom: "50px"}} >
                        <Row>
                            <Col span={4} offset={3} >
                                <div className="feature" style={content.featureLogoStyle} ></div>
                            </Col>
                            <Col span={13} offset={3} >
                                <h2 className="feature-text" >{content.topic}</h2>
                                <p className="feature-text">{content.detail}</p>
                            </Col>
                        </Row>
                    </Col>
        })
    }

    render() {
        return (
        <div className="feature-container" >
            <h1 className="feature-text" >MORE ENTERPRISE FEATURES</h1>
            <Row type="flex" >
                {this.renderCol()}
            </Row>
        </div>
        )
    }
}

export default EnterpriseFeature
