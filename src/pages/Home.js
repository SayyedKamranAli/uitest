import React, { useState } from "react";
import home from "../pages/pages_style/Home.css";
import Logo from "./logo-dark2.png";
import img from "./about-part-1.png";
import Header from "../components/Header";
import * as Icon from 'react-bootstrap-icons';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from './img/home.jpg'
import img2 from './img/bg_1.jpg.webp'
import img3 from './img/bg_2.jpg.webp'
import Team from './Team';
import Contact from '../pages/Contact';
import Services from "./Services";
import Carousel from 'react-bootstrap/Carousel';
import Counter from "../components/Counter";
function Home() {
    const now = 92;
    const now1 = 80;
    const now2 = 75;
    const now3 = 72;

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll =()=> {
  
  scrollFunction()};

const scrollFunction=()=> {
  
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
 const topFunction =()=> {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const [index, setIndex] = useState(0);

const handleSelect = (selectedIndex, e) => {
  setIndex(selectedIndex);
};
  return (
    <div>
     
     <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        height={400}
          className="d-block w-100 imnew"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Welcome to SkardTech</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img
          className="d-block w-100 imnew"
          height={400}
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
        
          <h1 className="mb-4 dev">We Are The Best 
          <br/> &nbsp;&nbsp;&nbsp; Software Company</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={400}
          className="d-block w-100 imnew"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
 
          {/* <Navbar sticky="top" className="sticky">
            <Container>
              <Navbar.Brand href="/">
                <div>
                  <img src={Logo} alt="logo" />
                </div>
              </Navbar.Brand>
            </Container>
           <Row className="justify-content-end">
            
          <Navbar.Brand  href="/">Home</Navbar.Brand>
          <Nav className="me-auto text-end">
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
       
      
          </Row>
          </Navbar> */}
          
       
      {/* <div className="im"> </div> */}
      <div className="container-fluid  pt-4 pb-4">
      <div className="row ">
        <div className="col-md-1"></div>
        <div className="col-md-4 ">
            
            <img src={img} alt="img" className="left-img"/>
        </div>
        <div className="col-md-6">
            <div>
                <h6>ABOUT US</h6>
            </div>
            <div className="mb-4">
                <h1>
                Skardtech Are Increasing Business Success With Technology
                </h1>
            </div>
            <div>
                <p>
                Skardtech Over 5 years working in IT services developing software applications and mobile apps for clients all over the world.
                </p>
            </div>
            <div>
                <label className="mb-1">Software Development</label>
            <ProgressBar className="mb-2" variant="warning"animated now={now} label={`${now}%`} />
            <label className="mb-1">Mobile App Development</label>
            <ProgressBar className="mb-2" animated variant="info" now={now1} label={`${now1}%`} />
            <label className="mb-1">Digital marketing</label>
            <ProgressBar className="mb-2" animated variant="danger" now={now2} label={`${now2}%`} />
            <label className="mb-1">Web Development</label>
            <ProgressBar className="mb-2" animated variant="success" now={now3} label={`${now3}%`} />
            </div>
            
        </div>
        <div className="col-md-1"></div>
      </div>
      
      </div>
      <button onClick={topFunction} id="myBtn" title="Go to top"><i style={{position:'relative',bottom:'5px'}}><Icon.ArrowUpCircle /></i></button>
      
      <Team/>
      <Services/>
      <Counter/>
      <Contact/>

    </div>
  );
}

export default Home;
