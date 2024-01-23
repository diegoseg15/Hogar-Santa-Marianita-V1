import React from "react";
import logoPUCESA from "../../assets/images/logoPucesa.png";
import logoDiocesis from "../../assets/images/logo_diocesis-ambato.png";
import imgNinos from "../../assets/images/cuadroNinos.jpg";
import imgNinos2 from "../../assets/images/NinosAula.jpg";
import imgDibujo from "../../assets/images/FamiliaDibujo.jpeg";

export function PhraseBanner() {
  return (
    <>
      <div className="flex flex-col items-center bg-white md:flex-row px-5 text-justify lg:text-start lg:px-32 py-10">
        <img
          className="w-full rounded-lg h-96 md:h-auto md:w-96 lg:mr-10"
          src={imgNinos}
          alt="Pintura de tres niños huérfanos mirando por la puerta hacia la calle"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Lorem Ipsum dolor sit amet
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
            fringilla est. Duis commodo quam sed interdum cursus. Donec
            tincidunt augue ac ligula rutrum, ut feugiat est suscipit. Nulla
            facilisi. Fusce eget nibh pretium, pulvinar metus et, vehicula
            lacus. Sed blandit commodo arcu, quis dictum odio venenatis eget.
            Praesent commodo, arcu a rhoncus feugiat, velit magna vehicula
            lorem, nec bibendum eros nulla eu nibh. Maecenas tincidunt vel
            sapien ac finibus. Sed in purus eget turpis mollis facilisis ac non
            lectus.
          </p>
          <div className="flex lg:justify-start justify-center">
            <a
              href="/donar"
              type="button"
              className="text-tertiary bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary rounded-lg text-base px-5 py-3 text-center mr-3 md:mr-0"
            >
              Donar ahora
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse items-center bg-white md:flex-row px-5 text-justify lg:text-start lg:px-32 py-10">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Blog - Lorem Ipsum dolor sit amet
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
            fringilla est. Duis commodo quam sed interdum cursus. Donec
            tincidunt augue ac ligula rutrum, ut feugiat est suscipit. Nulla
            facilisi. Fusce eget nibh pretium, pulvinar metus et, vehicula
            lacus. Sed blandit commodo arcu, quis dictum odio venenatis eget.
            Praesent commodo, arcu a rhoncus feugiat, velit magna vehicula
            lorem, nec bibendum eros nulla eu nibh. Maecenas tincidunt vel
            sapien ac finibus. Sed in purus eget turpis mollis facilisis ac non
            lectus.
          </p>
          <div className="flex lg:justify-start justify-center">
            <a
              href="/blog/historia"
              type="button"
              className="text-white bg-quaternary hover:bg-tertiary hover:text-gray-500 focus:ring-4 focus:outline-none focus:ring-secondary rounded-lg text-base px-5 py-3 text-center mr-3 md:mr-0"
            >
              Leer mas...
            </a>
          </div>
        </div>
        <img
          className="w-full rounded-lg h-96 md:h-auto md:w-96 ml-10"
          src={imgNinos2}
          alt="Niños huérfanos asistiendo a una clase en un salón de clases"
        />
      </div>
      <div className="bg-white py-24 sm:pt-32 sm:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Conoce a nuestros generosos socios que ayudan a transformar vidas:
          </h2>
          <div className="mx-auto py-10 flex flex-row max-w-lg items-center sm:max-w-xl lg:mx-0 lg:max-w-none overscroll-x-auto overflow-y-hidden">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 px-8"
              src={logoPUCESA}
              alt="Logo de la Pontificia Universidad Católica del Ecuador Sede Ambato"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 px-8"
              src={logoDiocesis}
              alt="Logo de la Diocesis de Ambato"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 px-8"
              src={logoPUCESA}
              alt="Logo de la Pontificia Universidad Católica del Ecuador Sede Ambato"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 px-8"
              src={logoDiocesis}
              alt="Logo de la Diocesis de Ambato"
              width="158"
              height="48"
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 px-8"
              src={logoPUCESA}
              alt="Logo de la Pontificia Universidad Católica del Ecuador Sede Ambato"
              width="158"
              height="48"
            />
          </div>
        </div>
      </div>
      <div className="relative h-96">
        <div
          className="absolute flex items-center inset-0 w-full h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="max-w-2xl mx-auto py-12 text-center text-white">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Lorem Ipsum dolor sit amet
            </h5>
            <p className="mb-3 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vel fringilla est. Duis commodo quam sed interdum cursus. Donec
              tincidunt augue ac ligula rutrum, ut feugiat est suscipit. Nulla
              facilisi. Fusce eget nibh pretium, pulvinar metus et, vehicula
              lacus. Sed blandit commodo arcu, quis dictum odio venenatis eget.
              Praesent commodo, arcu a rhoncus feugiat, velit magna vehicula
              lorem, nec bibendum eros nulla eu nibh. Maecenas tincidunt vel
              sapien ac finibus. Sed in purus eget turpis mollis facilisis ac
              non lectus.
            </p>
          </div>
        </div>
        <img
          src={imgDibujo}
          className="w-screen h-full object-cover filter brightness-75"
          alt="Dibujo de un niño soñando con tener una familia feliz y unida"
        />
      </div>
    </>
  );
}
