import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
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

						<h2>FULL-STACK DEVELOPER</h2>
						<hr />
						<br />
						<p>
							<i class="fa fa-map-marker" aria-hidden="true" />
							Austin
							<i class="fa fa-github" aria-hidden="true" />
							Github
							<i class="fa fa-linkedin-square" aria-hidden="true" />
							LinkedIn
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
