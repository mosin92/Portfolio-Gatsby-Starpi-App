import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../Styles/Layout.css'
function Layout({children}) {
    return (
        <div className="layout_wrapper">
            <div className="layout_setting">
                <Header/>
            {children}
            
            </div>
            <Footer />
        </div>
    )
}

export default Layout
