import {
  faBackwardStep,
  faCirclePlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Player() {
  return (
    <div className="player">
      <div className="player-controllers">
        <Link to="">
          <FontAwesomeIcon icon={faBackwardStep} className="player-icon" />
        </Link>
        <FontAwesomeIcon
          icon={faCirclePlay}
          className="player-icon player-icon-play"
        />
        <Link to="">
          <FontAwesomeIcon icon={faForwardStep} className="player-icon" />
        </Link>
      </div>
      <div className="player-progress">
        <p className="player-time">00:00</p>
        <div className="player-bar">
          <div className="player-bar-progress"></div>
        </div>
        <p className="player-time">02:00</p>
      </div>
    </div>
  );
}
