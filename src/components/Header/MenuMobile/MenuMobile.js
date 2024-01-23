import React from "react";

export function MenuMobile(props) {
  const { open, setOpen } = props;

  const closeMenuMobile = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  return (
    <>
      {open === false ? (
        ""
      ) : (
        <div
          id="drawer-navigation"
          className="lg:hidden fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 right-0"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={(event) => closeMenuMobile(event)}
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Inicio</span>
                </a>
              </li>
              <li>
                <a
                  href="/quienes-somos"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">¿Quienes Somos?</span>
                </a>
              </li>
              <li>
                <a
                  href="/involucrate"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Involúcrate</span>
                </a>
              </li>
              <li>
                <a
                  href="/contactanos"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Contáctanos</span>
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span className="ml-3">Blog</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
