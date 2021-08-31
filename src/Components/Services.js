import React from 'react'
import '../Styles/Service.css'
import { services_detail } from '../Constant/Service'
function Services() {
    return (
        <div className="service_container">
            <h1>Services</h1>
            <div className="service_bar"></div>
            <section className="services_box">
                {
                    services_detail.map(item => (
                        <div className="services_content">
                            <div className="icon_section">
                                {item.icon}
                            </div>

                            <div className="title_section">
                               <h5>{item.title}</h5> 
                                <div className="title_underline"></div>
                            </div>

                            <div className="service_desc">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))
                }



            </section>
        </div>
    )
}

export default Services
