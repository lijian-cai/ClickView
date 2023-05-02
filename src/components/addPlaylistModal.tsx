import { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";
import { Video, Selection } from "../interfaces/video";

interface AddPlaylistModalProps {
  onClose: () => void;
  onAddPlaylist: (name: string, description: string, selections: Array<Selection["value"]>) => void;
}


export function AddPlaylistModal({ onClose, onAddPlaylist }: AddPlaylistModalProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selections, setSelections] = useState<Array<Selection>>([])
  const [selectedOptions, setSelectedOptions] = useState<Array<Selection["value"]>>([])

  useEffect(() => {
    const fetchVideos = async () => {
      const result = await fetch('./videos.json');
      const _videos = await result.json() as Array<Video>

      const formatedOptions = _videos.map((v) => ({label: v.name, value: v.id}))

      setSelections(formatedOptions);
    }

    fetchVideos()
  }, [])

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const _selectedOptions = event.target.selectedOptions
    const _optionValues = Array.from(event.target.selectedOptions).map((o) => Number(o.value))
    setSelectedOptions(_optionValues);
  }
  
  return (
    <main>
      <Row className='border rounded p-2 mb-2'>
        <Col xs='12' md='2'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={(event) => setName(event.target
            .value)} />
        </Col>
        <Col xs='12' md='3'>
          <label htmlFor="description">Description</label>
          <input type="text" name="description" onChange={(event) => setDescription(event.target
            .value)}/>
        </Col>
        <Col xs='12' md='4'>
          <label htmlFor="videoIds">Videos</label>
          <select name="videoIds" id="videoIds" multiple onChange={(event) => handleSelect(event)}>
            {selections.map((s) => 
              <option key={s.label} value={s.value}>{s.label}</option>
            )}
          </select>
        </Col>
        <Col xs='12' md='3'>
          <button onClick={() => onAddPlaylist(name, description, selectedOptions)}>Add</button>
          <button onClick={onClose}>X</button>
        </Col>
      </Row>
    </main>
  );
}