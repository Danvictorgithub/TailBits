import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
export default function Header() {
  return (
    <header className="h-20 border-b">
      <nav className="container mx-auto flex justify-between items-center h-full">
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <Image src="/tailchro.png" width={50} height={50} alt="" />
            <p className="font-bold text-lg text-cyan-600">tailchro</p>
          </div>
          <div className="flex gap-4">
            <p>Categories</p>
            <div className="flex gap-1 items-center">
              <p>Chro AI</p>
              <Icon icon="mingcute:ai-fill" className="text-cyan-400" />
            </div>
          </div>
        </div>
        <div>
          <button className="flex gap-2 items-center">
            <Icon icon="solar:login-2-bold-duotone" className="text-2xl"></Icon>
            <p>sign in</p>
          </button>
        </div>
      </nav>
    </header>
  );
}
