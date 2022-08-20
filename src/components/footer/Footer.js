import React from 'react'

const Footer = () => {
  return (

  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Short description</h5>
          <p className="grey-text text-lighten-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa animi maiores similique fugit accusamus fuga expedita eaque veritatis mollitia rem id, incidunt sed vel voluptates quos quisquam aspernatur saepe quis?</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Contacts</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="brown-text text-lighten-3" href="https://eformaliza.com">e-Formaliza</a>
      </div>
    </div>
  </footer>

  )
}

export default Footer
