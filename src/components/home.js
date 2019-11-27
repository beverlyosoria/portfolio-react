import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Grid, Cell } from 'react-mdl';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import avatar from '../../src/assests/img/beverly.png';

class Home extends Component {

	
	render() {
		return (
			<div className="home-grid">	
				<div className="banner-text">
					<img src={avatar} alt="avatar" className="avatar-img" />
					<h1>Beverly Osoria</h1>
						<hr />
						<p>Full Stack Engineer. Skills I am good at here.</p>
						<div className="d-flex justify-content-center">
{/* Navigation */}
 
 <ButtonGroup toggle className="mt-3">
    <ToggleButton className="nav-btn" type="radio" name="radio" defaultChecked value="1">
      <Link style={{ textDecoration: 'none'}}  to="/about">About</Link>
    </ToggleButton>
    <ToggleButton className="nav-btn" type="radio" name="radio" value="2">
      <Link style={{ textDecoration: 'none'}} to="/projects">Projects</Link>
    </ToggleButton>
    <ToggleButton className="nav-btn" type="radio" name="radio" value="3">
      <Link style={{ textDecoration: 'none'}} to="/contact">Contact</Link>
    </ToggleButton>
  </ButtonGroup>
						</div>			
				</div>
				
			</div>

		);
	}
}

export default Home;
