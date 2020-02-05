import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
				<div className="home-grid">
					{/* Project 1 */}

					<div className="banner-text">
						<br />
						<hr />
						<h1>BEVERLY OSORIA</h1>

						<h3
							style={{
								padding: '0 12vmin 0 12vmin'
							}}
						>
							Hi! I'm a full-stack developer focused on crafting clean & user-friendly experiences.
						</h3>
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
								rel="noopener noreferrer"
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

						<div className="d-flex justify-content-center" />
					</div>
				</div>
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
