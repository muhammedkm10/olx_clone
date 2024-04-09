import React from 'react'
import './banner.css'
import Arrow from '../../assets/images/svg/arrow'
import banner from '../../assets/images/banner copy.png'

function Banner() {
  return (
    <>
    <div className='wrapper'>
        <div className="catergories"> 
          <p>All Categories</p>
          <div className='arrow'>
             <Arrow/>
          </div>
        </div>
        <div className="links">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phoned</span>
            <span>For Sale:Houses & Apart</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: House & Apart</span>
        </div>
       
    </div>
    <div className="banner">
        <img src={banner} alt="" />
    </div>
 </>
  )
}

export default Banner