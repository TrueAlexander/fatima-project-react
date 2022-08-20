import React from 'react'

const Header = () => {
  return (
    <nav className="white" role="navigation">
      <div className="nav-wrapper container">
        <a id="logo-container" href="#" className="brand-logo">Logo</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">Contacts</a></li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">Opinions</a></li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">Services</a></li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">About</a></li>
        </ul>
        <ul className="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
        </ul>


        <ul id="nav-mobile" class="sidenav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Opinions</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>

  )
}

export default Header
