import React from "react";
import ReactDOM from "react-dom";
import {browserHistory, IndexRoute, IndexLink, Link, hashHistory, Router, Route} from 'react-router';
import Projects from "./project.jsx";

require('../SCSS/app.scss');

var App = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><IndexLink to="/" activeClassName="active">About</IndexLink></li>
                    <li><Link to="/projects" activeClassName="active">Projects</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Greetings</h2>
                <p>My name is Danielle Cerisier.</p>

                <p>I do code well.</p>
            </div>
        );
    }
});

var Contact = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Got Questions?</h2>
                <p>You can contact me.</p>
            </div>
        );
    }
});
 
ReactDOM.render((
        <Router history={hashHistory||browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={About}/>
                <Route path="projects" component={Projects}/>
                <Route path="contact" component={Contact}/>
            </Route>
        </Router>
    ),
    document.getElementById("app")
);  