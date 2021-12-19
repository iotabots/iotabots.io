import React from 'react'

interface BackgroundVideoProps {
  videoSource: string
  blur: number
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = (props) => {
  const { videoSource, children, blur } = props
  return (
    <div className='video-container'>
      <video
        style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
        autoPlay
        loop
        muted
        playsInline
        id='video-id'
        className='video'
      >
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  )
}
export default BackgroundVideo
