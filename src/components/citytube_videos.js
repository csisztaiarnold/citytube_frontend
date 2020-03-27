import React from 'react'

const CitytubeVideos = ({citytube_videos}) => {
    return (
        <div className="row">
            {citytube_videos.map((citytube_video) => (
                <article className="col-lg-4 col-md-6 video-item" key={citytube_video.nid[0].value}>
                    <header style={{ backgroundImage: "url(" + citytube_video.field_thumbnail_url[0].value + ")" }}>
                        <div className="date">
                            {(citytube_video.field_published[0].value).split('T')[0].split('-')[0].slice(-2)}<br />
                            {(citytube_video.field_published[0].value).split('T')[0].split('-')[1]}<br />
                            {(citytube_video.field_published[0].value).split('T')[0].split('-')[2]}
                        </div>
                        <div className="header-item-top">
                        </div>
                        <div className="header-item">
                            <h1>
                                <a href="#" title={citytube_video.title[0].value}>{citytube_video.title[0].value}</a>
                            </h1>
                        </div>
                        <div className="header-item-bottom"></div>
                    </header>
                    <div className="content">
                        <div className="channel">
                            <a href="#" title={citytube_video.field_channel[0].value}>{citytube_video.field_channel[0].value}</a>
                        </div>
                        <div className="city">
                            <a href="#">{citytube_video.field_city[0].target_id}</a>
                        </div>
                        <div className="description" dangerouslySetInnerHTML={{__html: citytube_video.body[0] && citytube_video.body[0].value}} />
                    </div>
                </article>
            ))}
        </div>
    )
};

export default CitytubeVideos