import React, { Component } from 'react';
import { Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Cell } from 'react-mdl';
import movie from '../../src/assests/img/movie.jpg';

class Projects extends Component {
	render() {
		return (
			<div className="projects-grid">
				<Grid className="row">
					{/* Project 1 */}
					<Cell coll={4}>
						<Card shadow={6} style={{ minwidth: '450px' }}>
							<CardTitle
								style={{
									color: '#fff',
									height: '176px',
									backgroundImage: 'url(' + movie + ')',
									backgroundSize: 'cover'
								}}
							/>
							<h5
								style={{
									textAlign: 'left',
									marginLeft: '.8em'
								}}
							>
								Guess That Movie
							</h5>
							<p style={{}}>utilizing JavaScript to guess movie titles based on images. </p>
							<CardText>
								<p>
									A game in which the player is prompted with three images that are symbolic of a
									movie. The user must guess the movie title to move on to the next set of images. The
									player wins when all movie titles are guessed correctly.
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
					</Cell>
					{/* Project 2 */}
					<Cell coll={4}>
						<Card shadow={5} style={{ minWidth: '450' }}>
							<CardTitle
								style={{
									color: '#fff',
									height: '176px',
									background:
										'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'
								}}
							>
								<h5
									style={{
										textAlign: 'left',
										marginLeft: '.8em'
									}}
								>
									Search It
								</h5>
								<p>add, create and update posts and reviews of local businesses </p>
							</CardTitle>
							<CardText>
								<p>
									A place where you can search for deaf-friendly businesses in your area or share your
									consumer experience and insights as deaf, deafblind, and hard of hearing
									individuals, friends/family of the deaf and those with a special interest in
									creating a deaf-friendly world. The aim is to promote deaf-friendliness in your
									community via awareness and feedback.
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
					</Cell>
				</Grid>
				{/* Project 3 */}
				<Grid className="row">
					<Cell coll={4}>
						<Card shadow={5} style={{ minWidth: '450' }}>
							<CardTitle
								style={{
									color: '#fff',
									height: '176px',
									background:
										'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover'
								}}
							>
								<h5
									style={{
										textAlign: 'left',
										marginLeft: '.8em'
									}}
								>
									Happiest Hour
								</h5>
								<p>create group events and invite friends </p>
							</CardTitle>
							<CardText>
								<p>
									UX Designer, Front-end Developer · Happiest Hour Happiest Hour simplifies organizing
									a happy hour with your coworkers, planning a weekend with your friends, or
									coordinating a soccer practice with your teammates all in one place. Through the
									app, the user can suggest a place, set a time and location and share privately with
									a group of choice.
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
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;
