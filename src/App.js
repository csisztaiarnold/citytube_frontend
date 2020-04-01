import React, {Component} from 'react';
import Contact from "./components/Contact";
import MainMenu from "./components/MainMenu";
import Videos from "./components/Videos";
import CityMenu from "./components/CityMenu";

const CITYTUBE_VIDEO_POSTS_LIST = process.env.REACT_APP_CITYTUBE_VIDEO_POSTS_LIST;
const CITYTUBE_CITY_LIST = process.env.REACT_APP_CITYTUBE_CITY_LIST;

class App extends Component {

    state = {
        citytube_videos: [],
        cities: [],
        loading_done: false
    }

    componentDidMount() {
        Promise.all([fetch(CITYTUBE_VIDEO_POSTS_LIST), fetch(CITYTUBE_CITY_LIST)])
            .then(([res1, res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([data1, data2]) => this.setState({
                citytube_videos: data1,
                cities: data2,
                loading_done: true
            }))
            .catch(console.log);
    }

    render() {
        return (
            this.state.loading_done ? (
                <div>
                    <CityMenu cities={this.state.cities}></CityMenu>
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