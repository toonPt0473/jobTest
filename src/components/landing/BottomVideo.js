import React from 'react'
import { Icon } from 'antd';


const BottomVideo = ({ videoPlay ,onClickPlay , children , topic , detail , topicStyle , detailStyle , containerHeight , videoMask , containerWidth }) => {
  return (
    <div className="video-container" style={{height: containerHeight , width: containerWidth}} >
        <iframe 
            title={topic}
            id="bottom-video"
            src="https://player.vimeo.com/video/118946918?api=1&amp;player_id=mailchimp" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allowFullScreen={false}
            style={{display:`${videoPlay ? "block" : "none"}`}}
        >
        </iframe>
        <div className="video-mask" style={{ display: `${videoPlay ? "none" : "block"}` , background: `${videoMask ? `url(${videoMask})` : "" }` , backgroundSize: "cover"  }} >
            <div className="video-quote">
                <h1 style={topicStyle ? topicStyle : {}} >{ topic }</h1>
                <p className="name" style={detailStyle ? detailStyle : {} } >{ detail }</p>
                <center>
                    <Icon type="caret-right" className="video-play-button" onClick={onClickPlay} />
                </center>
                <center>
                    {children}
                </center>
            </div>
        </div>
    </div>
  )
}

export default BottomVideo
