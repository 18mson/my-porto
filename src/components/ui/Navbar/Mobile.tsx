import React from 'react';
import Link from 'next/link';

export default function NavMobile() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
      </ul>
    </nav>
  );

}