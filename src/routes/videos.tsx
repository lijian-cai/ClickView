import { useEffect, useState } from "react";
import VideoItem from "../components/video-item";
import { Video } from "../interfaces/video";

export function Videos() {
  const [videos, setVideos] = useState<Array<Video>>([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const result = await fetch('./videos.json');
      const _videos = await result.json()
      setVideos(_videos);
    }

    fetchPlaylists()
  }, [])
  
  return (
    <main>
      {videos.map((video) => <VideoItem key={video.id} video={video} />)}
    </main>
  )
}