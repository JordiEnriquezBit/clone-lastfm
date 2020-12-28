export interface MusicInterface {
  name: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  artist: Artist;
  "@attr": Attr;
  genre: string;
}
interface Artist {
    name: string;
    mbid: string;
    url: string;
}

interface Attr {
  rank: string;

}

