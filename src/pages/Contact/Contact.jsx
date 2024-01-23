import React from "react";
import Piano from "../../assets/images/piano2.jpg";
import { TituloBanner } from "../../components/TituloBanner";

export function Contact() {
  const titulo = "Contáctanos";
  return (
    <>
      <div className="relative lg:h-2/3 h-screen lg:mb-0 mb-36">
        <div
          className="absolute flex flex-col object-center lg:pt-56 pt-24 inset-0 w-screen h-full z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="w-screen py-12 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{titulo}</h1>
            <div className="relative flex items-top justify-center lg:min-h-screen sm:items-center sm:pt-0">
              <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 lg:mr-2 bg-gray-800 bg-opacity-50 sm:rounded-lg">
                      <h1 className="lg:text-4xl text-2xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                        Ponte en contacto
                      </h1>
                      <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                        Llena el formulario para iniciar una conversación
                      </p>

                      <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                          Río Guapante y Río Chambo, Ambato
                        </div>
                      </div>

                      <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                          +593 987654321
                        </div>
                      </div>

                      <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          className="w-8 h-8 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <div className="ml-4 text-md tracking-wide font-semibold w-40">
                          info@santamarianita.com
                        </div>
                      </div>
                    </div>

                    <form className="p-6 flex flex-col justify-center">
                      <div className="flex flex-col">
                        <label for="name" className="hidden">
                          Nombres y Apellidos
                        </label>
                        <input
                          type="name"
                          name="name"
                          id="name"
                          placeholder="Nombres y Apellidos"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-primary focus:border-3 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label for="email" className="hidden">
                          Correo
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Correo"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border-gray-400 text-gray-800 font-semibold focus:border-primary focus:border-3 focus:outline-none"
                        />
                      </div>

                      <div className="flex flex-col mt-2">
                        <label for="tel" className="hidden">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          name="tel"
                          id="tel"
                          placeholder="Teléfono"
                          className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-primary focus:border-3 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="md:w-32 bg-primary hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-secondary transition ease-in-out duration-300"
                      >
                        Enviar
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-full lg:h-screen w-screen h-40 lg:px-20">
            <iframe
              className="lg:w-full lg:h-full w-screen"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=hogar santa marianita ambato&t=&z=19&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
        <img
          src={Piano}
          className="lg:w-screen lg:h-full h-screen w-full object-cover filter brightness-75"
        />
      </div>
    </>
  );
}
