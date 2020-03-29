import React, {Component} from 'react'

class Video extends Component {
    render() {
        const video = this.state.video ? (
            <div>Post</div>
        ) : (
            <div>Loading</div>
        )

        return (
            <div>
                {video}
            </div>
        )
    }
}

export default Video