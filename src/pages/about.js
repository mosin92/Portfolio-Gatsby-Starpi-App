import React from 'react'
import Layout_Two from '../Components/Layout_Two'
import '../Styles/About.css'
import {StaticImage} from 'gatsby-plugin-image'
function About() {
    return (
        <Layout_Two>
                <div className="about_wrapper">
                    <div className="about_body">
                        <div className="about_left_side">
                        <StaticImage src="../Images/aboutpic.png" placeholder="blurred" />
                    </div>

                    <div className="about_right_side">
                        <h1>About Me</h1>
                        <div className="about_bar"></div>
                        
                            <p>
                            Salvia tousled chambray, shoreditch retro cliche dreamcatcher coloring book roof party keffiyeh small batch pork belly actually mlkshk shaman. Stumptown typewriter you probably haven't heard of them pork belly dreamcatcher umami woke, chambray snackwave craft beer. You probably haven't heard of them slow-carb trust fund thundercats bespoke live-edge forage echo park artisan coloring book. Semiotics af tumblr, health goth viral iPhone cold-pressed ugh kogi fanny pack. Photo booth 3 wolf moon narwhal, marfa lumbersexual taiyaki biodiesel cloud bread slow-carb enamel pin stumptown taxidermy food truck 8-bit mustache. Pickled next level vaporware, brooklyn af sriracha hoodie try-hard flannel slow-carb raw denim.

                            </p>
                        <div className="about_tag">
                            
                            <div className="tag_about">
                                react

                            </div>
                            <div className="tag_about">
                                redux

                            </div>
                            <div className="tag_about">
                                graphql

                            </div>
                            <div className="tag_about">
                                firebase

                            </div>
                            
                        </div>
                    </div>
                    </div>
                    
              
                </div>
                </Layout_Two>
        
    )
}

export default About
