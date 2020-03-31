import React, {Component} from 'react';
import Contact from "./components/Contact";
import MainMenu from "./components/MainMenu";
import Videos from "./components/Videos";

const CITYTUBE_VIDEO_POSTS_LIST = process.env.REACT_APP_CITYTUBE_VIDEO_POSTS_LIST;

class App extends Component {

    state = {
        citytube_videos: [],
        loading_done: false
    }

    componentDidMount() {
        fetch(CITYTUBE_VIDEO_POSTS_LIST)
            .then(res => res.json())
            .then((data) => {
                this.setState({citytube_videos: data});
                this.setState({loading_done: true});
            })
            .catch(console.log)
    }

    render() {
        return (
            this.state.loading_done ? (
                <div>
                    <MainMenu></MainMenu>
                    <Videos videos={this.state.citytube_videos}></Videos>
                    <Contact></Contact>
                </div>
            ) : (
                <div>Loading</div>
            )
        )
    }
}

export default App;