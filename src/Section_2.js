import React, { Component } from 'react'
import './styles.css'
import line from "./images/line.png"
class Section_2 extends Component {
    state = {  } 
    render() { 
        return (
        <div className='section-2'>
        <div className="section-2-left">
          <div className='about'>
            <p><span><img src={line} alt="" /></span>:   What I Do</p>
            <h4>I enjoy creating delightful,</h4>
            <h4>human-centered digtal experience</h4>
          </div>
          <div className='quotes'>
            <h1> <span>Think.</span> <span>Make.</span> </h1>
            <h1> <span>Solve.</span> </h1>
          </div>
        </div>
        <div className="section-2-right">
          <div className="circle"></div>
          <div className="triangle"></div>
          <div className="square"></div>
        </div>
      </div>
        );
    }
}
 
export default Section_2;