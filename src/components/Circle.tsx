"use client";

import Image from "next/image";
import styles from "./Circle.module.css";

type CircleProps = {
  imageSrc: string;
  text: string;
};

export default function Circle({ imageSrc, text }: CircleProps) {
  return (
    <div className="h-[12rem] w-[12rem] relative">
    <div className="p-2 rounded-full bg-white">
      <Image
        src={imageSrc}
        alt={text}
        width={100}
        height={100}
        className="w-full h-auto object-contain max-h-full rounded-full"
      />
    </div>
    <div className="absolute bg-white rounded-full w-16 h-16 bottom-0 right-0 translate-x-1/2 translate-y-1/2 border border-gray-300" />
    </div>
  );
}
