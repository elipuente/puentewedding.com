import type { NextApiRequest, NextApiResponse } from 'next';
import type { IArtist, ISpotifySearchResponse } from '../../../types/spotify';

import { searchSong } from '../../../lib/spotify';

const mapSpotifyResponseToSong = (songs: ISpotifySearchResponse[]) =>
    songs.map((song: ISpotifySearchResponse) => ({
        artists: song.artists.map((artist: IArtist) => artist.name).join(', '),
        image: song.album.images[0].url,
        title: song.name,
        uri: song.uri,
}));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.query.search) {
        res.status(400).json({
            error: true,
            message: 'No search query provided.',
        });
    }

    try {
        const response = await searchSong(req.query.search);

        const { tracks: { items: songs } } = await response.json();

        return res
            .setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=30")
            .status(200)
            .json(mapSpotifyResponseToSong(songs));
    } catch (error) {
        console.error(
            `An error occurred while searching for songs: ${error}`
        );

        res.status(500).json({
            error: true,
            message: 'Songs could not be retrieved from Spotify.',
        });
    }
};

export default handler;