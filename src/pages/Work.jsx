import React from 'react';
import CardList from '../components/project'; // Adjust the path based on your file structure

export default function Work() {
  return (
    <div className="min-h-screen items-center justify-center bg-gradient-to-r from-black via-purple-500 to-black">
      {/* <h1 className="text-center font-bold text-purple-600 text-2xl">
        Projects
      </h1> */}
      <CardList />
    </div>
  );
}