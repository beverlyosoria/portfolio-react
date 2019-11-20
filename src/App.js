import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div className to="demo-big-content">
    <Layout>
        <Header title to="Title" scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title to="Title">
            <Navigation>
				<Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className to="page-content" />
			<Main/>
        </Content>
    </Layout>
</div>
		);
	}
}

export default App;
