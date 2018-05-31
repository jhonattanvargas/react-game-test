import React, {Component} from 'react'
import World from './World'

class Admin extends Component{

    render(){
        document.getElementById('title').innerHTML = 'Admin'
        return(
            <div className="Admin">
                <World />
            </div>
        )
    }
}

export default Admin