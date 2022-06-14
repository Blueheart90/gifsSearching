import React from 'react';
import { Link } from 'wouter';
export default function Gif({ url, id, title }) {
  return (
    <Link href={`/gif/${id}`}>
      <div className="relative mb-4 ">
        <img loading="lazy" src={url} alt="dog meme" className="w-full" />
        <h2 className="absolute bottom-0 left-0 px-4 text-base text-white bg-black ">
          {title}
        </h2>
      </div>
    </Link>
  );
}
