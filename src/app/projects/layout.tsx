// Layout component for the /projects route
// Cite: https://nextjs.org/docs/app/getting-started/layouts-and-pages#creating-a-layout
import React from 'react';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-4 bg-gray-100 shadow">
        <h1 className="text-2xl font-bold">My Projects</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}