import React from 'react';
import { Container } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import style from './pages_style/services.css';
import img3 from './pages_style/services_img/1.png'
import img4 from './pages_style/services_img/2.png'
import img5 from './pages_style/services_img/3.png'
import img from './pages_style/services_img/4.png'
import img1 from './pages_style/services_img/5.png'
import img2 from './pages_style/services_img/6.png'
export default function () {
  return (
    <>
    <div className="rs-services main-home gray-color pt-120 mt-5 pb-120 md-pt-70 md-pb-70">
                <div className="container">
                    <div className="sec-title2 text-center mb-45">
                        <span className="sub-text"><strong>Services</strong></span>
                        <h2 className="title">
                           We Are Offering All Kinds of IT Solutions Services
                        </h2>
                        <div className="heading-line"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-25">
                           <div className="services-item">
                               <div className="services-icon">
                                   <div className="image-part">
                                       <img src={img3} alt=""/> 
                                   </div>
                               </div>
                               <div className="services-content">
                                   <div className="services-text">
                                       <h3 className="services-title"><a href="software-development.html">Mobile applications..</a></h3>
                                   </div>
                                   <div className="services-desc">
                                       <p>
                                           The Smartphone segment is booming, and so is the Android app world, which holds roughly 80% of the market share...
                                       </p>
                                   </div>
                               </div>
                           </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 mb-25 srv">
                           <div className="services-item">
                               <div className="services-icon">
                                   <div className="image-part">
                                       <img src={img4} alt=""/> 
                                   </div>
                               </div>
                               <div className="services-content">
                                   <div className="services-text">
                                       <h3 className="services-title"><a href="web-development.html">Web Development..</a></h3>
                                   </div>
                                   <div className="services-desc">
                                       <p>
                                           Is it true that you are maintaining a business for quite a while yet at the same time? 
                                       </p>
                                   </div>
                               </div>
                           </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 mb-25 srv">
                           <div className="services-item">
                               <div className="services-icon">
                                   <div className="image-part">
                                       <img src={img5} alt=""/> 
                                   </div>
                               </div>
                               <div className="services-content">
                                   <div className="services-text">
                                       <h3 className="services-title"><a href="case-studies-single.html">Customized software..</a></h3>
                                   </div>
                                   <div className="services-desc">
                                       <p>
                                           Custom Software Development: Customer software development is a mechanism by which a company deve...
                                       </p>
                                   </div>
                               </div>
                           </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-25 srv">
                           <div className="services-item">
                               <div className="services-icon">
                                   <div className="image-part">
                                       <img src={img} alt=""/> 
                                   </div>
                               </div>
                               <div className="services-content">
                                   <div className="services-text">
                                       <h3 className="services-title"><a href="cloud-and-devops.html">Digital marketing</a></h3>
                                   </div>
                                   <div className="services-desc">
                                       <p>
                                           The technique of optimizing a website for ranking based on keywords and visibility in search engines is called search engine optimization. ...
                                       </p>
                                   </div>
                               </div>
                           </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-25 srv">
                           <div className="services-item">
                               <div className="services-icon">
                                   <div className="image-part">
                                       <img src={img1} alt=""/> 
                                   </div>
                               </div>
                               <div className="services-content">
                                   <div className="services-text">
                                       <h3 className="services-title"><a href="product-design.html">Web Hosting..</a></h3>
                                   </div>
                                   <div className="services-desc">
                                       <p>
                                           Web hosting services which ensures stable and highly secure storage space for data on hardware known as web servers for hassle free access by onlin...
                                       </p>
                                   </div>
                               </div>
                           </div> 
                        </div>
                        <div className="col-lg-4 col-md-6 srv">
                           <div className="services-item">
                               <div className="services-icon">
                                   <div className="image-part">
                                       <img src={img2} alt=""/> 
                                   </div>
                               </div>
                               <div className="services-content">
                                   <div className="services-text">
                                       <h3 className="services-title"><a href="data-center.html">It consultation..</a></h3>
                                   </div>
                                   <div className="services-desc">
                                       <p>
                                           In life a good advice will benefit you more than talent, So is IT Consulting Services and so we are the best IT Consulatnt in Noida
                                       </p>
                                   </div>
                               </div>
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
