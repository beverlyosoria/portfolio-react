import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	render() {
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
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur quo odio quia
						reprehenderit distinctio qui et officiis illum facilis iusto molestiae dignissimos, commodi ea
						rerum explicabo ut magni quos?
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
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur quo odio quia
						reprehenderit distinctio qui et officiis illum facilis iusto molestiae dignissimos, commodi ea
						rerum explicabo ut magni quos?
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
	}
}

export default Projects;
