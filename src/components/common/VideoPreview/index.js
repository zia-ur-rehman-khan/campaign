import React, { useRef, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";

const CommonVideoPreview = ({ src }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <div className="uploaded-video-wrapp c-pointer" onClick={handleVideo}>
      <video
        onEnded={() => {
          setPlayVideo((prev) => !prev);
        }}
        src={
          "https://iball.uk/public/assets/front/video/I_Ball_Logo_Animation_V7.mp4"
        }
        ref={videoRef}
      ></video>
      <button className={playVideo ? "video-button" : ""}>
        {playVideo ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
      </button>
    </div>
  );
};

export default CommonVideoPreview;
