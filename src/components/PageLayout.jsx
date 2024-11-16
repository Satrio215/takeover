import React from 'react'
import Navbar from './navbar'
import Foooter from './Foooter'

const PageLayout = ({ children }) => {
    return (
        <section>
            <Navbar />
            <div>
                {children}
            </div>
            <Foooter/>
        </section>
    )
}

export default PageLayout
