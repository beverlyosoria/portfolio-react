import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{/* Project 1 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'
							}}
						>
							React Project 1
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur quo odio
							quia reprehenderit distinctio qui et officiis illum facilis iusto molestiae dignissimos,
							commodi ea rerum explicabo ut magni quos?
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>GitHub</Button>
							<Button colored>GitHub</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/* Project 2 */}
					<Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: '#fff',
								height: '176px',
								background:
									'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'
							}}
						>
							React Project 2
						</CardTitle>
						<CardText>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur quo odio
							quia reprehenderit distinctio qui et officiis illum facilis iusto molestiae dignissimos,
							commodi ea rerum explicabo ut magni quos?
						</CardText>
						<CardActions border>
							<Button colored>GitHub</Button>
							<Button colored>GitHub</Button>
							<Button colored>GitHub</Button>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>This is Python</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>This is MongoDB</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Python</Tab>
					<Tab>MongoDB</Tab>
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

export default Projects;
