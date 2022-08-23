import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
        <div className="section">
          <div className="container">
            <h1 className="header center teal-text text-lighten-2">Fatima Project</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
            </div>
            <div className="row center">
              <Link to="/services" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Get Started</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
