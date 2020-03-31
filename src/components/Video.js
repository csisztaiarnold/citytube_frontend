import React, {Component} from 'react'

class Video extends Component {

    state = {
        video: [],
        show: false,
    }

    render() {
        const video = this.state.video ? (
            <div>test</div>
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

export default Video;