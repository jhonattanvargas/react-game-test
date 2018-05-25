//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Assets
import './css/Header.css'

class Header extends Component {
    
    static propTypes = {
      title: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
    }
  
    render() {
  
      //console.log(this.props)
      const {title, items} = this.props
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">{title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
              {
                items && items.map( (x,key) => 
                  <li key={key} className="nav-item"><Link className="nav-link" to={x.url}> {x.title} </Link></li>
                )
              }
              </ul>
            </div>
          </div>
        </nav>
      )
    }
  }
  
  export default Header