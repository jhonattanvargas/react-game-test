import React, {Component} from 'react'

class Contact extends Component{

    render(){
        document.getElementById('title').innerHTML = 'Contact'
        return(
            <div className="Contact">
                <h1>Contact Page</h1>
                <p>lorem</p>
            </div>
        )
    }
}

export default Contact