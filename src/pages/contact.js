import React from 'react'
import Layout_Two from '../Components/Layout_Two'
import '../Styles/Contact.css'
function Contact() {
    return (
        <Layout_Two>
            <div className="contact_container">
                <div className="contact_Form">
                    <h2>Get In Touch</h2>
                      
                           <form>
                           <div className="form_container">
                        <div>
                             <input type="text" placeholder="NAME" name="text"  /> 
                        </div>
                        <div>
                            <input type="email" placeholder="EMAIL" name="email" />
                        </div>
                        
                        <div>
                            <textarea rows="6" cols="10" placeholder="MESSAGE" name="message" />
                        </div>
                        </div>
                        <div>
                            <input type="submit" placeholder="SUBMIT HERE" value="SUBMIT HERE" /> 
                        </div>
                        

                    </form>
                      
                       
                  
                    
                   
                </div>
           
        </div>
        </Layout_Two>
        
    )
}

export default Contact
