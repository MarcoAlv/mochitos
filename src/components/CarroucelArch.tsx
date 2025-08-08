"use client";

import Circle from "@/components/Circle";
import { useEffect, useRef } from "react";
import { PROJECT_URL } from "@/config/app.config";

export default function CarrouselArch() {
  const elements = [
    {
      url: `${PROJECT_URL}/assets/image.png`,
      text: "this is an example",
    },
    {
      url: `${PROJECT_URL}/assets/image.png`,
      text: "this is an example",
    },
    {
      url: `${PROJECT_URL}/assets/image.png`,
      text: "this is an example",
    },
    {
      url: `${PROJECT_URL}/assets/image.png`,
      text: "this is an example",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const circlesRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let containerSize = 800;
    let containerHeight = 800;

    if (!containerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      containerSize = width;
      containerHeight = height;
      console.log("Div resized:", width, height);
    });
    observer.observe(containerRef.current);
    let animationId = 0;
    let angle = 0;
    let radius = 350;

    let state = 'moving';
    let velocity = 0.01;
    const minVelocity = 0.001;
    const maxVelocity = 0.01;
    const decel = 0.00005;
    const accel = 0.00005;
    let pauseTime = 0;

    const pauseAngles = [
      Math.PI * 1.75,
      Math.PI * 1.25,
      Math.PI * 0.75,
      Math.PI * 0.25,
    ];

    let pauseIndex = 0;
    const angleThreshold = 0.05;

    function angleDistance(a: number, b: number) {
      let diff = Math.abs(a - b) % (2 * Math.PI);
      return diff > Math.PI ? (2 * Math.PI - diff) : diff;
    }

    function render() {
      const circles = circlesRefs.current;
      if (containerSize > 1000)
      {
        circles.forEach((circle, i) => {
          if (!circle) return;

          const offset = (i * (2 * Math.PI)) / 8;
          const theta = Math.PI * 1.125 + offset;
          const x = containerSize * 0.35 * Math.cos(theta);
          const y = radius * 1.15 * Math.sin(theta) * 0.5 + containerHeight * 0.2;

          circle.style.transform = `translate(${x}px, ${y}px)`;
        });

        animationId = requestAnimationFrame(render);
        return;
      }
      const targetAngle = pauseAngles[pauseIndex];
      const distanceToTarget = angleDistance(angle, targetAngle);

      switch (state) {
        case 'moving':
          if (distanceToTarget < angleThreshold) {
            state = 'slowing';
          }
          break;

        case 'slowing':
          velocity -= decel;
          if (velocity <= minVelocity || distanceToTarget < angleThreshold / 2) {
            velocity = 0;
            state = 'paused';
            pauseTime = Date.now();
          }
          break;

        case 'paused':
          if (Date.now() - pauseTime > 3000) {
            pauseIndex = (pauseIndex + 1) % pauseAngles.length;
            console.log(`next ${pauseAngles[pauseIndex]}`)
            console.log(`angle ${angle}`)
            state = 'speeding';
          }
          break;

        case 'speeding':
          velocity += accel;
          if (velocity >= maxVelocity) {
            velocity = maxVelocity;
            state = 'moving';
          }
          break;
      }

      angle = (angle - velocity + Math.PI * 2) % (Math.PI * 2);

      circles.forEach((circle, i) => {
        if (!circle) return;

        const offset = (i * (2 * Math.PI)) / 4;
        const theta = angle + offset;
        const x = containerSize * 0.35 * Math.cos(theta);
        const y = radius * 1.15 * Math.sin(theta) * 0.5 + containerHeight * 0.34;

        circle.style.transform = `translate(${x}px, ${y}px)`;
      });

      animationId = requestAnimationFrame(render);
    }

    animationId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-100 w-full overflow-hidden flex items-center justify-center"
    >
      {elements?.map((element, idx) => (
        <Circle
          imageSrc={element.url}
          className="absolute"
          key={idx}
          ref={(el) => {
            circlesRefs.current[idx] = el;
          }}
        />
      ))}
    </div>
  );
}
