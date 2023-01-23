import React from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { useRoutes } from "react-router-dom";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Logo from "./logo-dark2.png";
import style from './style/Header.css'
function Header() {
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-5px";
  }
  prevScrollpos = currentScrollPos;
}
  // let element = useRoutes([
  //     {
  //       path: "/",
  //       element: <Home />,
  //       children: [
  //         {
  //           path: "/Blogs",
  //           element: <Blogs />,
  //         },
  //     //     { path: "tasks", element: <DashboardTasks /> },
  //        ],
  //     },
  //     // { path: "team", element: <AboutPage /> },
  //   ]);

  //   return element;
  return (
    <div id="navbar" >


{/* <div id="navbar"> */}
     <div></div>
<Navbar  sticky="top" className="sticky" style={{height:'5em'}}>
            <Container>
              <Navbar.Brand href="/uitest">
                <div>
                  <img src={Logo} alt="logo" />
                </div>
              </Navbar.Brand>
            </Container>

            
            <Row>
            
            
                
          
          <Nav className="me-auto text-end">
          <Navbar.Brand href="/uitest"><strong>Home</strong></Navbar.Brand>
            <Nav.Link href="/uitest/team"><strong>Team</strong></Nav.Link>
            <Nav.Link href="/uitest/blogs"><strong>Blogs</strong></Nav.Link>
            <Nav.Link href="/uitest/services"><strong>Services</strong></Nav.Link>
            <Nav.Link href="/uitest/contact"><strong>Contact</strong></Nav.Link>
          </Nav>

        
        </Row>
        
          </Navbar>
          
      {/* </div> */}
    </div>
  );
}

export default Header;
