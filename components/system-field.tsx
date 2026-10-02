"use client";

import { useSyncExternalStore, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, type MotionValue } from "framer-motion";

const NODES = [
  { x: 12, y: 24 },
  { x: 34, y: 46 },
  { x: 56, y: 18 },
  { x: 78, y: 40 },
  { x: 88, y: 72 },
  { x: 52, y: 80 },
  { x: 22, y: 70 },
];

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [5, 6],
  [6, 0],
  [2, 5],
];

function subscribe(query: string, onChange: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => subscribe("(prefers-reduced-motion: reduce)", onChange),
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
}

function useFinePointer() {
  return useSyncExternalStore(
    (onChange) => subscribe("(hover: hover) and (pointer: fine)", onChange),
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    () => false,
  );
}

export function useCanTrackPointer() {
  const fine = useFinePointer();
  const reduce = usePrefersReducedMotion();
  return fine && !reduce;
}

export function usePointerShift(enabled: boolean) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (!enabled) return;
    const box = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - box.left) / box.width - 0.5;
    const py = (event.clientY - box.top) / box.height - 0.5;
    x.set(px * 14);
    y.set(py * 10);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return { x, y, onPointerMove, onPointerLeave };
}

export function SystemField({
  className = "",
  variant = "light",
  active = -1,
  shiftX,
  shiftY,
  sparse = false,
}: {
  className?: string;
  variant?: "light" | "dark";
  active?: number;
  shiftX?: MotionValue<number>;
  shiftY?: MotionValue<number>;
  sparse?: boolean;
}) {
  const nodes = sparse ? NODES.slice(0, 3) : NODES;
  const edges = sparse ? EDGES.slice(0, 2) : EDGES;
  const stroke = variant === "dark" ? "rgba(168, 196, 232, 0.45)" : "rgba(30, 75, 122, 0.38)";
  const nodeFill = variant === "dark" ? "#101114" : "#f6f5f2";

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ x: shiftX, y: shiftY }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {edges.map(([from, to]) => {
          const a = nodes[from];
          const b = nodes[to];
          if (!a || !b) return null;
          const lit = active === from || active === to;
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className="system-trace"
              stroke={lit ? "#1a6b66" : stroke}
              strokeWidth={lit ? 0.45 : 0.28}
            />
          );
        })}
        {nodes.map((node, index) => {
          const lit = active === index;
          return (
            <g key={`${node.x}-${node.y}`}>
              <circle
                cx={node.x}
                cy={node.y}
                r={lit ? 1.7 : 1.15}
                fill={lit ? "#1a6b66" : nodeFill}
                stroke={lit ? "#1a6b66" : stroke}
                strokeWidth="0.35"
              />
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = usePrefersReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
