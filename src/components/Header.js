import React, { Component } from 'react';

export class NavBar extends Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scroll: 0
    }
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(e){
    this.setState({scroll: window.scrollY})
  }

  render() {
    return (
      <div 
        className="nav" 
        style={{
          background:`${this.state.scroll > 100 ? "white" : "transparent"}`,
          borderBottom:`${this.state.scroll > 100 ? "solid grey 1px" : "none"}`
        }} >
        <div className="nav-header">
          <div className="nav-title">
            <a href="/" style={{backgroundPosition: `${this.state.scroll > 100 ? "0 -782px" : ""}`}} >Invision App</a>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <input type="checkbox" id="nav-check" />
        <div className="nav-links" style={{backgroundColor: `${this.state.scroll > 100 ? "white" : "transparent"}`}} >
          <a href="/" style={{color: `${this.state.scroll > 100 ? "black" : "white"}`}} >TOUR</a>
          <a href="/customers" style={{color: `${this.state.scroll > 100 ? "black" : "white"}`}} >CUSTOMERS</a>
          <a href="/enterprise" style={{color: `${this.state.scroll > 100 ? "black" : "white"}`}} >ENTERPRISE</a>
        </div>
      </div>
    )
  }
}

export default NavBar
