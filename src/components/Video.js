import React, {Component} from 'react';

class Video extends Component {

    state = {
        video: [],
        show: false,
    };

    render() {

        const video_container = this.state.video ? (
            <div>test</div>
        ) : (
            <div/>
        );

        return (
            <div className="video">
                {video_container}
            </div>
        )
    }
}

export default Video;