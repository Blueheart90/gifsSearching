import React from 'react';
import Spinner from '../../components/Spiner';
import ListOfGifs from '../../components/ListOfGifs';
import useGifs from '../../hooks/useGifs';

export default function SearchResults({ params }) {
  const { keyword } = params;
  // Coustom hook
  // returns an object with loading and gifs properties
  const { loading, gifs } = useGifs({ keyword });

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}
