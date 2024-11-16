import React from 'react'

const Navbar = () => {
    return (
        <nav className='container'>
            <div className='flex justify-between font-bold'>
                <h1>LOGO</h1>
                <ul className='flex gap-11'>
                    <li>Home</li>
                    <li>Body Kits</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
