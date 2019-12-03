import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import avatar from '../../src/assests/img/beverly.png';


// 	render() {
// 		return (
// 			<div className="home-grid">	
// 				<div className="banner-text">
// 					<img src={avatar} alt="avatar" className="avatar-img" />
// 					<h1>Beverly Osoria</h1>
// 						<hr />
// 						<p>Full Stack Engineer. Skills I am good at here.</p>
// 						<div className="d-flex justify-content-center">
// {/* Navigation */}
 
//  <ButtonGroup toggle className="mt-3">
//     <ToggleButton className="nav-btn" type="radio" name="radio" defaultChecked value="1">
//       <Link style={{ textDecoration: 'none'}}  to="/about">About</Link>
//     </ToggleButton>
//     <ToggleButton className="nav-btn" type="radio" name="radio" value="2">
//       <Link style={{ textDecoration: 'none'}} to="/projects">Projects</Link>
//     </ToggleButton>
//     <ToggleButton className="nav-btn" type="radio" name="radio" value="3">
//       <Link style={{ textDecoration: 'none'}} to="/contact">Contact</Link>
//     </ToggleButton>
//   </ButtonGroup>
// 						</div>			
// 				</div>
				
// 			</div>

// 		);
// 	}
// }

// export default Home;

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories() {
		if (this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{/* Project 1 */}
					<div className="home-grid">	
				<div className="banner-text">
 					<img src={avatar} alt="avatar" className="avatar-img" />
 					<h1>Beverly Osoria</h1>
 						<hr />
 						<p>Full Stack Engineer. Skills I am good at here.</p>
 						<div className="d-flex justify-content-center"></div>
				</div>
				</div>
				</div>
			);
		} else if (this.state.activeTab === 1) {
			return (
				<div>
					<h1>About</h1>
				</div>
			);
		} else if (this.state.activeTab === 2) {
			return (
				<div>
					<h1>Projects</h1>
				</div>
			);
		} else if (this.state.activeTab === 3) {
			return (
				<div>
					<h1>Contact</h1>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="category-tabs">
				
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
				{/* <ToggleButton className="nav-btn" type="radio" name="radio" defaultChecked value="1"> */}
					<Tab>About</Tab>
						{/* </ToggleButton> */}
						{/* <ToggleButton className="nav-btn" type="radio" name="radio" value="2"> */}
					<Tab>Projects</Tab>
					{/* </ToggleButton>
					<ToggleButton className="nav-btn" type="radio" name="radio" value="3"> */}
					<Tab>Contact</Tab>
					{/* </ToggleButton> */}
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
