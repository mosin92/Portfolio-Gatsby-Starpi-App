import React,{useEffect, useState} from 'react'
import '../Styles/Featureproject.css'
import officeimg from '../Images/office.jpg'
function FeatureProject() {
const [check,setcheck]=useState(true)
    const data=[{
        id:1,
        text:"I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore.Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.",
        url:officeimg,
    },
    {
        id:2,
        text:"I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore.Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.",
        url:officeimg,
    },
    {
        id:3,
        text:"I'm baby salvia lomo yuccie, vinyl seitan XOXO tousled bicycle rights slow-carb occupy taiyaki microdosing brunch. Photo booth slow-carb health goth kickstarter cardigan. Roof party pour-over swag pork belly glossier DIY farm-to-table godard locavore.Chicharrones gastropub slow-carb food truck tumblr semiotics, heirloom ugh wolf unicorn thundercats health goth.",
        url:officeimg,
    },
]
//    useEffect(
//        ()=>{
//        setcheck(!check)
//        } ,[check]
//    )
    return (
        <div className="project_wrapper">
            <h1>Featured Projects</h1>
            <div className="project_bar"></div>

            {/* Project Feature Container */}
           
           {
               data.map((item,index)=>{

                const num=index+1 
                if(num%2==1){
                    return( <section className="project_container">
                            <div className="project_img">
                                <div className="img_overlay"></div>
                    <img src={officeimg} />
                </div>

                <div className="project_card">
                    <p>0{index +1 }</p>
                    <h4>Angular Project</h4>
                    <div className="project_text">
                        <p>
                           {item.text}</p>
                    </div>
                    {/* Tag Section Ends */}
                    <div className="project_tag">

                        <div>
                            Angular
                        </div>
                        <div>
                            Firebase
                        </div>
                    </div>
                    {/* Tag Section Ends */}

                    <div className="project_icons">

                        <div>
                            Icons -1
                        </div>

                        <div>
                            Icons-2
                        </div>

                    </div>

                </div>
                </section>)
                }

                else{
                    return (
                         <section className="project_container">
                    <div className="project_card_two">
                <p>0{index +1 }</p>
                <h4>Angular Project</h4>
                <div className="project_text">
                    <p>{item.text}</p>
                </div>
                {/* Tag Section Ends */}
                <div className="project_tag">

                    <div>
                        Angular
                    </div>
                    <div>
                        Firebase
                    </div>
                </div>
                {/* Tag Section Ends */}

                <div className="project_icons">

                    <div>
                        Icons -1
                    </div>

                    <div>
                        Icons-2
                    </div>

                </div>

            </div>


            <div className="project_img_two">
            <div className="img_overlay_2"></div>
                <img src={officeimg} />
            </div>
                   </section>
                    )
                   
                }
                   
                
               })
           }
                        
                    
                 <div className="projects_btn">
                     <button>Projects</button>
                 </div>
                

            
            {/* Project Feature Section Ends */}



            {/* Project Feature Container */}

           
            {/* <section className="project_container">

                

               

            </section> */}
            {/* Project Feature Section Ends */}

        </div>
    )
}

export default FeatureProject
