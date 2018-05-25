import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister(e) {
        e.preventDefault()

        let password = document.getElementById('password').value
        let confirm = document.getElementById('confirm').value
        if(password !== confirm){
            console.log('error on password')
        }else{
            var form = {
                displayName: document.getElementById('displayName').value,
                mail: document.getElementById('mail').value,
                password: password
            }

            fetch('http://localhost:3000/api/signup',{method:'POST', headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                }, body:JSON.stringify(form)})
                .then(res => {
                    if(res.status === 200){
                        res.json().then( data => {
                            console.log(data)
                        })
                    }else{
                        res.json().then( data => {
                            console.log(data.message)
                        }) 
                    }
                })
                .catch(err => console.log(err))
        }
    }    

    render(){
        return(
            <form className="card">
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="DisplayName" id="displayName" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Mail" id="mail" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" id="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" id="confirm" className="form-control" />
                    </div>
                    <button type="submit" onClick={this.handleRegister} className="btn btn-primary btn-block" name="button">Send</button>
                </div>
            </form>
        )
    }
}

export default Form