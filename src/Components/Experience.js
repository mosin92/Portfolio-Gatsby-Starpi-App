import React from 'react'
import '../Styles/Experience.css'
import { FaAngleDoubleRight } from "react-icons/fa"
function Experience() {
    return (
        <div className="experience_wrapper">
            <div>
                <h1>Experience</h1>
            <div className="experience_bar"></div>
            </div>
             

            <div className="exp_detail_container">
                {/* Left Section */}
                <div className="exp_left">
                    <div className="company">
                        Tommy
                    </div>
                    <div className="company">
                    Big Dro
                    </div>
                        
                </div>

                {/* Rigth section */}

                <div className="exp_right">
                       <h2>Full Stack Web Developer</h2>
                       <div className="jobName">
                          <p className="company_info">Tommy</p> 
                       </div>
                       <div className="date">
                           <p>December 2015 - Present</p>
                       </div>
                       
                       <div className="job_detail">
                           <div className="jobicons">
                           <FaAngleDoubleRight />
                           </div>
                           <div>
                               <p> Tote bag sartorial mlkshk air plant 
                               vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt</p>
                           </div>
                          
                          
                       </div>
                       {/* Next Entry */}
                       <div className="job_detail">
                           <div className="jobicons">
                           <FaAngleDoubleRight />
                           </div>
                           <div>
                               <p> Tote bag sartorial mlkshk air plant 
                               vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt</p>
                           </div>
                          
                          
                       </div>
                       
                        {/* Next Entry */}
                        <div className="job_detail">
                           <div className="jobicons">
                           <FaAngleDoubleRight />
                           </div>
                           <div>
                               <p> Tote bag sartorial mlkshk air plant 
                               vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt</p>
                           </div>
                          
                          
                       </div>
                       
                       {/* End */}
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
