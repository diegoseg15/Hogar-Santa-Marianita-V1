import React, { useRef, useEffect } from "react";

export function VideoBanner() {
  const videoUrl = require("../../assets/videos/pexels-adailton-batista-1580507-640x360-30fps.mp4");

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="relative">
      <div
        className="absolute flex items-center inset-0 w-full h-full z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="max-w-2xl mx-auto py-12 text-center text-white">
          <h1 className="text-4xl font-bold mb-7">
            ¡Juntos podemos brindarles esperanza!
          </h1>
          <p className="text-lg mb-8">
            Muchos niños no tienen hogar ni familia. Tu donación puede marcar la
            diferencia en sus vidas y proporcionarles un hogar seguro y amoroso.
          </p>
          <a
            href="/donar"
            type="button"
            className="text-tertiary bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary rounded-lg text-lg px-7 py-3 text-center mr-3 md:mr-0"
          >
            Donar ahora
          </a>
        </div>
      </div>
      <video
        className="h-screen lg:w-screen object-cover filter brightness-75"
        playsInline
        muted
        loop
        controls={false}
        ref={videoEl}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}
