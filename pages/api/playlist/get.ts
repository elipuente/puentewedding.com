import type { NextApiRequest, NextApiResponse } from "next";

import { getWeddingPlaylist } from "../../../lib/spotify";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let songs;

    try {
        const response = await getWeddingPlaylist();

        ({ tracks: { items: songs }} = await response.json());


    } catch (error) {
        console.error(
            `An error occurred while fetching the playlist: ${error}`
        );

        res.status(500).json({
            error: true,
            message: 'Playlist could not be retrieved from Spotify.',
        });
    }


    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=30");

    return res.status(200).json(songs);
}

export default handler;
