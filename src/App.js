import React, {Component} from 'react';
import CitytubeVideos from './components/citytube_videos';
const CITYTUBE_VIDEO_POSTS_LIST = process.env.REACT_APP_CITYTUBE_VIDEO_POSTS_LIST;

class App extends Component {

  state = {
    citytube_videos: []
  }

  componentDidMount() {
    fetch(CITYTUBE_VIDEO_POSTS_LIST)
    .then(res => res.json())
    .then((data) => {
      this.setState({ citytube_videos: data })
    })
    .catch(console.log)
  }

  render() {
    return (
        <CitytubeVideos citytube_videos={this.state.citytube_videos} />
    );
  }

}

export default App;
