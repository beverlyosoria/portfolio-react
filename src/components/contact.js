import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div className="banner-text">
				<form name="contact" method="post">
					<input type="hidden" name="contact" value="contact" />

					<p>
						<label>
							Your Name: <input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Your Email: <input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							Subject: <input type="subject" name="subject" />
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name="message" />
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		);
	}
}

export default Contact;
