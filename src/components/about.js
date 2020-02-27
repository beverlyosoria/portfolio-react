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

						<h1> ABOUT ME</h1>
						<br />

						<p>
							<br />I enjoy creating.
							<br />I became interested in coding after taking a web design class in college and
							discovered my love for designing and building full-stack web applications.
							<br />
							<br />
							My education in mass communication and experience with software engineering has given me an
							insight into the intersection of mass media and technology. I feel strongly that code is an
							important way to convey information and can be used as a tool to inform, educate, and
							promote social change.
							<br />
							<br />
							<p>
								I want to enable technology for the good and help create solutions for the overlooked
								and underserved communities.
							</p>
						</p>
						<p>
							<h4
								style={{
									marginTop: '60px'
								}}
							>
								My skills include:
							</h4>
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
						<br />
						<br />
					</div>
				</Fade>
			</div>
		);
	}
}

export default About;
