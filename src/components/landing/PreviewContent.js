import { Row , Col } from 'antd';
import React from 'react';

const PreviewContent = (props) => {
    const { headerContent , mainContent , logo , quote , authorImg , author , bigImage , leftContent } = props;   
    return (
        <Row type="flex" className="flex-landing-container" >
            <Col md={24} lg={12} order={leftContent ? 0 : 2} >
                <div className="landing-content">
                    <h2>{ headerContent[0] }<br />{headerContent[1]}</h2>
                    <p>{ mainContent }</p>
                    <img src={ logo } alt="logo" className="logo" />
                    <p className="quote">{ quote }</p>
                    <p className="author">
                        <img src={ authorImg } alt="authorImg" />
                        { author }
                    </p>
                </div>
            </Col>
            <Col md={24} lg={12} order={1} className={`contain-bigImage ${leftContent ? "" : "rltImg"}`} >
                <img src={ bigImage } alt="bigImage" />
            </Col>
        </Row>
    )
}

export default PreviewContent
