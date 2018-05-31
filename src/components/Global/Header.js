//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//Assets
import './css/Header.css'

class Header extends Component {
    
    constructor(props){
      super(props)

      this.handleLogOutLink = this.handleLogOutLink.bind(this)

      console.log(this.props)
     
    }

    static propTypes = {
      title: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
      handleLogged: PropTypes.func.isRequired,
      socket: PropTypes.object.isRequired
    }

    handleLogOutLink(){
      if(localStorage.getItem('token') !== null){
        this.props.socket.emit('logout',{token:localStorage.getItem('token')})
        localStorage.removeItem('token')
      }
        
      this.props.handleLogged()
    }

    render() {
  
      //console.log(this.props)
      const {items} = this.props
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">{
              localStorage.getItem('token') && this.props.shareState.resources.map((m,key)=>
                <span key={key} className="badge badge-pill badge-secondary">{m.name} : {m.current} / {m.max}</span>
              )
            }</a>
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
              {localStorage.getItem('token') !== null ? <li className="nav-item"><a href="#" onClick={this.handleLogOutLink} className="nav-link">LogOut</a></li>  : ''}    
              <li className="nav-item"><a className="nav-link"><span className="badge badge-pill badge-info">{this.props.shareState.onlines}</span></a></li>
              </ul>
            </div>
          </div>
        </nav>
      )
    }
  }
  
  export default Header