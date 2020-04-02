import React, {Component} from 'react'

class Contact extends Component {

    state = {
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted');
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder="Your name" />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message"></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;