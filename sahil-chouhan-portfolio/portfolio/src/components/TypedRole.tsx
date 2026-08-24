"use client";

import { useEffect, useState } from "react";

export default function TypedRole({ titles }: { titles: string[] }) {
  const [textIndex, setTextIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const current = titles[textIndex];
    const typingSpeed = deleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charCount < current.length) {
          setCharCount((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (charCount > 0) {
          setCharCount((c) => c - 1);
        } else {
          setDeleting(false);
          setTextIndex((i) => (i + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charCount, deleting, textIndex, titles, reduceMotion]);

  const display = reduceMotion ? titles[0] : titles[textIndex].slice(0, charCount);

  return (
    <span className="text-accent">
      {display}
      <span className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-accent animate-blink h-[0.9em]" />
    </span>
  );
}
