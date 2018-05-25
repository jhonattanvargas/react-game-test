//Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

//Assest
import './index.css'

//Routes
import AppRoutes from './routes'

ReactDOM.render(
        <Router>
            <AppRoutes />
        </Router>
    , document.getElementById('root'))
registerServiceWorker()