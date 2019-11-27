import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Grid, Cell } from 'react-mdl';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
// import avatar from '../../src/assests/img/beverly.png';

class Home extends Component {
	render() {
		return (
			<div>	
				<div className="banner-text">
					<h1>Beverly Osoria</h1>
						<hr />
						<p>Full Stack Web Developer. Skills I am good at here.</p>
						<div className="d-flex flex-column">
{/* Navigation */}
 <ButtonGroup toggle className="mt-3">
    <ToggleButton type="radio" name="radio" defaultChecked value="1">
      <Link to="/about">About</Link>
    </ToggleButton>
    <ToggleButton type="radio" name="radio" value="2">
      <Link to="/projects">Projects</Link>
    </ToggleButton>
    <ToggleButton type="radio" name="radio" value="3">
      <Link to="/contact">Contact</Link>
    </ToggleButton>
  </ButtonGroup>
						</div>			
				</div>
			</div>
		);
	}
}

export default Home;
