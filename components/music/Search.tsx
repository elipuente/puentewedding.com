import { FC, FormEvent, useState } from "react";
import { ISong } from "../../types/spotify";

import SearchResult from "../music/SearchResult";

const searchSpotify = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const searchValue = (event.currentTarget[0] as HTMLInputElement).value;

  if (!searchValue) {
    return [];
  }

  return fetch(`/api/music?search=${searchValue}`).then((res) => res.json());
};

const Search: FC = () => {
  const [searchResults, setSearchResults] = useState<ISong[]>([]);

  return (
    <>
      <div className="relative mr-3 block w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <form
          onSubmit={async (input) =>
            setSearchResults(await searchSpotify(input))
          }
        >
          <input
            type="text"
            onFocus={(event) => (event.target as HTMLInputElement).select()}
            className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
            placeholder="Request a song..."
          />
          <div className="flex absolute inset-y-0 right-0 items-center pr-3 text-metallic-gold hover:text-yellow-600 transition">
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      {searchResults.length > 1 && (
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {searchResults.map((song, index) => (
            <SearchResult song={song} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
