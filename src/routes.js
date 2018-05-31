//Dependencies
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { SocketProvider } from 'socket.io-react'
import io from 'socket.io-client'

//Components for Routes
import App from './components/App'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import LogIn from './components/Pages/LogIn'
import Register from './components/Pages/Register'
import Admin from './components/Pages/Admin'
import WorldUser from './components/Pages/Admin/WorldUser'


const socket = io.connect('http://localhost:3000',{query:'token='+localStorage.getItem('token')});
socket.on('message', msg => console.log(msg));

const AppRoutes = () =>

<SocketProvider socket={socket}>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Login" component={LogIn} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Admin" component={Admin} />
            <Route exact path="/WorldUser/:id" component={WorldUser} />
        </Switch>
    </App>
</SocketProvider>

export default AppRoutes