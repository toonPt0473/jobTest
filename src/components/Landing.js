import React, { Component } from 'react';
import PreviewContent from './landing/PreviewContent';
import { landingContents } from '../FIELD/content';
import BottomVideo from './landing/BottomVideo';
import FooterLogo from './landing/FooterLogo';

export class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      videoPlayTop: false,
      videoPlayBottom: false
    }
  }
  renderPreviewContent(){
    return landingContents.map((content , index) => {
      return  <PreviewContent
                key={content.mainContent}
                headerContent={content.headerContent}
                mainContent={content.mainContent}
                logo={content.logo}
                quote={content.quote}
                authorImg={content.authorImg}
                author={content.author}
                bigImage={content.bigImage}
                leftContent={index % 2 === 0 ? true : false}
              />
    })
  }

  render() {
    return (
      <div>
        <BottomVideo 
          videoPlay={this.state.videoPlayTop}
          onClickPlay={() => this.setState({videoPlayTop:true})}
          topic="DESIGN BETTER. FASTER. TOGETHER."
          topicStyle={{
            fontSize: 40,
            fontStyle: "normal",
            letterSpacing: "2px",
            fontWeight: 400
          }}
          detail="The Digital Product Design platform powering the world’s best user experiences"
          containerHeight="calc(100vh - 142px)"
        >
          <button className="top-video-btn" >GET STARTED - FREE FOREVER!</button>
        </BottomVideo>
        
        <FooterLogo top={true} />

        {this.renderPreviewContent()}

        <BottomVideo 
          videoPlay={this.state.videoPlayBottom}
          onClickPlay={() => this.setState({videoPlayBottom:true})}
          topic={`"InVision is a faster way to certainty."`}
          detail="AARRON WALTER, DIRECTOR OF UX AT MAILCHIMP"
          containerHeight="600px"
        />
        
        <FooterLogo>DRIVING DESIGN AT SOME OF THE WORLD'S SMARTEST COMPANIES</FooterLogo>

      </div>
    )
  }
}

export default Landing
