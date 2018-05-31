//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { socketConnect } from 'socket.io-react'

//Assest
import './Global/css/App.css'

//Components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

class App extends Component {

  constructor(props){
    super(props)

    if(localStorage.getItem('token') === null){
      this.state = {
        items: [
          {
            title: 'About',
            url: '/contact'
          },
          {
              title: 'LogIn',
              url: '/login'
          },
          {
              title: 'Register',
              url: '/register'
          }
        ],
        isLoggedIn:false,
        resources: [],
        onlines: 0
      }
    }
    else{
      this.state = {
        items: [
          {
            title: 'Home',
            url: '/'
          },
          {
            title: 'About',
            url: '/contact'
          }
        ],
        isLoggedIn:true,
        resources: [],
        onlines: 0
      }
    }
    
    this.props.socket.on('onlines', data => this.setState({onlines:data}))
    this.props.socket.on('resources', data => {
      this.setState({resources: data})
    })


    this.handleLogged = this.handleLogged.bind(this)
  }

  handleLogged(){
    if(localStorage.getItem('token') !== null){
      this.setState({
        items: [
          {
            title: 'About',
            url: '/contact'
          }
        ],
        isLoggedIn:true,
        resources: []
      })
    }else{
      this.setState({
        items: [
          {
            title: 'About',
            url: '/contact'
          },
          {
              title: 'LogIn',
              url: '/login'
          },
          {
              title: 'Register',
              url: '/register'
          }
        ],
        isLoggedIn:false,
        resources: []
      })
      window.location.href = '/contact'
    }
  }

  componentWillMount(){
    if(localStorage.getItem('token') !== null)
    fetch('http://localhost:3000/api/resources',{method:'GET' , headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'authorization' : `Bearer ${localStorage.getItem('token')}`
      }})
      .then(res => res.json())
      .then(data => {
        //console.log(data.moves)
        this.setState({resources:data.resources})
      })
        .catch(err =>{
            console.log(err)
        })
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    const {children} = this.props
    
    return (
      <div className="App">
        <Header title="Game-Test" items={this.state.items} handleLogged={this.handleLogged} socket={this.props.socket} shareState={this.state}/>
        <div className="content">
          <Content body={children} socket={this.props.socket} handleLogged={this.handleLogged} />
        </div>
        <Footer  copyright="&copy; Game-Test 2018"/>
      </div>
    );
  }
}

export default socketConnect(App);
