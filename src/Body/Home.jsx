import React from 'react'
import './Home.css'
import hospitalImage from '../assets/360.jpg'
// import  '../Body/Home.css'
export default function Home() {
  return (
    <div className='container-fluid'>

      <div className='ban'>
        {/* <img className='banner' src="src/assets/360.jpg" alt="" /> */}
        <img className='banner' style={{backgroundImage:`url(${hospitalImage})`,
        // backgroundRepeat:'no-repeat',
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
        }} alt="" />
        <p className='homep'>
          <h1>Why Our hospital</h1>
          <h4>
        We are a leading, multi-speciality hospital offering best-in-class medical services for nearly 2 decades. With paramount focus on patient care, patient safety and patient satisfaction, we are committed to offer exemplary medical services going beyond the norm of healthcare.
        </h4> </p>
      </div>
     <div className='container mt-4'>
      <div className=' homwRow row gap-1 bg-info text-center'>
        <div className='homeRow col-3'>
kl
        </div>
        <div className='homeRow col-3'>
de
        </div>
        <div className='homeRow col-3'>
de
        </div>
       
      </div>
      </div>
    </div>
  )
}
