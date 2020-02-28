import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Fade from 'react-reveal/Fade';
import { Container, Col, Row } from 'react-bootstrap';

import About from './about';
import Projects from './projects';
import Contact from './contact';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<Fade duration={6000}>
					<div className="home-grid">
						<div className="banner-text">
							<Container>
								<br />
								<hr />
								<Row>
									<Col xs={6} sm={6} md={8}>
										<h1>BEVERLY OSORIA</h1>
										<h3
											style={{
												padding: '0 12vmin 0 12vmin'
											}}
										>
											Hi! I'm a front end focused full stack developer. Passionate about making a
											social impact in the ever-evolving space of technology.
										</h3>
									</Col>
								</Row>

								<hr />
								<br />
								<p>
									<i class="fa fa-map-marker" aria-hidden="true" />
									Austin
									<a
										id="hover-link"
										style={{
											textDecoration: 'none',
											color: '#fff'
										}}
										href="https://github.com/beverlyosoria"
										target="_blank"
									>
										<i class="fa fa-github" aria-hidden="true" />
										Github
									</a>
									<a
										id="hover-link"
										style={{
											textDecoration: 'none',
											color: '#fff'
										}}
										href="https://www.linkedin.com/in/beverlyosoria/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<i class="fa fa-linkedin-square" aria-hidden="true" />
										LinkedIn
									</a>
								</p>
							</Container>
						</div>
					</div>
				</Fade>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<About />
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<Projects />
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<Contact />
				</div>
			);
		}
	}

	render() {
		return (
			<div className="home-grid">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab id="nav-tab">HOME </Tab>

					<Tab id="nav-tab">ABOUT</Tab>

					<Tab id="nav-tab">PROJECTS</Tab>

					<Tab id="nav-tab">CONTACT</Tab>
				</Tabs>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Home;
