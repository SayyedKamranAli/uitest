import React from 'react'
import Footer from '../components/Footer';
import { Outlet} from "react-router-dom";
import Header from '../components/Header';
function Layout() {
  return (
    <div>
         
       
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout