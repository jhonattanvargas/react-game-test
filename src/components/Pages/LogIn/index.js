import React, {Component} from 'react'
import Form from './Form'

class LogIn extends Component{

    render(){
        document.getElementById('title').innerHTML = 'LogIn'
        return(
            <div className="LogIn">
                <h1>LogIn</h1>
                <div className="container">
                    <div className=" row justify-content-md-center">
                        <div className="col-md-6">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn