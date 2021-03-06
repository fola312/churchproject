import React from 'react'
import { Link } from 'gatsby'
import logo2 from '../img/logo2.jpg'
import logo from '../img/logo1.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'



const Footer = class extends React.Component {
  render() {
    return (          
    
    <div className=" has-text-centered">
          <img
            src={logo}
            alt="caclogo"
            style={{ width: '10em', height: '10em' }}
          />
          <img
            src={logo2}
            alt="caclogo"
            style={{ width: '10em', height: '10em' }}
          />
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">

        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                <section className="menu">
                    <ul className="menu-list">
                      <li><Link to="/" className="navbar-item">Home</Link></li>
                      <li><Link className="navbar-item" to="/about">About Us</Link></li>
                    <li><a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a></li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                <section>
                  <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Join Us
                    </Link>
                  </li>
                  </ul>
                </section>
                </div>
                <div className="column is-4 social">
                
                  <a title="facebook" href="https://facebook.com">
                    <img 
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                  />
                </a>
                </div>
              </div>
            </div>
        </div>
      </footer></div>
    )
  }
}

export default Footer
