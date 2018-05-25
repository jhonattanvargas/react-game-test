//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//Assest
import './Global/css/App.css'

//Components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

//Data
const items = [
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
]


class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }
  render() {
    const {children} = this.props
    
    return (
      <div className="App">
        <Header title="Game-Test" items={items} />
        <div className="content">
          <Content body={children} />
        </div>
        <Footer  copyright="&copy; Game-Test 2018"/>
      </div>
    );
  }
}

export default App;
