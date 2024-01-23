import React from "react";
import { TituloBanner } from "../../components/TituloBanner";
import Voluntarios from "../../assets/images/voluntarios.jpg";
import ec_flag from "../../assets/images/ec_flag_icon.png";
import us_flag from "../../assets/images/us_flag_icon.png";
import de_flag from "../../assets/images/de_flag_icon.png";

export function Involucrate() {
  const titulo = "Involúcrate";
  return (
    <>
      <div className="lg:h-screen lg:-mb-40 mb-10">
        <TituloBanner titulo={titulo} srcImg={Voluntarios} />
      </div>
      <div className="flex flex-col items-center bg-white md:flex-row lg:px-32 lg:py-10">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
            Donaciones
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
            lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris vel fringilla est.
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

      <div className="flex flex-col items-center bg-white md:flex-row lg:px-32 lg:py-10">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
            Voluntariado
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
            lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris vel fringilla est. Duis commodo quam sed interdum cursus.
            Donec tincidunt augue ac ligula rutrum, ut feugiat est suscipit.
            Nulla facilisi. Fusce eget nibh pretium, pulvinar metus et, vehicula
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
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-white md:flex-row lg:px-32 lg:py-10">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary">
            Adopciones
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
            lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris vel fringilla est.
          </p>
          <div className="flex lg:justify-start justify-center">
            <a
              href="/blog/historia"
              type="button"
              className="text-white bg-quaternary hover:bg-tertiary hover:text-gray-500 focus:ring-4 focus:outline-none focus:ring-secondary rounded-lg text-base px-5 py-3 text-center mr-3 md:mr-0"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-primary lg:pt-0 pt-20 pb-20">
        Testimonios
      </h5>

      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 mx-10 lg:mx-32">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-lg font-semibold text-gray-900">
              "Fue una experiencia increíble"
            </h3>
            <p className="my-4">
              Estoy muy agradecido por la oportunidad de haber ayudado en el
              Hogar Santa Marianita. Ver las sonrisas de los niños cuando les
              brindábamos ayuda fue realmente emocionante.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src={de_flag}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium">
              <div>Greta Wagner</div>
              <div className="text-sm text-gray-500">Alemánia</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-lg font-semibold text-gray-900">
              "Valió la pena cada minuto"
            </h3>
            <p className="my-4">
              Desde el momento en que llegué al Hogar Santa Marianita, fui
              recibido con los brazos abiertos por los niños y los otros
              voluntarios. Me sorprendió la capacidad que tienen estos niños
              para encontrar alegría en las cosas más simples.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src={de_flag}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium">
              <div>Karl Wagner</div>
              <div className="text-sm text-gray-500">Alemánia</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Una experiencia inolvidable
            </h3>
            <p className="my-4">
              Ayudar a los niños en el Hogar Santa Marianita fue una experiencia
              muy enriquecedora para mí. Fue muy gratificante ver la sonrisa en
              sus rostros cuando les dimos atención y amor.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src={ec_flag}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium">
              <div>Elisabeth Ramirez</div>
              <div className="text-sm text-gray-500">Ecuador</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
            <h3 className="text-lg font-semibold text-gray-900">
              ¡Nunca olvidaré la emoción en sus caras!
            </h3>
            <p className="my-4">
              Ver la felicidad y gratitud de los niños de Hogar Santa Marianita
              cuando les llevamos ropa y juguetes fue una de las cosas más
              emocionantes que he experimentado. ¡Definitivamente volvería a
              hacerlo!
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src={us_flag}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium">
              <div>Emily Johnson</div>
              <div className="text-sm text-gray-500">Estados Unidos</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
