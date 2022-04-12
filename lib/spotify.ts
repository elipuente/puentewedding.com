const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const wedding_playlist = process.env.WEDDING_PLAYLIST_ID;

const basic_auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/playlists';
const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search';
const ADD_SONG_ENDPOINT = `${PLAYLIST_ENDPOINT}/${wedding_playlist}/tracks`;

const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic_auth}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=refresh_token&refresh_token=${refresh_token}`
    });

    return response.json();
};

export const getWeddingPlaylist = async () => {
    const { access_token } = await getAccessToken();

    return fetch(`${PLAYLIST_ENDPOINT}/${wedding_playlist}`, {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });
};

export const searchSong = async (query: string | string[]) => {
    const { access_token } = await getAccessToken();

    return fetch(`${SEARCH_ENDPOINT}?q=${query}&type=track&limit=12&market=US`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
};

export const addSongToPlaylist = async (songUri: string) => {
    const { access_token } = await getAccessToken();

    return fetch(`${ADD_SONG_ENDPOINT}?uris=${songUri}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access_token}`
        },
    });
};
