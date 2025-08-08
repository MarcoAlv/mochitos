"use client";

import { useEffect, useRef } from "react";
import Circle from "@/components/Circle";
import { PROJECT_URL } from "@/config/app.config";

const elements = Array(4).fill({
  url: `${PROJECT_URL}/assets/image.png`,
  text: "this is an example",
});

// Constants
const RADIUS = 350;
const PAUSE_ANGLES = [
  Math.PI * 1.75,
  Math.PI * 1.25,
  Math.PI * 0.75,
  Math.PI * 0.25,
];
const MIN_VELOCITY = 0.001;
const MAX_VELOCITY = 0.01;
const ACCEL = 0.00005;
const DECEL = 0.00005;
const ANGLE_THRESHOLD = 0.05;
const PAUSE_DURATION = 3000;

export default function CarrouselArch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    let containerWidth = containerRef.current.offsetWidth;
    let containerHeight = containerRef.current.offsetHeight;
    let offsety = containerHeight * 0.38;
    let aviod_render = 0;

    const resizeObserver = new ResizeObserver(() => {
      containerWidth = containerRef.current?.offsetWidth || 800;
      containerHeight = containerRef.current?.offsetHeight || 800;
      offsety = containerHeight * 0.38
      
      let prev = aviod_render
      aviod_render = containerWidth > 1000 ? 1 : 0;

      if (prev === 2) {
        requestAnimationFrame(render);
      }
    });
    resizeObserver.observe(containerRef.current);

    let angle = 0;
    let velocity = MAX_VELOCITY;
    let pauseTime = 0;
    let pauseIndex = 0;
    let state: "moving" | "slowing" | "paused" | "speeding" = "moving";
    let animationId: number;

    const angleDistance = (a: number, b: number) => {
      const diff = Math.abs(a - b) % (2 * Math.PI);
      return diff > Math.PI ? 2 * Math.PI - diff : diff;
    };

    const offsets = elements.map((_, i) => (i * (2 * Math.PI)) / 4);
    let lastFrameTime = 0;

    const render = (timestamp: number) => {
      const delta = timestamp - lastFrameTime;

      if (delta < 1000 / 75) {
        animationId = requestAnimationFrame(render);
        return;
      }
      
      if (aviod_render >= 2) {
        return;
      } else if (aviod_render === 1) {
        aviod_render = 2;
      }

      lastFrameTime = timestamp;
      const circles = circlesRefs.current;

      const isWide = containerWidth > 1000;
      if (isWide) {
        circles.forEach((circle, i) => {
          if (!circle) return;
          const offset = (i * (2 * Math.PI)) / 8;
          const theta = Math.PI * 1.125 + offset;
          const x = containerWidth * 0.35 * Math.cos(theta);
          const y =
            RADIUS * 1.15 * Math.sin(theta) * 0.5 + containerHeight * 0.2;
          circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });
        animationId = requestAnimationFrame(render);
        return;
      }

      // Carousel movement logic
      const targetAngle = PAUSE_ANGLES[pauseIndex];
      const distanceToTarget = angleDistance(angle, targetAngle);

      switch (state) {
        case "moving":
          if (distanceToTarget < ANGLE_THRESHOLD) state = "slowing";
          break;
        case "slowing":
          velocity = Math.max(velocity - DECEL, MIN_VELOCITY);
          if (
            velocity <= MIN_VELOCITY ||
            distanceToTarget < ANGLE_THRESHOLD / 2
          ) {
            velocity = 0;
            pauseTime = Date.now();
            state = "paused";
          }
          break;
        case "paused":
          if (Date.now() - pauseTime > PAUSE_DURATION) {
            pauseIndex = (pauseIndex + 1) % PAUSE_ANGLES.length;
            state = "speeding";
          }
          break;
        case "speeding":
          velocity = Math.min(velocity + ACCEL, MAX_VELOCITY);
          if (velocity >= MAX_VELOCITY) state = "moving";
          break;
      }

      angle = (angle - velocity + 2 * Math.PI) % (2 * Math.PI);

      // Update transforms
      circles.forEach((circle, i) => {
        if (!circle) return;
        const theta = angle + offsets[i] - 0.017;
        const x = containerWidth * 0.35 * Math.cos(theta);
        const y =
          RADIUS * 1.15 * Math.sin(theta) * 0.5 + offsety;
        circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[26em] [@media(min-width:1000px)]:h-[34em] w-full overflow-hidden flex items-center justify-center"
    >
      {elements.map((element, idx) => (
        <Circle
          imageSrc={element.url}
          className="absolute transform-gpu will-change-transform"
          key={idx}
          ref={(el) => {
            circlesRefs.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
}
