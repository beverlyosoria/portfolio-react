import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Navigation, Drawer, Content } from 'react-mdl';

import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className to="demo-big-content">
				<Layout>
					<Content>
						<div className to="page-content" />
						<Main />
					</Content>
				</Layout>
			</div>
		);
	}
}

export default App;
