import React, {Component} from "react";
import {convertCityIdToCityName} from "./Helpers";

class Videos extends Component {

    handleVideoTitleClick = (e) => {
        this.props.showVideo('5beb5416-2036-494d-aa94-bfc267846ce1');
    };

    render() {
        const videoList = this.props.videos.data.map(video => {
            return (
                <article className="col-lg-4 col-md-6 video-item" key={video.attributes.drupal_internal__nid}>
                    <header style={{backgroundImage: "url(" + video.attributes.field_thumbnail_url + ")"}}>
                        <div className="date">
                            {(video.attributes.field_published).split('T')[0].split('-')[0].slice(-2)}<br/>
                            {(video.attributes.field_published).split('T')[0].split('-')[1]}<br/>
                            {(video.attributes.field_published).split('T')[0].split('-')[2]}
                        </div>
                        <div className="header-item-top"/>
                        <div className="header-item">
                            <h1 onClick={this.handleVideoTitleClick}>
                                {video.attributes.title}
                            </h1>
                        </div>
                        <div className="header-item-bottom"/>
                    </header>
                    <div className="content">
                        <div className="channel">
                            <a href="#"
                               title={video.attributes.field_channel}>{video.attributes.field_channel}</a>
                        </div>
                        <div className="city">
                            <div
                                dangerouslySetInnerHTML={{__html: convertCityIdToCityName(this.props.cities, video.relationships.field_city.data.id)}}/>
                        </div>
                        <div className="description"
                             dangerouslySetInnerHTML={{__html: video.attributes.body && video.attributes.body.value}}/>
                    </div>
                </article>
            )
        });

        return (
            <div className="video-list">
                {videoList}
            </div>
        )
    }

}

export default Videos;