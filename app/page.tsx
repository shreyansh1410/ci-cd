import React from "react";
import { Confetti } from "./Confetti";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      <h1 className="text-5xl sm:text-7xl font-bold text-pink-500 mb-8 z-10">
        Happy Birthday
      </h1>
      <div className="confetti" aria-hidden="true" />
      <style>{`
        .confetti {
          pointer-events: none;
          position: absolute;
          top: 0; left: 0; width: 100vw; height: 100vh;
          z-index: 1;
        }
        .confetti-piece {
          position: absolute;
          border-radius: 3px;
          opacity: 0.8;
          animation: fall 2.5s linear infinite, sway 2s ease-in-out infinite alternate;
        }
        @keyframes fall {
          0% { transform: translateY(-40px) rotate(var(--rotate, 0deg)); }
          100% { transform: translateY(100vh) rotate(calc(var(--rotate, 0deg) + 360deg)); }
        }
        @keyframes sway {
          0% { margin-left: 0; }
          100% { margin-left: var(--sway, 0px); }
        }
      `}</style>
      <Confetti count={36} />
    </div>
  );
}
