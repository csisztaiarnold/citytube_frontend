import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import VideoList from './components/VideoList';
import Video from "./components/Video";

ReactDOM.render(
  <React.StrictMode>
    <VideoList />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
    <React.StrictMode>
        <Video />
    </React.StrictMode>,
    document.getElementById('video')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
