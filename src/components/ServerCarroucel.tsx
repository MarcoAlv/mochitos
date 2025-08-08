"use client";

import dynamic from "next/dynamic";

const CarrouselArch = dynamic(() => import("./CarroucelArch"), {
  ssr: false,
  loading: () => <div className="h-[26em] [@media(min-width:1000px)]:h-[34em]" />,
});

export default function CarrouselWrapper() {
  return <CarrouselArch />;
}
