import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.handleLogIn = this.handleLogIn.bind(this)
    }

    handleLogIn(e) {
        e.preventDefault()
        var form = {
            mail: document.getElementById('mail').value,
            password: document.getElementById('password').value
        }

        fetch('http://localhost:3000/api/signin',{method:'POST', headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            }, body:JSON.stringify(form)})
            .then(res => {
                if(res.status === 200){
                    res.json().then( data => {
                        console.log(data)
                        localStorage.setItem('token',data.token)
                        window.location.href = '/'
                        //this.props.history.push('/contact')
                    })
                }else{
                    res.json().then( data => {
                        console.log(data.message)
                    }) 
                }
            })
            .catch(err => console.log(err))
    }    

    render(){
        return(
            <form className="card">
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Mail" id="mail" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Password" id="password" className="form-control" />
                    </div>
                    <button type="submit" onClick={this.handleLogIn} className="btn btn-primary btn-block" name="button">Send</button>
                </div>
            </form>
        )
    }
}

export default Form