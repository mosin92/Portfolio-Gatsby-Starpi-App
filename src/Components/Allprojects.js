import React from 'react'
import '../Styles/Featureproject.css'
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { GatsbyImage,getImage } from "gatsby-plugin-image"
import {  graphql, useStaticQuery, } from "gatsby"

const query = graphql`
  {
    allStrapiProjects(
      sort: {fields: strapiId, order: DESC}
      
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
function Allprojects() {
    const projectdata=useStaticQuery(query)
    const {allStrapiProjects:{nodes:myproject}}=projectdata
    return (
        
         <div className="project_wrapper">
            <h1>All Projects</h1>
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
                                <div className="img_overlay"></div>
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
                           <p>{stack.stack}</p> 
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
                    <p>{description}Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.</p>
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
            <div className="img_overlay_2"></div>
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

export default Allprojects
