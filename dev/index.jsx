import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, IndexRoute, IndexLink, Link, hashHistory, Router, Route} from 'react-router';
import HelloWorld from "./HelloWorld.jsx";

var App = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
                <div className="content">
                </div>
            </div>
        )
    }
});

var Project = React.createClass({
    render: function() {
        return (
            <div>
                <img src={this.props.imgURL}/>
            </div>
        );
    }
});
 
ReactDOM.render((
        <Router history={hashHistory||browserHistory}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    ),
    document.getElementById("app")
);  