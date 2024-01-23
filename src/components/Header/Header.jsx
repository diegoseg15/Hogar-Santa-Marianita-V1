import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { MenuMobile } from "./MenuMobile/MenuMobile";

export function Header() {
  const pathname = window.location.pathname;
  const [openMMobile, setOpenMMobile] = useState(false);

  const openMenuMobile = (event) => {
    event.preventDefault();
    setOpenMMobile(true);
  };

  return (
    <>
      <MenuMobile open={openMMobile} setOpen={setOpenMMobile} />
      <nav className="bg-gray-800 bg-opacity-80">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              className="h-10 w-auto mr-3"
              alt="Logo del Hogar Santa Marianita"
            />
            <span className="self-center lg:text-2xl text-xl font-semibold whitespace-nowrap text-white">
              Hogar Santa Marianita
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={(event) => openMenuMobile(event)}
            >
              <span className="sr-only">main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col text-white font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`${
                    pathname === "/" ? "text-primary" : ""
                  } hover:text-secondary block py-2 pl-3 pr-4  rounded md:bg-transparent`}
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/quienes-somos"
                  className={`${
                    pathname === "/quienes-somos" ? "text-primary" : ""
                  } hover:text-secondary block py-2 pl-3 pr-4  rounded md:bg-transparent`}
                >
                  ¿Quienes Somos?
                </Link>
              </li>
              <li>
                <Link
                  to="/involucrate"
                  className={`${
                    pathname === "/involucrate" ? "text-primary" : ""
                  } hover:text-secondary block py-2 pl-3 pr-4  rounded md:bg-transparent`}
                >
                  Involúcrate
                </Link>
              </li>
              <li>
                <Link
                  to="/contactanos"
                  className={`${
                    pathname === "/contactanos" ? "text-primary" : ""
                  } hover:text-secondary block py-2 pl-3 pr-4  rounded md:bg-transparent`}
                >
                  Contáctanos
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`${
                    window.location.pathname.includes("/blog")
                      ? "text-primary"
                      : ""
                  } hover:text-secondary block py-2 pl-3 pr-4 rounded md:bg-transparent`}
                >
                  Blog
                </Link>
              </li>
            </ul>
            <div
              className={`${
                pathname === "/" || pathname === "/donar" ? "hidden" : ""
              } ml-20`}
            >
              <a
                href="/donar"
                type="button"
                className="text-tertiary bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary rounded-lg text-base px-4 py-2 text-center"
              >
                Donar ahora
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
