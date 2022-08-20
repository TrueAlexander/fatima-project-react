import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
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
        <div className="parallax"><img src="background5.jpg" alt="Unsplashed background img 1"/></div>
      </div>

      <div className="container">
        <div className="section">     
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                <h5 className="center">Feature1</h5>

                <p className="light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sed unde nulla magni aperiam, error repellat sint autem, dolore et, beatae soluta modi fuga laborum cupiditate veniam eveniet nesciunt consequuntur.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                <h5 className="center">Feature2</h5>

                <p className="light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium error mollitia iste maxime soluta ea fugiat facilis magnam, non ipsa maiores, impedit laborum voluptates eligendi sapiente sunt aspernatur ratione quidem! Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center brown-text"><i class="material-icons">settings</i></h2>
                <h5 className="center">Feature3</h5>

                <p className="light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolores culpa illo ipsa aliquam reiciendis architecto cupiditate ut! Omnis dolor repellendus provident culpa hic? Facilis nemo tenetur velit reiciendis sed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
