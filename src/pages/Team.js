import React from 'react'
import team from "./team.css";
import Team1 from './team-1.jpg';
import Team2 from './team-2.jpg';
import Team3 from './team-3.jpg';
import Team4 from './team-4.jpg';
import * as Icon from 'react-bootstrap-icons';
function Team() {
  return (
    <div> 
    <section id="team" className="team section-bg pb-4 ">
      <div className="container" data-aos="fade-up" style={{marginTop:'5em'}}>

        <div className="section-title">
          <h2>What Saying Our Team</h2>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src={Team1} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"><Icon.Twitter/></i></a>
                  <a href=""><i className="ri-facebook-fill"><Icon.Facebook/></i></a>
                  <a href=""><i className="ri-instagram-fill"></i><Icon.Instagram/></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><Icon.Linkedin/></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div className="pic"><img src={Team2} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i><Icon.Twitter/></a>
                  <a href=""><i className="ri-facebook-fill"><Icon.Facebook/></i></a>
                  <a href=""><i className="ri-instagram-fill"></i><Icon.Instagram/></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><Icon.Linkedin/></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div className="pic"><img src={Team3} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i><Icon.Twitter/></a>
                  <a href=""><i className="ri-facebook-fill"></i><Icon.Facebook/></a>
                  <a href=""><i className="ri-instagram-fill"></i><Icon.Instagram/></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><Icon.Linkedin/></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div className="pic"><img src={Team4} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.</p>
                <div className="social">
                  <a href=""><i className="ri-twitter-fill"></i><Icon.Twitter/></a>
                  <a href=""><i className="ri-facebook-fill "><Icon.Facebook/></i></a>
                  <a href=""><i className="ri-instagram-fill"></i><Icon.Instagram/></a>
                  <a href=""> <i className="ri-linkedin-box-fill"><Icon.Linkedin/></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    </div>
  )
}

export default Team
