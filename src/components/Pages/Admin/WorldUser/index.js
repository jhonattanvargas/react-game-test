import React, {Component} from 'react'
import AddUser from './AddUser'

class WorldUser extends Component{

    constructor(){
        super()
      this.state = {
          users:[]
      }

      this.getUsers = this.getUsers.bind(this)
    }

    componentWillMount(){
        this.getUsers()
    }

    getUsers(){
        let id = this.props.match.params.id
        fetch(`http://localhost:3000/api/world/${id}/user`,{method:'GET' , headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
            .then(res => res.json())
            .then(data => {
              console.log(data)
              this.setState({users:data.users})
            })
              .catch(err =>{
                  console.log(err)
              })
    }

    render(){

        console.log(this.props.match)
        document.getElementById('title').innerHTML = 'Manage Users for World'
        return(
            <div className="WorldUser">
                <h1>Managed World</h1>
                <div className="container">
                    <div className=" row justify-content-md-center">
                        <div className="col-md-6">
                            <AddUser idWorld={this.props.match.params.id} getUsers={this.getUsers}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorldUser