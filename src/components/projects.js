import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
	render() {
		return (
			<div className="projects-grid">
				{/* Project 1 */}
				<Card shadow={5} style={{ minWidth: '450', margin: '25px' }}>
					<CardTitle
						style={{
							color: '#fff',
							height: '176px',
							background:
								'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'
						}}
					>
						Guess That Movie
					</CardTitle>
					<CardText>
						<p>
							<h5>utilizing JavaScript to guess movie titles based on images. </h5>
							A game in which the player is prompted with three images that are symbolic of a movie. The
							user must guess the movie title to move on to the next set of images. The player wins when
							all movie titles are guessed correctly.
						</p>
					</CardText>
					<CardActions border>
						<Button colored>Guess That Movie</Button>
						<Button colored>Code</Button>
					</CardActions>
					<CardMenu style={{ color: '#fff' }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
				{/* Project 2 */}
				<Card shadow={5} style={{ minWidth: '450', margin: '25px' }}>
					<CardTitle
						style={{
							color: '#fff',
							height: '176px',
							background:
								'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'
						}}
					>
						Search It
					</CardTitle>
					<CardText>
						<p>
							add, create and update posts and reviews of local businesses A place where you can search
							for deaf-friendly businesses in your area or share your consumer experience and insights as
							deaf, deafblind, and hard of hearing individuals, friends/family of the deaf and those with
							a special interest in creating a deaf-friendly world. The aim is to promote
							deaf-friendliness in your community via awareness and feedback.
						</p>
					</CardText>
					<CardActions border>
						<Button colored>Search It</Button>
						<Button colored>GitHub</Button>
					</CardActions>
					<CardMenu style={{ color: '#fff' }}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
				{/* Project 3 */}
				<Card shadow={5} style={{ minWidth: '450', margin: '25px' }}>
					<CardTitle
						style={{
							color: '#fff',
							height: '176px',
							background:
								'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'
						}}
					>
						Happiest Hour
					</CardTitle>
					<CardText>
						<p>
							create group events and invite friends UX Designer, Front-end Developer · Happiest Hour
							Happiest Hour simplifies organizing a happy hour with your coworkers, planning a weekend
							with your friends, or coordinating a soccer practice with your teammates all in one place.
							Through the app, the user can suggest a place, set a time and location and share privately
							with a group of choice.
						</p>
					</CardText>
					<CardActions border>
						<Button colored>Happiest Hour</Button>
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
