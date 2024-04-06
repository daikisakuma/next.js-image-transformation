"use client";

import ImageSummary from "./components/ImageSummary";
import dynamic from "next/dynamic";
const TransformationImage = dynamic(() => import("./components/TransformationImage"), { ssr: false });

export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <TransformationImage />
      </div>
      <ImageSummary />
    </div>
  );
}
