import React from 'react';

const VideoJS = ({data}) => {
    return (
        <div>
            <video src={data} controls>
            </video>
        </div>
    )
}

export default VideoJS;
