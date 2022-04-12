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
        const songIds = await getWeddingPlaylist()
            .then(response => response.json())
            .then(playlist => playlist.tracks.items.map((song: ISpotifyPlaylistResponse) => song.track.uri));

        const songHasBeenPreviouslyAdded = songIds.includes(req.body.song);

        if (!songHasBeenPreviouslyAdded) {
            const result = await addSongToPlaylist(req.body.song).then(response => response.json());

            if (result.error) {
                throw new Error(result.message);
            }

            return res.status(200).json({success: true, message: "Song has been successfully requested."})
        }

        return res.status(500).json({error: true, message: "This song has already been requested."})
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
