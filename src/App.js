import React, {Component} from 'react';
import Contact from "./components/Contact";
import MainMenu from "./components/MainMenu";
import Videos from "./components/Videos";
import CityMenu from "./components/CityMenu";
import Video from "./components/Video";

const CITYTUBE_VIDEO_POSTS_LIST = process.env.REACT_APP_CITYTUBE_VIDEO_POSTS_LIST;
const CITYTUBE_CITY_LIST = process.env.REACT_APP_CITYTUBE_CITY_LIST;
const CITYTUBE_VIDEO = process.env.REACT_APP_CITYTUBE_VIDEO;

class App extends Component {

    state = {
        citytube_videos: [],
        cities: [],
        video_node: [],
        list_loading_done: false,
    };

    componentDidMount() {
        Promise.all([fetch(CITYTUBE_VIDEO_POSTS_LIST), fetch(CITYTUBE_CITY_LIST)])
            .then(([res1, res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([data1, data2]) => this.setState({
                citytube_videos: data1,
                cities: data2,
                list_loading_done: true
            }))
            .catch(console.log);
    };

    showVideo = (video_id) => {
        fetch(CITYTUBE_VIDEO + '/5beb5416-2036-494d-aa94-bfc267846ce1')
            .then(res => res.json())
            .then((data) =>
                this.setState({video_node: data})
            )
            .catch(console.log);
    };

    render() {
        return (
            this.state.list_loading_done ? (
                <div>
                    <CityMenu cities={this.state.cities}></CityMenu>
                    <MainMenu></MainMenu>
                    <Videos videos={this.state.citytube_videos} cities={this.state.cities}
                            showVideo={this.showVideo}></Videos>
                    <Contact></Contact>
                    <Video video={this.state.video_node}></Video>
                </div>
            ) : (
                <div>Loading</div>
            )
        )
    }
}

export default App;