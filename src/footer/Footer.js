import React, { Component } from 'react'
import './Footer.css'
import arrow from './images/arrow.png'
class Section_3 extends Component {
    state = {  } 
    render() { 
        return (
            <div className='connect'>
                <p>CONNECT</p>
                <a href="mailto: deepanganth@gmail.com">
                    <div className='connect-box' >
                        <p>EMAIL</p>
                        <img src={arrow} alt="" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/deepan-ganth/" target="_blank">
                <div className='connect-box'>
                    <p>LINKEDIN</p>
                    <img src={arrow} alt="" />
                </div>
                </a>
                <a href="https://github.com/deepanganth" target="_blank">
                <div className='connect-box'>
                    <p>GITHUB</p>
                    <img src={arrow} alt="" />
                </div>
                </a>
                <a href="https://dribbble.com/dev_deepan" target="_blank">
                <div className='connect-box'>
                    <p>DRIBBBLE</p>
                    <img src={arrow} alt="" />
                </div>
                </a>
                <div className='foot'>
                    <p>DESIGNED AND DEVELOPED BY YOURS TRULY, DEEPAN GANTH 2023</p>
                </div>
            </div>
        );
    }
}
 
export default Section_3;