import React from 'react';
import './App.css';
import Home from './components/home';
import About from './components/about';
import OurChildren from './components/ourChildren';
import Donor from './components/donor';
import Gift from './components/gift';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import facebok from './face.png';
import instagram from './instagram.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='header'>
          <Helmet>
            <title>Gespars Vänner</title>
          </Helmet>
          <h1 className='header-title'>Gespars Vänner</h1>
          <div className='header-link-div'>
            <Link className='header-link' to='/'>Startsida</Link>
            <Link className='header-link' to='/About'>Om oss</Link>
            <Link className='header-link' to='/OurChildren'>Våra fadderbarn</Link>
            <Link className='header-link' to='/Donor'>Bli månadsgivare</Link>
            <Link className='header-link' to='/Gift'>Gåvopaket</Link>
          </div>
        </header>

          <button className='member-button'>Bli månadsgivare</button>


        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/ourChildren' component={OurChildren} />
        <Route path='/donor' component={Donor} />
        <Route path='/gift' component={Gift} />
        <footer>
          <ul className='contact'> Kontakt:
            <li className='contact-li'>Tel: 0737 73 65 44</li>
            <li className='contact-li'>Mail: gesparsvanner@gmail.com</li>
          </ul>
          <div className='media'> 
          <p className='media-p'>Besök våra sociala medier:</p>
          <a href='https://www.facebook.com/gesparsvanner/' target='_blank'><img className='media-logo' src={facebok}/></a>
          <a href='https://www.instagram.com/gesparsvanner/' target='_blank'><img className='media-logo' src={instagram}/></a>
          </div>
        </footer>
      </div>
    </Router>

  );
}

export default App;
