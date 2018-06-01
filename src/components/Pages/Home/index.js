import React, {Component} from 'react'

class Home extends Component{

    render(){
        //console.log('props home')
        //console.log(this.props)
        document.getElementById('title').innerHTML = 'Home'
        return(
            <div className="Home">
                <h1>Home Page</h1>
                <h2>Welcome</h2>
            </div>
        )
    }
}

export default Home