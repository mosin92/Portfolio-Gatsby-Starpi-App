import React from 'react'
import '../Styles/Home.css'
import { socialIcons } from '../Constant/SocialLinks'
import myimg from "../Images/aboutpic.png"
import {StaticImage} from 'gatsby-plugin-image'
function Home_Hero_Section() {
    return (
        <div className="home_wrapper">
            <div className="home_left_section">
                <div className="home_info">
                    <div className="info_title">
                        <h1><span className="info_bar">I'm</span> Mohsin</h1>
                    </div>
                    <div>
                        <p>Full stack React Developer</p>
                    </div>
                   <div>
                       <button>CONTACT ME</button>
                   </div>

                   <div className="hero_icons">
                       <ul>
                           {socialIcons.map(icon=>(
                               <li key={icon.id}>

                                   <a href={icon.url}>
                                       {icon.icon}
                                   </a>

                               </li>
                           ))}
                       </ul>
                   </div>

                   
                </div>
               
            </div>
            <div className="home_right_section">
                
                <div className="home_hero_image">
                   
                  
                       <img src={myimg} width="500px" height="500px" alt="pic" />
                       {/* <StaticImage src="../Images/aboutpic.png" placeholder="blurred"  /> */}
                  
                        
                </div>
            </div>
           
        </div>
    )
}

export default Home_Hero_Section
