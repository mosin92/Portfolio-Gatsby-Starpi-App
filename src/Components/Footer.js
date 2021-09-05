import React from 'react'
import '../Styles/Footer.css'
import {
    FaFacebookSquare,
    FaLinkedin,
    FaDribbbleSquare,
    FaBehanceSquare,
    FaTwitterSquare,
  } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer-main">
            <div className="footer_icon">
            <div className="icon_item">
                <a href="">
                    <FaFacebookSquare />
                </a>
                
            </div>

            <div className="icon_item">
                <a href="" >
                    <FaLinkedin />
                </a>
                
            </div>
            <div className="icon_item">
                <a href="" >
                    <FaBehanceSquare/>
                </a>
                
            </div>
            <div className="icon_item">
                <a href=" ">
                    <FaDribbbleSquare />
                </a>
                
            </div>
            
            <div className="icon_item">
                <a href=" ">
                   <FaTwitterSquare /> 
                </a>
                
            </div>
            </div>

            <div className="footer_caption">
                <p>COPYRIGHT©2021 <span className="site_name">WEBDEV  </span>WITH STRAPI AS BACKEND</p>
            </div>
        </div>
    )
}

export default Footer
