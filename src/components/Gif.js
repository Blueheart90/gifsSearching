import React from 'react';

export default function Gif({ url, id, title }) {
  return (
    <a href={`#${id}`}>
      <img src={url} alt="dog meme" />
      <h3>{title}</h3>
    </a>
  );
}
