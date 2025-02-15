import {
  faBackwardStep,
  faCirclePause,
  faCirclePlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface PlayerProps {
  duration: string;
  audio: string;
  randomId1: string;
  randomId2: string;
}

export function Player({ duration, randomId1, randomId2, audio }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const audioPlayer = useRef<HTMLAudioElement>();
  const progressBar = useRef<HTMLDivElement>();

  const durationInSeconds = stringInSeconds(duration);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

        progressBar.current.style.setProperty(
          "--_progress",
          `${(audioPlayer.current.currentTime * 100) / durationInSeconds}%`
        );
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  function handlePlayPause() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  }

  function formatTime(timeInSeconds: number) {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(timeInSeconds - Number(minutes) * 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  function stringInSeconds(timeString: string) {
    const newTime = timeString.split(":");
    const minutes = Number(newTime[0]) * 60;
    const seconds = Number(newTime[1]);

    return minutes + seconds;
  }

  return (
    <div className="player">
      <div className="player-controllers">
        <Link to={`/song/${randomId1}`}>
          <FontAwesomeIcon icon={faBackwardStep} className="player-icon" />
        </Link>
        <FontAwesomeIcon
          icon={isPlaying ? faCirclePause : faCirclePlay}
          className="player-icon player-icon-play"
          onClick={handlePlayPause}
        />
        <Link to={`/song/${randomId2}`}>
          <FontAwesomeIcon icon={faForwardStep} className="player-icon" />
        </Link>
      </div>

      <div className="player-progress">
        <p className="player-time">{currentTime}</p>
        <div className="player-bar">
          <div ref={progressBar} className="player-bar-progress"></div>
        </div>
        <p className="player-time">{formatTime(stringInSeconds(duration))}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
}
