import React from 'react'

const VideoList = ({citytube_videos: video_list}) => {
    return (
        <div className="row">
            {video_list.map((video_item) => (
                <article className="col-lg-4 col-md-6 video-item" key={video_item.nid[0].value}>
                    <header style={{ backgroundImage: "url(" + video_item.field_thumbnail_url[0].value + ")" }}>
                        <div className="date">
                            {(video_item.field_published[0].value).split('T')[0].split('-')[0].slice(-2)}<br />
                            {(video_item.field_published[0].value).split('T')[0].split('-')[1]}<br />
                            {(video_item.field_published[0].value).split('T')[0].split('-')[2]}
                        </div>
                        <div className="header-item-top">
                        </div>
                        <div className="header-item">
                            <h1 onClick={() => alert('click')}>
                                <a href="#" title={video_item.title[0].value}>{video_item.title[0].value}</a>
                            </h1>
                        </div>
                        <div className="header-item-bottom"></div>
                    </header>
                    <div className="content">
                        <div className="channel">
                            <a href="#" title={video_item.field_channel[0].value}>{video_item.field_channel[0].value}</a>
                        </div>
                        <div className="city">
                            <a href="#">{video_item.field_city[0].target_id}</a>
                        </div>
                        <div className="description" dangerouslySetInnerHTML={{__html: video_item.body[0] && video_item.body[0].value}} />
                    </div>
                </article>
            ))}
        </div>
    )
};

export default VideoList