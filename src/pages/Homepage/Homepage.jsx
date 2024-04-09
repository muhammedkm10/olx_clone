import React from 'react'
import Header from '../../components/header/Header.jsx'
import Banner from '../../components/banner/Banner.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Productlist from '../../components/productlist/Productlist.jsx'

function Homepage() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Productlist/>
      <Footer/>
    </div>
  )
}

export default Homepage