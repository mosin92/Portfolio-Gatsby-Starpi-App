import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import '../Styles/Layout.css'
import SideBar from './SideBar'
function Layout({children}) {
    const [value,setvalue]=useState(false)
    return (
        <div className="layout_wrapper">
            <div className="layout_setting">
            <SideBar val={value} myfun={setvalue} />
                <Header myfun={setvalue} />
                
            {children}
            
            </div>
            <Footer />
        </div>
    )
}

export default Layout
