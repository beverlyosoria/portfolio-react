import React, { Component } from 'react';
import avatar from '../../src/assests/img/beverly.jpg';
import Fade from 'react-reveal/Fade';




class About extends Component {
	render() {
		return (
			<div className="banner-text">
				<Fade duration={3000}>
				<div className="about">
					<img src={avatar} alt="avatar" className="avatar-img" />

					<div
						style={{
							color: '#000'
						}}
					>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur assumenda, laudantium eius
					</div>
					<h1> ABOUT ME</h1>
					<br />
					<p>
					I am a self-motivated, creative, and ambitious full-stack developer with knowledge and proficiency in a
variety of front end and back end languages, frameworks, databases, and best code practices. I’m driven by a desire to support my community using
						technology as a tool to communicate, educate, and promote social change. I want to learn
						constantly and grow infinitely.
					</p>
					<p>
						<h4>My skills include:</h4>
						<p />
						<h4>HTML5 </h4>
						<h4>CSS3</h4>
						<h4>JavaScript</h4>
						<h4>React</h4>
						<h4>Python</h4>
						<h4>Django</h4>
						<h4>Express</h4>
						<h4>Node.js</h4>
						<h4>MySQL</h4>
						<h4>PostgreSQL</h4>
						<h4>MongoDB</h4>
						<h4>Mongoose</h4>
						<h4>Git</h4>
					</p>
				</div>
				</Fade>
			</div>
		);
	}
}

export default About;
