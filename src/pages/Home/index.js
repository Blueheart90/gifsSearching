import React, { useState } from 'react';
import { useLocation } from 'wouter';
import Spinner from '../../components/Spiner';
import ListOfGifs from '../../components/ListOfGifs';
import useGifs from '../../hooks/useGifs';

export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [link, setLocation] = useLocation();
  const { loading, gifs } = useGifs();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(`/search/${keyword}`);
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search GIFs"
        />
      </form>
      <h3 className="mb-4 text-3xl font-bold underline">Popular GIFs</h3>
      <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>
    </>
  );
}
