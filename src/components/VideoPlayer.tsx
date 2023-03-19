import Hls from "hls.js";
import throttle from "lodash.throttle";
import { useRef, useEffect, useCallback, useMemo } from "react";
import ls from "../utils/localStorage";

interface IProps {
  link: string;
  videoId: string;
}

const VideoPlayer: React.FunctionComponent<IProps> = ({ link, videoId }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(link);
      hls.attachMedia(videoRef.current);

      const savedTime = Number(ls.load(`video-time-${videoId}`));
      if (savedTime && videoRef?.current) {
        videoRef.current.currentTime = savedTime;
      }
    } else {
      alert("Sorry, your browser doesn't support this video player.");
    }
  }, [videoRef, link, videoId]);

  useEffect(() => {
    if (!videoRef) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!videoRef.current) return;

      switch (event.code) {
        case "ArrowUp":
          if (videoRef.current.playbackRate >= 2) return;
          videoRef.current.playbackRate += 0.25;
          break;
        case "ArrowDown":
          if (videoRef.current.playbackRate <= 0.25) return;
          videoRef.current.playbackRate -= 0.25;
          break;
        default:
          return;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoRef]);

  const handleTimeUpdate = useCallback(() => {
    if (!videoRef || !videoRef.current) return;

    const seconds = Math.floor(videoRef.current.currentTime);
    ls.save(`video-time-${videoId}`, seconds.toString());
  }, [videoRef, videoId]);

  const throttledTimeUpdate = useMemo(
    () =>
      throttle(() => {
        handleTimeUpdate();
      }, 1000),
    [handleTimeUpdate]
  );

  return (
    <video
      id="video"
      ref={videoRef}
      controls
      width={"100%"}
      onTimeUpdate={throttledTimeUpdate}
    ></video>
  );
};

export default VideoPlayer;
