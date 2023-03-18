import Hls from "hls.js";
import { useRef, useEffect } from "react";
import useMediaScreen from "../services/hooks/useMediaScreen";

interface IProps {
  link: string;
}

const VideoPlayer: React.FunctionComponent<IProps> = ({ link }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMediumScreen = useMediaScreen("md");

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(link);
      hls.attachMedia(videoRef.current);
    } else {
      alert("Sorry, your browser doesn't support this video player.");
    }
  }, [videoRef, link]);

  const onTouchInsidePlayer = () => {
    if (videoRef?.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef?.current?.pause();
    }
  };

  return (
    <video
      id="video"
      ref={videoRef}
      onClick={onTouchInsidePlayer}
      controls
      width={isMediumScreen ? 700 : "100%"}
    ></video>
  );
};

export default VideoPlayer;
