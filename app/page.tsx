import React from "react";

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

function Confetti({ count }: { count: number }) {
  const colors = [
    "#FFC700",
    "#FF0000",
    "#2E3192",
    "#41BBC7",
    "#7CFC00",
    "#FF69B4",
  ];
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const color = colors[i % colors.length];
        const width = 8 + Math.random() * 8; // 8-16px
        const height = 14 + Math.random() * 14; // 14-28px
        const rotate = Math.floor(Math.random() * 360);
        const duration = 2 + Math.random() * 1.5; // 2-3.5s
        const sway = (Math.random() - 0.5) * 40; // -20 to 20px
        return (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${left}vw`,
              background: color,
              width: `${width}px`,
              height: `${height}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s, 1.5s`,
              // Custom properties for keyframes
              ["--rotate" as any]: `${rotate}deg`,
              ["--sway" as any]: `${sway}px`,
            }}
          />
        );
      })}
    </>
  );
}
