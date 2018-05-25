import React, {Component} from 'react'

import './index.css'

class About extends Component{

    render(){
        document.getElementById('title').innerHTML = 'About'
        return(
            <div className="About">
                <h1>About Page</h1>
                <p>lorem</p>
            </div>
        )
    }
}

export default About