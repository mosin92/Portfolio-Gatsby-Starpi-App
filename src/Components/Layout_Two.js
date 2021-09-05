import React from 'react'
import Footer from './Footer'
import Header2 from './Header2'

function Layout_Two({children}) {
    return (
        <div>
            <Header2 />
            {children}
            <Footer />
        </div>
    )
}

export default Layout_Two
