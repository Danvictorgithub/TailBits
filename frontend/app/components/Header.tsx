import React from "react";

export default function Header() {
  return (
    <header className="h-20 border-b-2">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex gap-4">
          <div>
            <p>TailBits</p>
          </div>
          <div className="flex gap-4">
            <p>Categories</p>
            <p>Bits AI</p>
          </div>
        </div>
        <div>
          <button>sign in</button>
        </div>
      </div>
    </header>
  );
}
