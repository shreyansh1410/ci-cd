import React from "react";

export function Confetti({ count }: { count: number }) {
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
        const style: React.CSSProperties & Record<string, string> = {
          left: `${left}vw`,
          background: color,
          width: `${width}px`,
          height: `${height}px`,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s, 1.5s`,
          // Custom properties for keyframes
          "--rotate": `${rotate}deg`,
          "--sway": `${sway}px`,
        };
        return <div key={i} className="confetti-piece" style={style} />;
      })}
    </>
  );
}
