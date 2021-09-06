import React, { useState } from 'react'
import Footer from './Footer'
import Header2 from './Header2'
import SideBar from './SideBar'

function Layout_Two({children}) {
    const[value,setvalue]=useState(false)
    return (
        <div>
            <SideBar val={value} myfun={setvalue} />
            <Header2  myfun={setvalue}/>
            
            {children}
            <Footer />
        </div>
    )
}

export default Layout_Two
