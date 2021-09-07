import React, { useState } from 'react'
import '../Styles/Experience.css'
import { FaAngleDoubleRight } from "react-icons/fa"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        position
        date
        job_detail {
          job_desc
        }
        strapiId
      }
    }
  }
`
function Experience() {
    const data=useStaticQuery(query)
        // console.log("*******Data ******",data)
        const{allStrapiJobs:{nodes:job}}=data
        const[value,setvalue]=useState(0)
        const {company,position,date,job_detail}=job[value]

        console.log("Job_Details",company ,position ,date, job_detail)
    return (
        <div className="experience_wrapper">
            <div>
                <h1>Experience</h1>
            <div className="experience_bar"></div>
            </div>
             

            <div className="exp_detail_container">
                {/* Left Section */}
                <div className="exp_left">
                    {
                        job.map((item,index)=>(
                    <div  className={`company ${index===value && "active_btn"}` }  key={index}>
                        <button
                        className="exp_btn"
                        onClick={()=>setvalue(index)}
                        >
                            {
                                item.company
                            }
                        </button>
                       

                    </div>
                        ))
                    }
                    
                    
                        
                </div>

                {/* Rigth section */}

                <div className="exp_right">
                    
                       <h2>{position}</h2>
                       <div className="jobName">
                          <p className="company_info">{company}</p> 
                       </div>
                       <div className="date">
                           <p>{date}</p>
                       </div>
                       
                       
                           {
                               job_detail.map((job,index)=>(
                                <div className="job_detail" key={index}>
                                       <div className="jobicons">
                                     <FaAngleDoubleRight />
                                     </div>
                                         <div>
                                          <p> {job.job_desc}</p>
                                         </div>
                                  
                                         </div>
                               ))
                           }
                         
                       {/* End */}
                       <div className="moreinfo_btn">
                           <button>More Info</button>
                       </div>
                       
                </div>

            </div>
        </div>
    )
}

export default Experience
