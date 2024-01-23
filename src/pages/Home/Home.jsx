import React from "react";
import { VideoBanner } from "../../components/VideoBanner";
import { PhraseBanner } from "../../components/PhraseBanner";

export function Home() {
  return (
    <div className="overflow-hidden">
      <VideoBanner />
      <div className="py-10">
        <PhraseBanner />
      </div>
    </div>
  );
}
