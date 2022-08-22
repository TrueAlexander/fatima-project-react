import { Link } from 'react-router-dom'
import './Products.css'
import { useState } from 'react'
import dataProducts from './../../dataProducts.json'

const Products = () => {

  const [activeServiceId, setActiveServiceId] = useState(0)

  const servicesTitles = () => {
    return dataProducts.map((item) => {
      return <>
                <div className="col s12 m4" key={item.id}>
                  <h5
                    onClick={e => clickToggle(e)}
                    className={activeServiceId === item.id ? "center" : "center light"}
                  >
                    {item.title}
                  </h5>
                </div>
             </>
    })
  }

  const serviceDescription = () => {
    const currentProduct = dataProducts.filter(i => i.id === activeServiceId)
    return <div>
              <p className="left-align light">{currentProduct[0].shortDescription}</p>
              <Link to="/services" id="download-button" className="products-button btn-small waves-effect waves-light teal lighten-1">Show More</Link>
            </div>
  }

  const clickToggle = (e) => {
    const chosenService = dataProducts.filter(item => e.target.innerText === item.title)
    setActiveServiceId(chosenService[0].id) 
  }

  return (
    <div className="products">

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text"></i></h3>
              <h4>Our Services</h4>
              <div className="row">
                {servicesTitles()}
                <div className="products-description">
                  {serviceDescription()}
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
)}

export default Products
