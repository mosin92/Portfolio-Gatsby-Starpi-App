import React from 'react'
import '../Styles/Header.css'
import { navdata } from '../Constant/Link'
import {Link} from 'gatsby'
import { FaAlignRight  } from "react-icons/fa"
function Header({myfun}) {
    return (
        <div className="navbar_wrapper">
            {/* Logo Section */}
            <div className="logo">
                <div className="logo_container">

                    <h1>Web<span className="logo_color">Dev</span></h1>
                    
                   
                </div>
                
            </div>
                    {/* Nav Link Section */}
            <div className="nav_links">
                <div className="nav_link_container">
                    <ul>
                        {
                            navdata.map(item=>(
                                
                                <li key={item.id}>
                                    <Link to={item.url}>
                                        {item.name}
                                    </Link>
                                </li>
                                
                            ))
                        }
                    </ul>
                    <FaAlignRight className="nav_icon" onClick={()=>myfun(true)} />
                </div>
                 
            </div>
            
        </div>
    )
}

export default Header
