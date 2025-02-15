import { useState } from "react";
import { ItemObjProps } from "./single-item";
import { SongItem } from "./song-item";

interface SongListProps {
  songsArrayFromArtist: ItemObjProps[];
}

export function SongList({ songsArrayFromArtist }: SongListProps) {
  const [limit, setLimit] = useState(5);

  return (
    <div className="song-list">
      {songsArrayFromArtist
        .filter((_, index) => index < limit)
        .map((song: ItemObjProps, index) => {
          return <SongItem {...song} key={index} index={index} />;
        })}
      <p className="song-list-seemore" onClick={() => setLimit(limit + 5)}>
        Ver mais
      </p>
    </div>
  );
}
