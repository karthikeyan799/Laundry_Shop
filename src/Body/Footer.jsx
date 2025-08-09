import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid footer'>
      <div>
        <h4>Follow Us on</h4>
        <ul className='nav gap-3'>
          <li className='nav-item' ><a href="#"><i className='bi bi-youtube'></i></a></li>
          <li className='nav-item'><a href="#"><i className='bi bi-facebook'></i></a></li>
          <li className='nav-item'><a href="#"><i className='bi bi-instagram'></i></a></li>
          <li className='nav-item'><a href="#"><i className='bi bi-linkedin'></i></a></li>
        </ul>
      </div>
      <div>
        footer
        <p>Anandham Youth Foundation</p>
        <p>Copyright c 2024. All Rights  Reserved</p>
      </div>


    </div>
  )
}
