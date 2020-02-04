import React, { Component } from 'react';

import { Grid, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Cell } from 'react-mdl';
import movie from '../../src/assests/img/movie.jpg';
import searchit from '../../src/assests/img/searchit.jpg';
import happiest from '../../src/assests/img/happiest.jpg';
import deafinitely from '../../src/assests/img/deafinitely.jpg';

class Projects extends Component {
	render() {
		return (
			<div className="projects-grid">
				<Grid className="row">
					{/* Project 1 */}
					<Cell coll={4}>
						<Card shadow={5} style={{ minwidth: '450' }}>
							<CardTitle
								style={{
									color: '#fff',
									height: '176px',
									backgroundImage: 'url(' + movie + ')',
									backgroundSize: 'cover'
								}}
							/>
							<h5>GUESS THAT MOVIE</h5>

							<p
								style={{
									textAlign: 'left',
									marginLeft: '1em'
								}}
							>
								utilizing JavaScript to guess movie titles based on images.{' '}
							</p>
							<CardText>
								<p>
									A game in which the player is prompted with three images that are symbolic of a
									movie. The user must guess the movie title to move on to the next set of images. The
									player wins when all movie titles are guessed correctly.
								</p>
							</CardText>
							<CardActions border>
								<Button>
									<a
										style={{
											textDecoration: 'none',
											color: '#e79087'
										}}
										href="http://moviegame.surge.sh/"
										target="_blank"
									>
										Guess That Movie
									</a>
								</Button>
								<Button>
									<a
										style={{
											textDecoration: 'none',
											color: '#e79087'
										}}
										href="https://github.com/beverlyosoria/Guess-That-Movie"
										target="_blank"
									>
										Code
									</a>
								</Button>
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
									backgroundImage: 'url(' + searchit + ')',
									backgroundSize: 'cover'
								}}
							/>
							<h5>SEARCH IT</h5>
							<p
								style={{
									textAlign: 'left',
									marginLeft: '1em'
								}}
							>
								a full-stack web application with Google authentication using Mongoose to add, create,
								update, and delete posts and reviews of local businesses based on the criteria of
								deaf-friendliness. The backend, built using Node, Express, and Mongo to create a
								well-developed RESTful API.
							</p>

							<CardText>
								<p>
									A place where you can search for deaf-friendly businesses in your area or share your
									consumer experience as deaf, deafblind, and hard of hearing individuals. The aim is
									to promote deaf-friendliness in your community via awareness and feedback.
								</p>
							</CardText>
							<CardActions border>
								<Button colored>
									<a
										style={{
											textDecoration: 'none',
											color: '#e79087'
										}}
										href="https://deaf-friendly.herokuapp.com"
										target="_blank"
									>
										Search It
									</a>
								</Button>

								<Button colored>
									<a
										style={{
											textDecoration: 'none',
											color: '#e79087'
										}}
										href="https://github.com/beverlyosoria/deaf-friendly"
										target="_blank"
									>
										Code{' '}
									</a>
								</Button>
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
									backgroundImage: 'url(' + happiest + ')',
									backgroundSize: 'cover'
								}}
							/>

							<h5>HAPPIEST HOUR</h5>

							<p
								style={{
									textAlign: 'left',
									marginLeft: '1em'
								}}
							>
								A collaborative project as Front-end Developer. A full-stack web application employing
								Python and Django to create group events and invite friends while Postgres was used to
								create a backend that stores users data.
							</p>

							<CardText>
								<p>
									Happiest Hour Happiest Hour simplifies organizing a happy hour with your coworkers,
									planning a weekend with your friends, or coordinating a soccer practice with your
									teammates all in one place. Through the app, the user can suggest a place, set a
									time and location and share privately with a group of choice.
								</p>
							</CardText>
							<CardActions border>
								{/* <Button colored>Happiest Hour</Button> */}
								<Button colored>
									<a
										style={{
											textDecoration: 'none',
											color: '#e79087'
										}}
										href="https://github.com/beverlyosoria/happiest-hour"
										target="_blank"
									>
										Code{' '}
									</a>
								</Button>
							</CardActions>
							<CardMenu style={{ color: '#fff' }}>
								<IconButton name="share" />
							</CardMenu>
						</Card>
					</Cell>

					{/* Project 4 */}

					<Cell coll={4}>
						<Card shadow={5} style={{ minWidth: '450' }}>
							<CardTitle
								style={{
									color: '#fff',
									height: '176px',
									backgroundImage: 'url(' + deafinitely + ')',
									backgroundSize: 'cover'
								}}
							/>
							<h5>DEAFINITELY FRIENDLY</h5>

							<p
								style={{
									textAlign: 'left',
									marginLeft: '1em'
								}}
							>
								a full-stack web application working with React and a third party API to search for
								local businesses and post reviews. User’s data is stored on a backend created using
								Node, Express, and MongoDB. Includes user authentication with JWT.
							</p>

							<CardText>
								<p>
									A reconstructed version of Search It. Rate and post reviews for a local business
									based on the criteria of deaf friendliness.
								</p>
							</CardText>
							<CardActions border>
								<Button>
									<a
										style={{
											textDecoration: 'none',
											color: '#e79087'
										}}
										href="https://deafinitely-friendly.herokuapp.com/"
										target="_blank"
									>
										Deafinitely Friendly
									</a>
								</Button>
								<Button>
									<a
										style={{
											textDecoration: 'none',
											color: '#e79087'
										}}
										href="https://github.com/beverlyosoria/deafinitely-friendly"
										target="_blank"
									>
										Code{' '}
									</a>
								</Button>
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
