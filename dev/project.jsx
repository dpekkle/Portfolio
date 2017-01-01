import React from 'react';

var Projects = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Heres my projects</h2>
                <div className="projects">
	                <Project 
	                	title="FantasyMaker" 
	                	image="http://www.coolgames.com/images/logo.png"
	                	play="http://fantasymakergame.com/" 
	                	github="https://github.com/dpekkle/FantasyMaker"
	                	>
	                	A choose your own adventure game creator.
	                	<ul><li>Create pages and customise their appearance.</li>
	                	<li>Import audio, video, images and text</li>
	                	<li>Connect pages together, with support for decision automation.</li></ul>
	                </Project>
	                <Project 
	                	title="InfinityDrive" 
	                	image="http://www.coolgames.com/images/logo.png"
	                	play="https://dpekkle.github.io/infinitydrive/"
	                	github="https://github.com/dpekkle/infinitydrive"
	                	>
	                    An incremental idle game made using the native HTML5 canvas feature.
	                </Project>
	            </div>

            </div>
        );
    }
});

var Project = React.createClass({
	render: function() {
		return (
			<div className="projectStyle" onClick={this.handleClick}>
				<ProjectTitle {...this.props}/>
				<ProjectDesc {...this.props}/>
			</div>
		);
	}
});

var ProjectTitle = React.createClass({
	render: function() {
		return (
			<div className="projectTitle">
				<h1>{this.props.title}</h1>
				<img src={this.props.image}/>
			</div>
		);
	}
});
var ProjectDesc = React.createClass({
	render: function() {
		return (
			<div className="projectDesc">
				<div className="projectIcons">
					<a className="Icon" href={this.props.play} target="_blank">
						<img src="http://image.flaticon.com/icons/png/512/0/375.png" width="40px" height="40px"/>
					</a>
					<a className="Icon" href={this.props.github} target="_blank">
						<img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" width="40px" height="40px"/>
					</a>
				</div>
				<br/>
				{this.props.children}
			</div>
		);
	}
});

export default Projects;