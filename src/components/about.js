import React, { Component } from 'react';
import avatar from '../../src/assests/img/beverly.png';

class About extends Component {
	render() {
		return (
			<div className="banner-text">
				<img src={avatar} alt="avatar" className="avatar-img" />
				<h1> ABOUT ME</h1>
				<p>
					I am a self-motivated, creative, and ambitious full-stack developer with knowledge and proficiency
					in a variety of technologies. I’m driven by a desire to support my community using technology as a
					tool to communicate, educate, and promote social change. I want to learn constantly and grow
					infinitely.
				</p>
				<p>
					My skills include:
					<br />
					HTML5 | CSS3 | JavaScript | React | Python | Django | Express| Node.js| MySQL PostgreSQL| MongoDB |
					Mongoose | Git
				</p>
			</div>
		);
	}
}

export default About;
