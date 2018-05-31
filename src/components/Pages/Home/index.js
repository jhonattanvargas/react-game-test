import React, {Component} from 'react'

class Home extends Component{

    constructor(){
        super();
        this.state = {
            moves : []
        }
    }

    render(){
        //console.log(this.state.moves)
        document.getElementById('title').innerHTML = 'Home'
        return(
            <div className="Home">
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default Home