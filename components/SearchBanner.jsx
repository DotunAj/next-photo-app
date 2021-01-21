import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "../assets/svg/Search";

const SearchBanner = ({ showSearch, loading, photos, search }) => {
  const router = useRouter();
  const [qSearch, setQsearch] = useState("");
  function searchPhoto(e) {
    if (e.keyCode == 13) {
      router.push(`/search?query=${qSearch}`);
    }
  }

  return (
    <div className='search-banner'>
      <div className='container'>
        {!showSearch && (
          <div className='search-banner__result'>
            <h1>
              {loading
                ? "Searching for"
                : photos.length
                ? "Result of"
                : "No Result found for"}{" "}
              <span>"{search}"</span>
            </h1>
            <Link href='/'>
              <a href=''>Go Back</a>
            </Link>
          </div>
        )}

        {showSearch && (
          <div className='input-container'>
            <span className='search'>
              <SearchIcon />
            </span>
            <input
              type='search'
              placeholder='Search for photos'
              onChange={(e) => setQsearch(e.target.value)}
              onKeyDown={searchPhoto}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBanner;
