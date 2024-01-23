import React from "react";

export function TituloBanner(props) {
  const { titulo, srcImg } = props;
  return (
    <div className="relative lg:h-2/3 h-72">
      <div
        className="absolute flex items-center inset-0 w-full h-full z-10"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="max-w-2xl mx-auto py-12 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{titulo}</h1>
        </div>
      </div>
      <img
        src={srcImg}
        className="w-screen h-full object-cover filter brightness-75"
      />
    </div>
  );
}
