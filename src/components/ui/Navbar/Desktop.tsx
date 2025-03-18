import React from 'react';
import Link from 'next/link';

export default function NavDesktop() {
  return (
    <nav className="container mx-auto h-20 justify-center items-center flex">
      <ul className="flex space-x-10">
        <li><Link className="text-white hover:bg-blue-200 py-5 px-7 rounded-lg" href="/">Home</Link></li>
        <li><Link className="text-white hover:bg-blue-200 py-5 px-7 rounded-lg" href="/projects">About Me</Link></li>
        <li><Link className="text-white hover:bg-blue-200 py-5 px-7 rounded-lg" href="/explore">Explore</Link></li>
      </ul>
    </nav>
  );

}