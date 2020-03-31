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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Your name" />
                    <textarea></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact;