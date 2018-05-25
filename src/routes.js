//Dependencies
import React from 'react'
import {Route, Switch} from 'react-router-dom'



//Components for Routes
import App from './components/App'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import LogIn from './components/Pages/LogIn'
import Register from './components/Pages/Register'


const AppRoutes = () =>
<App>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={LogIn} />
        <Route exact path="/Register" component={Register} />
    </Switch>
</App>


export default AppRoutes