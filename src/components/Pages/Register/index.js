import React, {Component} from 'react'
import Form from './Form'

class Register extends Component{

    render(){
        document.getElementById('title').innerHTML = 'Register'
        return(
            <div className="Register">
                <h1>Register</h1>
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

export default Register