const BackgroundVideo = ({ videoSource, children, blur }: {videoSource:any, children:any, blur:any}) => {
    return (
        <>
      <div className='video-container'>
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay
          loop
          muted
          // ref={video}
          id="video-id"
          className='video'>
          {/* TODO make it accept multiple media types */}
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
      </div>
      {/* <span id="video-bottom"></span> */}
    </>
    )
}
export default BackgroundVideo