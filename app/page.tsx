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
          width: 10px; height: 20px;
          border-radius: 3px;
          opacity: 0.7;
          animation: fall 2.5s linear infinite;
        }
        @keyframes fall {
          0% { transform: translateY(-40px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
      `}</style>
      <Confetti count={30} />
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
        return (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${left}vw`,
              background: color,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </>
  );
}
