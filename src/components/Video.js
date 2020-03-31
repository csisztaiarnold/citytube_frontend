import React, {Component} from 'react'

class Video extends Component {

    state = {
        video: [],
        show: false,
        poop: 'test'
    }

    render() {
        const video = this.state.video ? (
            <div>{ this.state.poop }</div>
        ) : (
            <div />
        )

        return (
            <div>
                {video}
            </div>
        )
    }
}

export default Video