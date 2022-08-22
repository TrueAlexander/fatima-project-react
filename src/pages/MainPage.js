import React from 'react'
import Footer from '../components/footer/Footer'
import Opinions from '../components/opinions/Opinions'
import Products from '../components/products/Products'
import About from '../components/about/About'
import Home from '../components/home/Home'
import Header from '../components/header/Header'
import Parallax from '../components/parallax/Parallax'

const MainPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Parallax />
      <Footer />
    </div>
  )
}

export default MainPage
