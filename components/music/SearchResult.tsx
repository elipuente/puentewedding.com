import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import type { ISong } from "../../types/spotify";

import AlbumImage from "./AlbumImage";
import LoadingSpinner from "../LoadingSpinner";
import Success from "../Success";

interface ISearchResult {
  song: ISong;
}

const requestSong = async (
  spotifyUri: string,
  setError: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setSuccess: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);
  const result = await fetch(`/api/playlist/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      song: spotifyUri,
    }),
  }).then((res) => res.json());

  if (result.success) {
    setSuccess(true);
    setLoading(false);
  } else {
    setError(result.message);
    setLoading(false);
  }
};

const SearchResult: FC<ISearchResult> = ({ song }: ISearchResult) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setSuccess(false);
    setError("");
    setLoading(false);
  }, [song]);

  return (
    <div
      className={
        "bg-gray-200 p-4 rounded-lg text-gray-600 dark:text-gray-100 dark:bg-gray-600 h-full shadow-lg"
      }
    >
      <div className="flex flex-row justify-between items-center gap-4">
        <AlbumImage song={song} />
        <div className="flex flex-col flex-auto">
          <p className="font-bold">{song.title}</p>
          <p>{song.artists}</p>
        </div>
        <button
          className="text-metallic-gold hover:text-yellow-600 transition flex-none"
          onClick={() =>
            requestSong(song.uri, setError, setLoading, setSuccess)
          }
          disabled={loading || success}
        >
          {loading ? (
            <LoadingSpinner color="text-gray-600 dark:text-gray-100" />
          ) : success ? (
            <Success />
          ) : (
            "Request"
          )}
        </button>
      </div>
      {error && <p className="text-red-500 text-center mt-4 italic">{error}</p>}
    </div>
  );
};

export default SearchResult;
