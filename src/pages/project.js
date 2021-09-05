import React from 'react'
import Allprojects from '../Components/Allprojects'
import Layout_Two from '../Components/Layout_Two'
import '../Styles/Featureproject.css'
function Project() {
    return (
        <Layout_Two>
            <div className="allproject_main">
            <Allprojects />
        </div>
        </Layout_Two>
        
    )
}

export default Project
