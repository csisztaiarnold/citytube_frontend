import React, {Component} from 'react'

class Contact extends Component {

    state = {
        name: null,
        email: null,
        message: null,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" required="required" placeholder="Your name" onChange={this.handleChange} />
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" required="required" placeholder="Your email" onChange={this.handleChange} />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" required="required" onChange={this.handleChange}></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;