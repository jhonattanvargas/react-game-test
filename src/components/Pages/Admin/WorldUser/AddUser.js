import React, {Component} from 'react'

class AddUser extends Component{

    constructor(){
        super()

        this.addUser = this.addUser.bind(this)
    }

    addUser(e){
        e.preventDefault()

        let id = this.props.idWorld
        //let user = '5b10462bdaec3339d8f80dc8'

        var form = {
            userId: document.getElementById('userId').value
        }

        fetch(`http://localhost:3000/api/world/${id}/user`,{method:'POST', headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'authorization' : `Bearer ${localStorage.getItem('token')}`
            }, body:JSON.stringify(form)})
            .then(res => {
                if(res.status === 200){
                    res.json().then( data => {
                        console.log(data)
                        this.props.getUsers()
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
                        <input type="text" placeholder="User ID" id="userId" className="form-control" />
                    </div>
                    <button type="submit" onClick={this.addUser} className="btn btn-primary btn-block" name="button">Add</button>
                </div>
            </form>
        )
    }
}

export default AddUser