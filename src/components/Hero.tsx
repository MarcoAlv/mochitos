"use client";
import React, { useState } from "react";
import ArrowRightIcon from "@/components/icons/arrow";
import { PROJECT_URL } from "@/config/app.config";
import Heart from "@/components/icons/Heart";
import { useId } from "react";

const MochitosHero = () => {
  const images = [
    `${PROJECT_URL}/assets/imagea.jpg`,
    `${PROJECT_URL}/assets/imageb.jpg`,
    `${PROJECT_URL}/assets/imagec.jpg`,
  ];
  const heroId = useId();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex >= images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full h-[35em] overflow-hidden">
      <button
        onClick={goToPrevious}
        className="absolute left-8 top-2/5 z-10 text-moch-400 hover:text-moch-600 transition-colors"
      >
        <svg
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-8 top-2/5 transform  z-10 text-moch-400 hover:text-moch-600 transition-colors"
      >
        <svg
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="h-full flex items-center">
        <div className="w-full grid justify-center [@media(min-width:500px)_and_(max-width:1024px)]:justify-start lg:pr-[35dvw] items-center">
          <div className="pl-16 [@media(min-width:500px)]:pl-24 pr-8 space-y-8">
            <div className="space-y-1">
              <h2 className="text-2xl xs:text-2xl font-semibold text-zinc-800 tracking-wider">
                WELCOME TO
              </h2>
              <h1 className="text-5xl xs:text-6xl font-bold text-moch-500 leading-tight">
                MOCHITOS
              </h1>
            </div>

            <p className="text-lg xs:text-xl text-zinc-800 leading-relaxed font-light">
              A little space full of love,
              <br />
              adventures, memes, and
              <br />
              puppy paws 🐶
            </p>

            <button className="inline-flex items-center gap-3 bg-moch-500 hover:bg-moch-600 text-white font-medium text-lg px-8 py-4 rounded-lg transition-colors">
              Explore more!
              <div className="hidden xs:block">
                <ArrowRightIcon size={34} />
              </div>
            </button>
          </div>
        </div>

        <div className="absolute right-0 -z-10 h-[34em] max-h-[35em] lg:right-[15dvw] 2xl:right-[25dvw] w-auto transition-all delay-75 duration-200 xl:transition-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 900"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <filter
                id="whiteShader"
                colorInterpolationFilters="linearRGB"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
              >
                <feFlood
                  floodColor="#fafafa"
                  floodOpacity="0.1"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="flood"
                />
                <feComposite
                  in="flood"
                  in2="SourceGraphic"
                  operator="atop"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="composite"
                />
              </filter>
              <pattern
                id={heroId}
                patternUnits="userSpaceOnUse"
                width="810.47"
                height="902.69"
              >
                <image
                  href={images[currentImageIndex]}
                  x="0"
                  y="0"
                  width="810.47"
                  height="902.69"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <path
              filter="url(#whiteShader)"
              fill={`url(#${heroId})`}
              d="M810.47 893.22c0,17.16 -40.31,5.28 -62.48,7.57 -67.07,4.14 -136.89,-4.67 -209.14,-1.59 -114.36,4.87 -380.31,15.24 -460.23,-73.28 -112.18,-142.76 24.72,-315.8 1.68,-396.83 -29.35,-103.22 -136.99,-150.69 -41.76,-280.14 90.48,-123 163.73,-141.61 309.39,-148.16 53.46,-2.15 444.18,-2.3 450.46,31.31 13.61,72.88 4.11,213.84 4.05,366.99 -0.08,177.26 8.04,370.85 8.04,494.13z"
            />
          </svg>
        </div>
      </div>

      <div className="absolute -bottom-[1.25em] left-1/2 -translate-1/2 items-center space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className="transition-colors"
          >
            <Heart
              primary={index === currentImageIndex ? "fill-moch-500" : "fill-moch-100"}
              secondary={index === currentImageIndex ? "fill-moch-300" : "fill-moch-200"}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MochitosHero;
