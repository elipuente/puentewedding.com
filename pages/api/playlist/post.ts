import type { NextApiRequest, NextApiResponse } from 'next';
import type { ISpotifyPlaylistResponse } from '../../../types/spotify';

import { addSongToPlaylist, getWeddingPlaylist } from '../../../lib/spotify';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']).status(405).end('Method not allowed');
    }

    if (!req.body.song) {
        res.status(400).json({
            error: true,
            message: 'No song provided.',
        });
    }

    try {
        const weddingPlaylistResponse = await getWeddingPlaylist();
        const { tracks: { items } } = await weddingPlaylistResponse.json();
        const songIds = items.map((song: ISpotifyPlaylistResponse) => song.track.uri);

        const songHasBeenPreviouslyAdded = songIds.includes(req.body.song);

        if (!songHasBeenPreviouslyAdded) {
            const addSongToPlaylistResponse = await addSongToPlaylist(req.body.song);
            const addSongToPlaylistData = await addSongToPlaylistResponse.json();

            if (addSongToPlaylistData.error) {
                throw new Error(addSongToPlaylistData.message);
            }

            return res.status(200).json({success: true, message: "Song has been successfully requested."})
        }

        return res.status(409).json({error: true, message: "This song has already been requested."})
    } catch (error) {
        console.error(
            `An error occurred while adding the song to the playlist: ${error}`
        );

        res.status(500).json({
            error: true,
            message: 'Song could not be requested at this time. Please try again later.',
        });
    }
};

export default handler;
