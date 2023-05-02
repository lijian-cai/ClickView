import { useEffect, useState } from "react";
import { PlaylistItem } from "../components/playlist-item";

import { Playlist } from '../interfaces/playlist';
import { AddPlaylistModal } from "../components/addPlaylistModal";

export function Playlists() {
  const [playlists, setPlaylists] = useState<Array<Playlist>>([]);
  const [showAddPlaylistModal, setShowAddPlaylistModal] = useState(false)

  useEffect(() => {
    const fetchPlaylists = async () => {
      const result = await fetch('./playlists.json');
      const _playlists = await result.json()
      setPlaylists(_playlists);
    }

    fetchPlaylists()
  }, [])

  const handleClose = () => setShowAddPlaylistModal(false)
  
  const handleAddPlaylist = (name: string, description: string) => {
    setPlaylists([...playlists, {
      "name": name,
      "description": description,
      "id": playlists.length ? playlists[playlists.length-1].id + 1 : 1,
      "videoIds": [],
      "dateCreated": (new Date()).toString()
    }])
    handleClose();
  }

  const handleDelete = (id: Playlist["id"]) => {
    const filteredPlaylists = playlists.filter((p) => p.id !== id)
    setPlaylists(filteredPlaylists)
  }

  return (
    <main>
      {playlists.map((playlist) => <PlaylistItem key={playlist.id} playlist={playlist} onDelete={handleDelete} />)}
      <button onClick={() => setShowAddPlaylistModal(true)}>Add Playlist</button>
      {showAddPlaylistModal && <AddPlaylistModal onAddPlaylist={handleAddPlaylist} onClose={handleClose} />}
    </main>
  );
}