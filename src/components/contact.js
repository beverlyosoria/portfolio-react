import React, { Component } from 'react';

const encode = (data) => {
	return Object.keys(data).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
};

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', email: '', message: '' };
	}

	handleSubmit = (e) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', ...this.state })
		})
			.then(() => alert('Success!'))
			.catch((error) => alert(error));

		e.preventDefault();
	};

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
		return (
			<div className="banner-text">
				<h1>CONTACT ME</h1>
				<br />
				<p>
					Contact me by email:&nbsp;
					<a
						id="hover-link"
						style={{
							textDecoration: 'none',
							color: '#e79087'
						}}
						href="mailto:bevosoria@gmail.com"
						target="_blank"
					>
						bevosoria@gmail.com
					</a>
				</p>
				<p>or feel free to send me a message using the form below.</p>
				<br />
				<hr />
				<br />
				<form onSubmit={this.handleSubmit}>
					<p>
						<label>
							Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
						</label>
					</p>
					<p>
						<label>
							Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
						</label>
					</p>
					<p>
						<label id="message">
							Message: <textarea name="message" value={message} onChange={this.handleChange} />
						</label>
					</p>
					<p
						style={{
							paddingLeft: '78px'
						}}
					>
						<button type="submit">Send</button>
					</p>
				</form>
				<hr />
				<br />
				<p>
					<i class="fa fa-map-marker" aria-hidden="true" />
					Austin
					<a
						id="hover-link"
						style={{
							textDecoration: 'none',
							color: '#fff'
						}}
						href="https://github.com/beverlyosoria"
						target="_blank"
					>
						<i class="fa fa-github" aria-hidden="true" />
						Github
					</a>
					<a
						id="hover-link"
						style={{
							textDecoration: 'none',
							color: '#fff'
						}}
						href="https://www.linkedin.com/in/beverlyosoria/"
						target="_blank"
					>
						<i class="fa fa-linkedin-square" aria-hidden="true" />
						LinkedIn
					</a>
				</p>
			</div>
		);
	}
}

export default Contact;
