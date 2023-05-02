export interface Video {
  id: number;
  name: string;
  duration: number;
  description: string;
  dateCreated: string;
  thumbnail: string;
}

export interface Selection {
  label: Video["name"],
  value: Video["id"],
}