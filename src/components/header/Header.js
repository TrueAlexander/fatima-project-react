import { useState, useEffect } from 'react'
import './Header.css'


const Header = () => {
 
  const [closed, setClosed] = useState(true)

  const clickOpenHandler = () => {
    setClosed(!closed)
  }

  const clickCloseHandler = () => {
    setClosed(true)
  }

  useEffect(() => {
    !closed ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
  }, [closed])
  

  return (
    <div className="navbar-fixed" >
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="./" className="brand-logo">Logo</a>     
          <ul className="fullnav right hide-on-med-and-down">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Opinions</li>
            <li>Contacts</li>
          </ul>

          <div
            id="nav-mobile" 
            className={closed ? "sidenav" : "sidenav open"}
          >
            <div className="close-icon">
              <i
                onClick={clickCloseHandler}
                className="material-icons"
               >close</i>
            </div>
            <ul>
              <li
                onClick={clickCloseHandler}
              >
                Home</li>
              <li
                onClick={clickCloseHandler}
              >
                About</li>
              <li
                onClick={clickCloseHandler}
              >
                Services</li>
              <li
                onClick={clickCloseHandler}
              >
                Opinions</li>
              <li
                onClick={clickCloseHandler}
              >
                Contacts</li>
            </ul>
          </div>

          <div 
            data-target="nav-mobile"
            onClick={clickOpenHandler}
            className="burger sidenav-trigger">
              <i className="material-icons">menu</i>
          </div>
        </div>
      </nav>
    </div>


  )
}

export default Header
