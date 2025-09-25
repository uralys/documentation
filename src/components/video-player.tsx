const VideoPlayer = ({
  videoId,
  timeSec
}: {
  videoId: string;
  timeSec: number;
}) => {
  console.log('Rendering VideoPlayer with', videoId, timeSec);
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="500"
        // src={`https://www.youtube.com/embed/${videoId}?t=${timeSec}`}
        src={`https://youtube.com/embed/${videoId}?start=${timeSec}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
