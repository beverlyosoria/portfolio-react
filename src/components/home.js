import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../../src/assests/img/beverly.png';

class Home extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="home-grid">
					<Cell col={12}>
						<img src={avatar} alt="avatar" className="avatar-img" />
						<div className="banner-text">
							<h1>Full Stack Web Developer</h1>
							<hr />
							<p>Skills I am good at here.</p>
							<div className="social-links">
								{/* Linked In */}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square" aria-hidden="true" />
								</a>
								{/* Github */}
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square" aria-hidden="true" />
								</a>
							</div>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Home;
