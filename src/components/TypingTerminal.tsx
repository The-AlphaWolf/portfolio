"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TerminalLine {
  command: string;
  output: string;
}

const TYPE_SPEED_MS = 45; // per character
const LINE_PAUSE_MS = 500; // after a command finishes typing

/**
 * Small terminal window that "types out" a sequence of commands and prints
 * their output. Purely decorative — the same information exists as plain
 * text elsewhere on the page. Renders everything instantly for users with
 * prefers-reduced-motion.
 */
export default function TypingTerminal({ lines }: { lines: TerminalLine[] }) {
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(0); // fully rendered lines
  const [typed, setTyped] = useState(0); // chars typed of the current command

  useEffect(() => {
    if (reduceMotion || done >= lines.length) return;
    const command = lines[done].command;
    const timer =
      typed < command.length
        ? setTimeout(() => setTyped((c) => c + 1), TYPE_SPEED_MS)
        : setTimeout(() => {
            setDone((d) => d + 1);
            setTyped(0);
          }, LINE_PAUSE_MS);
    return () => clearTimeout(timer);
  }, [done, typed, lines, reduceMotion]);

  // Reduced motion: skip the animation and show everything at once.
  const shown = reduceMotion ? lines.length : done;

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-lg border border-edge bg-surface shadow-[0_0_24px_rgba(0,255,65,0.06)]"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-edge px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-edge" />
        <span className="h-2.5 w-2.5 rounded-full bg-edge" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-dim/60" />
        <span className="ml-2 truncate text-xs text-muted">
          arijit@portfolio: ~/intro
        </span>
      </div>

      {/* Terminal body — minHeight reserves space so typing causes no layout shift */}
      <div
        className="px-4 py-3 text-sm leading-7"
        style={{ minHeight: `${(lines.length * 2 + 1) * 1.75 + 1.5}rem` }}
      >
        {lines.slice(0, shown).map((line) => (
          <div key={line.command}>
            <p className="break-words">
              <span className="text-accent">$ </span>
              {line.command}
            </p>
            <p className="break-words text-muted">{line.output}</p>
          </div>
        ))}
        {shown < lines.length ? (
          <p className="break-words">
            <span className="text-accent">$ </span>
            {lines[shown].command.slice(0, typed)}
            <span className="cursor-blink text-accent">▋</span>
          </p>
        ) : (
          <p>
            <span className="text-accent">$ </span>
            <span className="cursor-blink text-accent">▋</span>
          </p>
        )}
      </div>
    </div>
  );
}
