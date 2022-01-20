import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
const Footer = () => {
    return (
        <>
            <div className='footer' >
            made by ♥️
                <Link to='/' className='title'> madhusmita</Link>
            </div>
        </>
    )
}

export default Footer
