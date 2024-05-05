import React from 'react'
import Navbar from '../Navbar'

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="main-about-container">
        <h1 style={{ color: "black" }}>Contact Us</h1>
        <div
          style={{
            borderBottom: "2px solid red",
            margin: "auto",
            width: "8%",
            marginTop: "1rem",
          }}
        ></div>








        <div className="contact-container" style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly', marginTop:'3rem', marginBottom:'3rem'}}>
          
          
          <div style={{display:'flex', flexDirection:'column', border:'1px solid #ccc', borderRadius:'7px', padding:'30px', gap:'2rem'}}>
            <div style={{display:'flex', flexDirection:'row', gap:'2rem'}}>
              <input type="text" placeholder='First name'></input>
              <input type="text" placeholder='Last name'></input>
            </div>
            <div>
              <input style={{width:'100%'}} type="email" placeholder='Email address'/>
            </div>

            <div>
              <textarea cols="30" rows="10" placeholder='How can we help you?' style={{width:'100%', border:'1px solid #ccc', borderRadius:'7px', padding:'10px'}}></textarea>
            </div>
          </div>




          <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>

            <h2 style={{fontSize:'2rem', textAlign:'center'}}>Other Contact Details</h2>
            <div style={{display:'flex', flexDirection:'row', gap:'1rem', justifyContent:'center', marginTop:'1rem'}}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-whatsapp"></i>
            </div>
            <p style={{marginTop:'2rem', fontSize:'1.2rem', fontWeight:'500'}}>MG Road, Old Bus Stand Thandla, Jhabua, Madhya Pradesh, India</p>
            <p style={{marginTop:'0rem', fontSize:'1.2rem', fontWeight:'500'}}>Call us at : 7000697745</p>

          </div>
        </div>





      </div>
    </>
  )
}

export default Contact