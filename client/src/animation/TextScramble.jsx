import { useEffect, useRef, useState } from 'react';

function randomChar() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>/?";
  return chars[Math.floor(Math.random() * chars.length)];
}

export default function TextScramble({ children = '', className = '', duration = 1200, fps = 30 }) {
  const [display, setDisplay] = useState(typeof children === 'string' ? children : String(children));
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const text = typeof children === 'string' ? children : String(children);
    const len = text.length;
    const totalFrames = Math.max(1, Math.round((duration / 1000) * fps));
    let frame = 0;

    const tick = () => {
      frame += 1;
      const progress = frame / totalFrames;
      const revealCount = Math.floor(progress * len);
      let out = '';
      for (let i = 0; i < len; i++) {
        if (i < revealCount) out += text[i];
        else if (text[i] === ' ') out += ' ';
        else out += randomChar();
      }
      setDisplay(out);
      if (frame < totalFrames) {
        rafRef.current = window.setTimeout(tick, 1000 / fps);
      } else {
        setDisplay(text);
      }
    };

    // start
    rafRef.current = window.setTimeout(tick, 0);

    return () => {
      if (rafRef.current) window.clearTimeout(rafRef.current);
    };
  }, [children, duration, fps]);

  return (
    <span className={className} aria-hidden={false}>
      {display}
    </span>
  );
}

export function TextScrambleBasic() {
  return (
    <TextScramble className="font-mono text-sm uppercase">Text Scramble</TextScramble>
  );
}
