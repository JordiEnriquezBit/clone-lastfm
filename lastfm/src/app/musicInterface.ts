export interface MusicInterface {
  name1: string;
  duration: string;
  listeners: string;
  mbid: string;
  url: string;
  artist: Artist;
  "@attr": Attr;
  genre: string;
}
interface Artist {
    name2: string;
    mbid: string;
    url: string;
}

interface Attr {
  rank: string;

}

