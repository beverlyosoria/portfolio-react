import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Beverly Osoria</h2>
						<img
							src="https://c7.uihere.com/files/874/871/627/pop-art-comics-female-comic-book-beauty-avatar-thumb.jpg"
							alt="avatar"
							style={{ height: '250px' }}
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates consequuntur quo odio
							quia reprehenderit distinctio qui et officiis illum facilis iusto molestiae dignissimos,
							commodi ea rerum explicabo ut magni quos?
						</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
										<i className="fa fa-phone-square" arria-hidden="true" />
										Bryan Cranston
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
										<i className="fa fa-phone-square" arria-hidden="true" />
										Bryan Cranston
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
										<i className="fa fa-phone-square" arria-hidden="true" />
										Bryan Cranston
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Contact;
