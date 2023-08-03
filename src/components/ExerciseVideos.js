import React from 'react';

const ExerciseVideos = ({exerciseVideos, name}) => {

  if (!exerciseVideos.length) return 'Loading...';

  return (
    <div className="exercise-videos-wrapper container" >
      <h4 className="exercise-videos-heading section-heading">
        Watch <span style={{color:'#6db9df',textTransform:'capitalize'}}>{name}</span> exercise videos
      </h4>
      <div 
        className="exercise-videos-content"
      >
        {exerciseVideos?.slice(0, 6).map((item,index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="norefferer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <h5 className="exercise-video-name">
                {item.video.title}
              </h5>
              <h6 className="exercise-video-channel-name">
                {item.video.channelName}
              </h6>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default ExerciseVideos