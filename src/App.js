import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Content } from 'react-mdl';

import Main from './components/main';
import Footer from './components/footer';

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
				<Footer />
			</div>
		);
	}
}

export default App;
