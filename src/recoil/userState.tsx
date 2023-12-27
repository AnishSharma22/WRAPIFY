import { atom, RecoilState } from "recoil";

interface UserType {
  display_name: string;
  email : string
  images: { url: string }[];
}

interface ArtistType {
  name: string;
  images: { url: string }[];
}

interface TrackType {
  name: string;
  album: {
    images: { url: string }[];
  };
}

// Atom declarations
export const userState: RecoilState<UserType> = atom({
  key: 'userState',
  default: {
    display_name: '',
    email: '',
    images: [{ url: '' }]
  }
});

export const artistState: RecoilState<ArtistType[]> = atom({
  key: 'artistState',
  default: []
});

export const trackState: RecoilState<TrackType[]> = atom({
  key: 'trackState',
  default : []
});

export const boolState: RecoilState<boolean> = atom({
  key: 'boolState',
  default: false
});
