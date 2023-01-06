import React from "react";
import { Container } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import style from './pages_style/contact.module.css'
function Contact() {
  return (
    <div className={style.bgImg} style={{marginTop:'5em'}}>
      <Container className="">
      <section className={style.bgimg  } >
        <h2 className="h1-responsive font-weight-bold text-center" style={{color:'#ffffff'}}>
          Get In Touch
        </h2>

        <p className="text-center w-responsive mx-auto mb-5" style={{color:'#ffffff'}}>
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
             
            >
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                    
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      placeholder="Your message"
                    ></textarea>
                    
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <button
                className="btn btn-danger"
              >
                Send
              </button>
            </div>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fa-2x" style={{color:'#ffffff'}}><Icon.GeoAltFill /></i>
                <p style={{color:'#ffffff'}}>San Francisco, CA 94126, USA</p>
              </li>

              <li><i className="fa-2x" style={{color:'#ffffff'}}>
              <Icon.TelephoneFill/>
              </i>
                
                <p style={{color:'#ffffff'}}>+ 01 234 567 89</p>
              </li>

              <li>
                <i className="fa-2x" style={{color:'#ffffff'}}>
                <Icon.EnvelopeFill />
                </i>
                <p style={{color:'#ffffff'}}>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </Container>
    </div>
  );
}

export default Contact;
