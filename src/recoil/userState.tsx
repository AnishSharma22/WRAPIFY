import { atom, RecoilState } from "recoil";
import song from "../components/images/sound.mp3";

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
  artists : {
    name : string
  }[]
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

export const boolState: RecoilState<boolean> = atom({
  key: 'boolState',
  default: false
});




export const shortArtistState: RecoilState<ArtistType[]> = atom({
  key: 'shortArtistState',
  default: []
});

export const shortTrackState: RecoilState<TrackType[]> = atom({
  key: 'shortTrackState',
  default : []
});

export const mediumArtistState: RecoilState<ArtistType[]> = atom({
  key: 'mediumArtistState',
  default: []
});

export const mediumTrackState: RecoilState<TrackType[]> = atom({
  key: 'mediumTrackState',
  default : []
});

export const longArtistState: RecoilState<ArtistType[]> = atom({
  key: 'longArtistState',
  default: []
});

export const longTrackState: RecoilState<TrackType[]> = atom({
  key: 'longTrackState',
  default : []
});

export const topGenreState = atom({
  key : 'topGenreState',
  default : []
})

export const loadingState = atom({
  key : 'loadingState',
  default : false
})

export const timeFrameState = atom({
  key : 'timeFrameState',
  default : 'short_term'
})

export const audioState = atom({
  key: 'audioState',
  default: new Audio(song),
});

export const isPlayingState = atom({
  key: 'isPlayingState',
  default: false,
});