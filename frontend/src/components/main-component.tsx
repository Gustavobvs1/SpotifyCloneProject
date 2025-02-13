import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { ItemList } from "./item-list";

interface MainProps {
  type?: string;
}

export function MainComponent({ type }: MainProps) {
  return (
    <main>
      {type === "artists" || !type ? (
        <ItemList
          title="Artistas"
          items={7}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      {type === "songs" || !type ? (
        <ItemList
          title="Músicas"
          items={14}
          itemsArray={songsArray}
          path="/songs"
          idPath="song"
        />
      ) : (
        <></>
      )}
    </main>
  );
}
