import React from 'react'
import '../Styles/Sidebar.css'
import { navdata } from '../Constant/Link'
import { Link } from 'gatsby'
import { socialIcons } from '../Constant/SocialLinks'

function SideBar({val,myfun}) {
    
    return (
        <div className={val ? 'sidebar_show sidebar_container' : 'sidebar_container'}>

            <div className="close_icon">
                <button onClick={()=>myfun(false)} >X</button>
            </div>
            <div className="side_menu">
                <ul>
                    {
                        navdata.map(item => (

                            <li key={item.id}>
                                <Link to={item.url}>
                                    {item.name}
                                </Link>
                            </li>

                        ))
                    }
                </ul>
            </div>

            
        
                <div className="side_social_links">
                                        
                                        {socialIcons.map(icon=>(
                                            <div key={icon.id} className="side_social_items">

                                                <a href={icon.url}>
                                                    {icon.icon}
                                                </a>

                                            </div>
                                        ))}
                                   

                            </div>
       
            
        </div>
    )
}

export default SideBar
