import React from 'react'
import {Link} from 'react-router-dom'
import './Footer2.css'

const Footer2 = () => {
  return (
    <main className="footer2">
        <p style={{color:'black'}}>Developed and Maintain by <Link to="https://rajatvaidhya.netlify.app" target="_blank" style={{color:'yellow'}}>Rajat Vaidhya</Link></p>
        <p style={{color:'black'}}>All rights reserved. 2023-2024</p>
    </main>
  )
}

export default Footer2