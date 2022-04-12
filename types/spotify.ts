type Album = {
    title: string;
    images: {
        url: string;
    }[];
};

export type ISong = {
    artists: string;
    image: string;
    title: string;
    uri: string;
};

export type IArtist = {
    name: string;
};

export type ISpotifySearchResponse = {
    album: Album;
    artists: IArtist[];
    name: string;
    uri: string;
};

export type ISpotifyPlaylistResponse = {
    track: ISong
};