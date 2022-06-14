import React from 'react';
import Gif from '../Gif';
import './ListOfGifs.css';

export default function ListOfGifs({ gifs }) {
  return (
    <div className=" bg-slate-500 columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4">
      {gifs.map(({ id, title, url }) => (
        <Gif id={id} key={id} title={title} url={url} />
      ))}
    </div>
  );
}
