import React from 'react';
import { Row , Col } from 'antd';
import { LandingBottomLogo , LandingTopLogo } from '../../FIELD/content';

const botLogo = LandingBottomLogo.map(logo => {
    return  <Col xs={12} sm={8} md={8} lg={4} 
                style={{
                    marginTop: 10,
                    marginBottom: 40
                }} 
                key={logo.title}
            >
                <div 
                    style={{
                        background: `url(${require('../images/landingimg/home-sa5894853cd.png')})`,
                        backgroundPosition: `0 ${logo.bgPosition}`,
                        height: `${logo.height}`,
                        width: `${logo.width}`,
                        margin: "auto"
                    }}
                ></div>
            </Col>
})

const topLogo = LandingTopLogo.map(logo => {
    return  <Col xs={12} sm={8} md={8} lg={4} 
                style={{
                    marginTop: 10,
                    marginBottom: 40
                }} 
                key={logo.title}
            >
                <div 
                    style={{
                        background: `url(${require('../images/landingimg/home-sa5894853cd.png')})`,
                        backgroundPosition: `0 ${logo.bgPosition}`,
                        height: `${logo.height}`,
                        width: `${logo.width}`,
                        margin: "auto"
                    }}
                ></div>
            </Col>
})

const FooterLogo = ({children , top}) => {
    return (
        <div className="footer-logo-container" >
            <p>{children}</p>
            <Row type="flex" style={{alignItems: "center", justifyContent: "center" }} >
                {top ? topLogo : botLogo}
            </Row>
        </div>  
    )
}

export default FooterLogo
