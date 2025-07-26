"use client";
import React from "react";

interface TooltipBubbleProps {
  text: string;
  children: React.ReactNode;
}

export default function TooltipBubble({ text, children }: TooltipBubbleProps) {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-20">
        <div className="relative px-4 py-2 text-sm text-white bg-[#292b2c] rounded-lg shadow-lg max-w-xs">
          <span className="block">{text}</span>
          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-4 h-4 bg-[#292b2c] rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
