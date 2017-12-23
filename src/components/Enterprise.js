import React, { Component } from 'react';
import FooterLogo from './landing/FooterLogo';
import EnterpriseContent from './enterprise/EnterpriseContent';
import { enterpriseContents } from '../FIELD/content';
import EnterpriseFeature from './enterprise/EnterpriseFeature';
import BottomVideo from './landing/BottomVideo';

export class Enterprise extends Component {
  state = {
    enterpriseVideo: false
  }
  renderEnterpriseContent(){
    return enterpriseContents.map((content , index) => {
      return  <EnterpriseContent
                key={content.headerContent}
                headerContent={content.headerContent}
                mainContent={content.mainContent}
                logoStyle={content.logoStyle}
                quote={content.quote}
                authorImgStyle={content.authorImgStyle}
                author={content.author}
                bigImage={content.bigImage}
                containerBgStyle={content.containerBgStyle}
                leftContent={index % 2 === 0 ? true : false}
                fontColor={content.fontColor}
              />
    })
  }

  render() {
    return (
      <div>
        <div className="enterprise-header" >
          <div className="enterprise-header-content">
            <h3>Invision Enterprise Edition</h3>
            <h1>ACCELERATE YOUR PRODUCT DESIGN CYCLE</h1>
            <h2>Unlimited team members. Unlimited projects. Unlimited creativity.</h2>
            <button className="top-video-btn" style={{backgroundColor: "rgb(47, 123, 189)"}} >START YOUR FREE ENTERPRISE TRIAL</button>
          </div>
        </div>

        <FooterLogo top={true} />

        {this.renderEnterpriseContent()}
        
        <EnterpriseFeature />

        <BottomVideo 
          videoPlay={this.state.enterpriseVideo}
          onClickPlay={() => this.setState({enterpriseVideo:true})}
          topic={`"We are designing for a global user base."`}
          detail="MOLLY NIX, SENIOR PRODUCT DESIGNER, UBER"
          containerHeight="600px"
          videoMask="./images/enterprise-quote-1.jpg"
        />

        <FooterLogo>DRIVING DESIGN AT SOME OF THE WORLD'S SMARTEST COMPANIES</FooterLogo>
      </div>
    )
  }
}

export default Enterprise
