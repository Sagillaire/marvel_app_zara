export interface CharacterCardProps {
  id: number;
  name: string;
  thumbnail: CharacterThumbnail;
}

export interface CharacterThumbnail {
  path: string;
  extension: string;
}
