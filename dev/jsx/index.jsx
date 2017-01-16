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
                <h2>HELLO</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>

                <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            </div>
        );
    }
});

var Contact = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Got Questions?</h2>
                <p>Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.</p>
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