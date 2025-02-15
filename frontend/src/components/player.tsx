import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { songsArray } from "../assets/database/songs";

interface PlayerProps {
  duration: string;
  songId: number;
}

export function Player({ duration, songId }: PlayerProps) {
  return (
    <div className="player">
      <div className="player-controllers">
        <Link to={`/song/${songId != 1 ? songId - 1 : songId}`}>
          <FontAwesomeIcon icon={faBackwardStep} className="player-icon" />
        </Link>
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="player-icon player-icon-play"
        />
        <Link to={`/song/${songId < songsArray.length ? songId + 1 : songId}`}>
          <FontAwesomeIcon icon={faForwardStep} className="player-icon" />
        </Link>
      </div>
      <div className="player-progress">
        <p className="player-time">00:00</p>
        <div className="player-bar">
          <div className="player-bar-progress"></div>
        </div>
        <p className="player-time">{duration}</p>
      </div>
    </div>
  );
}
