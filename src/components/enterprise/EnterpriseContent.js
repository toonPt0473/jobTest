import { Row , Col } from 'antd';
import React from 'react';

const EnterpriseContent = (props) => {
    const { containerBgStyle , headerContent , mainContent , authorImgStyle , quote , author , logoStyle , bigImage , leftContent , fontColor} = props;   
    return (
        <Row type="flex" className="flex-landing-container enterprise-container" style={containerBgStyle ? containerBgStyle : {}} >
            <Col md={24} lg={12} order={leftContent ? 0 : 2} >
                <div className="landing-content">
                    <h2 style={{color: fontColor}} >{ headerContent[0] }<br />{headerContent[1]}</h2>
                    <p style={{color: fontColor}} >{ mainContent }</p>
                    
                    <Row type="flex" >
                        <Col span={5} >
                            <div className="author" style={ authorImgStyle } >
                                
                            </div>
                        </Col>
                        <Col span={19} >
                            <p className="quote">{ quote }</p>
                            <h5>{ author }</h5>
                            <div className="logo" style={logoStyle} ></div>
                        </Col>
                    </Row> 

                </div>
            </Col>

            <Col md={24} lg={12} order={1} className={`contain-bigImage ${leftContent ? "" : "rltImg"}`} >
                {bigImage ? <img src={ bigImage } alt="bigImage" /> : null}
            </Col>
        </Row>
    )
}

export default EnterpriseContent
