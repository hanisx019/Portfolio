import { useEffect, useState, Children, cloneElement } from 'react';

export function TextLoop({ children, interval = 2500, className = '' }) {
  const items = Children.toArray(children);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [items.length, interval]);

  return (
    <span className={className} aria-live="polite">
      {items.map((child, i) => (
        <span
          key={i}
          style={{
            display: i === index ? 'inline' : 'none',
            transition: 'opacity 300ms ease',
            opacity: i === index ? 1 : 0
          }}
        >
          {cloneElement(child, { key: i })}
        </span>
      ))}
    </span>
  );
}

export default TextLoop;
