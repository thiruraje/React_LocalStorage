import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import RegisterForm from './RegisterPage.js';
import Home from "./Home.js";
import Login from './LoginPage.js'
import history from './history.js';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={RegisterForm} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/login" exact component={Login}/>
                </Switch>
            </Router>
        )
    }
}