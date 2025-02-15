import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export interface ItemObjProps {
  image: string;
  name: string;
  duration?: string;
  artist?: string;
  audio?: string;
  id: number;
  banner?: string;
  idPath?: string;
  index?: number;
}

export function SingleItem({ image, name, artist, idPath, id }: ItemObjProps) {
  return (
    <Link to={`${idPath}/${id}`} className="single-item">
      <div className="single-item-div-image-button">
        <div className="single-item-div-image">
          <img
            className="single-item-image"
            src={image}
            alt={`Imagem de ${name}`}
          />
        </div>
        <FontAwesomeIcon className="single-item-icon" icon={faCirclePlay} />
      </div>

      <div className="single-item-texts">
        <div className="single-item-2lines">
          <p className="single-item-title">{name}</p>
        </div>
        <p className="single-item-type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
}
