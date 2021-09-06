import React from 'react'
import '../Styles/Featureproject.css'
import officeimg from '../Images/office.jpg'
import { FaGithubSquare, FaShareSquare  } from "react-icons/fa"
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import {  graphql, Link, useStaticQuery, } from "gatsby"
const query = graphql`
  {
    allStrapiProjects(
      sort: {fields: strapiId, order: DESC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        strapiId
        title
        description
        img {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        url
        stack {
          stack
        }
      }
    }
  }
`
function FeatureProject() {
    const projectdata=useStaticQuery(query)
    const {allStrapiProjects:{nodes:myproject}}=projectdata
    console.log("***********Project Data************",myproject)
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
               myproject.map((item,index)=>{

                const {img:{localFile:{childImageSharp:projectimage}}}=item
                const {title,description,stack,url,strapiId}=item
                console.log("project Image ***",projectimage)
                const pathtoImage=getImage(projectimage)
                const num=index+1 
                if(num%2==1){
                    return( <section className="project_container">
                            <div className="project_img">
                                {/* <div className="img_overlay"></div> */}
                                <GatsbyImage image={pathtoImage} />
                                {/* <StaticImage src="../Images/office.jpg" placeholder="blurred" layout="constrained" /> */}
                    {/* <img src={officeimg} /> */}
                </div>

                <div className="project_card">
                    <p>0{index +1 }</p>
                    <h4>{title}</h4>
                    <div className="project_text">
                        <p>
                           {description}Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.</p>
                    </div>
                    {/* Tag Section Ends */}
                    <div className="project_tag">
                        
                        {
                            stack.map((stack,index)=>(
                              <div className="tag" key={index}>
                            {stack.stack}
                        </div>  
                            ))
                        }
                        
                        {/* <div className="tag">
                            Firebase
                        </div> */}
                    </div>
                    {/* Tag Section Ends */}

                    <div className="project_icons">

                        <div className="icon">
                        <a href={url}>
                            <FaGithubSquare />
                        </a>
                        </div>

                        <div className="icon">
                        <a href="">
                               <FaShareSquare /> 
                            </a>
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
                <h4>{title}</h4>
                <div className="project_text">
                    <p>{description} Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.</p>
                </div>
                {/* Tag Section Ends */}
                <div className="project_tag">

                {
                            stack.map((stack,index)=>(
                              <div className="tag" key={index}>
                            {stack.stack}
                        </div>  
                            ))
                        }
                </div>
                {/* Tag Section Ends */}

                <div className="project_icons">

                    <div className="icon">

                        <a href={url}>
                            <FaGithubSquare />
                        </a>
                           
                        </div>

                        <div className="icon">
                            <a href="">
                               <FaShareSquare /> 
                            </a>
                            
                        </div>

                </div>

            </div>


            <div className="project_img_two">
            {/* <div className="img_overlay_2"></div> */}
            <GatsbyImage image={pathtoImage} />
            {/* { ? <img src={officeimg} /> : */}
            {/* <StaticImage src="../Images/office.jpg" placeholder="blurred" layout="constrained" /> */}
             
            
                 
            </div>
                   </section>
                    )
                   
                }
                   
                
               })
           }
                        
                    
                 <div className="projects_btn">
                     <button> Projects </button>
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
