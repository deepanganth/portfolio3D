import React, { Component } from 'react'
import './work.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import frame from './images/grunge-frame.png'
import ps1 from './images/ps1.gif'
import ps2 from './images/ps2.jpg'
import ps3 from './images/ps3.gif'
import ps4 from './images/ps4.jpg'
import uiux1 from './images/uiux1.gif'
import uiux2 from './images/uiux2.jpg'
import uiux3 from './images/uiux3.gif'
import uiux4 from './images/uiux4.jpg'
import uiux5 from './images/uiux5.gif'
import p1 from './images/p1.gif'
import p2 from './images/p2.jpg'
import p3 from './images/p3.gif'
import p4 from './images/p4.gif'
import p5 from './images/p5.gif'

class Work extends Component {
    componentDidMount() {
        AOS.init();
    }
    state = {  } 
    render() { 
        return (
            <div className='work'>
                <h4>WORK</h4>
                <div className='project-box'>
                    <div className='w-main'>
                        <h6>PHOTOSHOP</h6>
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>Being an artist is scary and requires tremendous bravery....</p>
                            </div>
                            <div className='project'>
                                <img src={ps1} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={ps2} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Only elephants should own ivory 🐘</p>
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>Neighbours not, Aliens at tajmahal........</p>
                            </div>
                            <div className='project'>
                                <img src={ps3} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={ps4} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Earth inside the plastic</p>
                            </div>
                        </div>
                        <h6>UI / UX</h6>
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>Shoe Store Ecommerce</p>
                            </div>
                            <div className='project'>
                                <img src={uiux1} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={uiux2} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Travel Agency Landing Page Concept</p>
                            </div>
                        </div>
                        <div className='w-box'data-aos="fade-left">
                            <div className='des'>
                                <p>E-commerce isn't cherry on the cake, it's new cake</p>
                            </div>
                            <div className='project'>
                                <img src={uiux3} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={uiux4} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Socks Store Ecommerce</p>
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>E-bike Store Ecommerce</p>
                            </div>
                            <div className='project'>
                                <img src={uiux5} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                        <h6>WEB PROJECT</h6>
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={p1} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Joke Generator Web Application</p>
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>3D Printing of Edible vegan Meat</p>
                            </div>
                            <div className='project'>
                                <img src={p2} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={p3} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>3D portfolio React-Three-fiber</p>
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-left">
                            <div className='des'>
                                <p>Image to pdf web Application</p>
                            </div>
                            <div className='project'>
                                <img src={p4} alt="" />
                                <img src={frame} alt="" />
                            </div>
                        </div>
                        <div className='w-box' data-aos="fade-right">
                            <div className='project'>
                                <img src={p5} alt="" />
                                <img src={frame} alt="" />
                            </div>
                            <div className='des'>
                                <p>Hotel Management system web Application</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Work;