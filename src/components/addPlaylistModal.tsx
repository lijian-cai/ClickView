import { useEffect, useState } from "react";
import { PlaylistItem } from "../components/playlist-item";

import { Playlist } from '../interfaces/playlist';
import { Col, Row } from "react-bootstrap";

interface AddPlaylistModalProps {
  onClose: () => void;
  onAddPlaylist: (name: string, description: string) => void;
}

export function AddPlaylistModal({ onClose, onAddPlaylist }: AddPlaylistModalProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  
  return (
    <main>
      <Row className='border rounded p-2 mb-2'>
        <Col xs='12' md='3'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={(event) => setName(event.target
            .value)} />
        </Col>
        <Col xs='12' md='3'>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={(event) => setDescription(event.target
            .value)}/>
        </Col>
        <Col xs='12' md='3'>
          <button onClick={() => onAddPlaylist(name, description)}>Add</button>
          <button onClick={onClose}>X</button>
        </Col>
      </Row>
    </main>
  );
}