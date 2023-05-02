import { Col, Row } from 'react-bootstrap';
import { Playlist } from '../interfaces/playlist';

interface PlaylistItemProps {
  playlist: Playlist;
  onDelete: (id: Playlist["id"]) => void;
}

export function PlaylistItem(props: PlaylistItemProps) {
  const { playlist, onDelete } = props;

  const videoCount = playlist.videoIds.length === 1 ? '1 video' : `${playlist.videoIds.length} videos`;

  return (
    <Row className='border rounded p-2 mb-2'>
      <Col xs='12' md='3'>
        <h2 className='h5'>{playlist.name}</h2>
        <p className='mb-0'>{videoCount}</p>
      </Col>
      <Col xs='12' md='6'>
        <p className='mb-0'>{playlist.description}</p>
      </Col>
      <Col xs='12' md='3'>
        <button onClick={() => onDelete(playlist.id)}>Delete</button>
      </Col>
    </Row>
  )
}