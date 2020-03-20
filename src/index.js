import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Switch>
                <Route path="/home" render={props => <App {...props} />} />
                    <Redirect to="/home" />
                <Redirect from="/" to="/home" />
            </Switch>
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
