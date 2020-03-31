import React from "react";

const handleVideoTitleClick = (e) => {
    console.log('Video title clicked.');
};

const Videos = ({videos}) => {
    const videoList = videos.map(video => {
        return (
            <article className="col-lg-4 col-md-6 video-item" key={video.nid[0].value}
                     video-title={video.title[0].value} channel={video.field_channel[0].value}>
                <header style={{backgroundImage: "url(" + video.field_thumbnail_url[0].value + ")"}}>
                    <div className="date">
                        {(video.field_published[0].value).split('T')[0].split('-')[0].slice(-2)}<br/>
                        {(video.field_published[0].value).split('T')[0].split('-')[1]}<br/>
                        {(video.field_published[0].value).split('T')[0].split('-')[2]}
                    </div>
                    <div className="header-item-top"/>
                    <div className="header-item">
                        <h1 onClick={handleVideoTitleClick}>
                            {video.title[0].value}
                        </h1>
                    </div>
                    <div className="header-item-bottom"/>
                </header>
                <div className="content">
                    <div className="channel">
                        <a href="#"
                           title={video.field_channel[0].value}>{video.field_channel[0].value}</a>
                    </div>
                    <div className="city">
                        <a href="#">{video.field_city[0].target_id}</a>
                    </div>
                    <div className="description"
                         dangerouslySetInnerHTML={{__html: video.body[0] && video.body[0].value}}/>
                </div>
            </article>
        )
    });
    return (
        <div className="video-list">
            {videoList}
        </div>
    )
};

export default Videos;