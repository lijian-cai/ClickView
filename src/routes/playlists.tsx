import { useEffect, useState } from "react";
import { PlaylistItem } from "../components/playlist-item";

import { Playlist } from '../interfaces/playlist';

export function Playlists() {
  const [playlists, setPlaylists] = useState<Array<Playlist>>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const result = await fetch('./playlists.json');
      const _playlists = await result.json()
      setPlaylists(_playlists);
    }

    fetchPlaylists()
  }, [])

  return (
    <main>
      {playlists.map((playlist) => <PlaylistItem key={playlist.id} playlist={playlist} />)}
    </main>
  );
}