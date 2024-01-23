import React from "react";
import { TituloBanner } from "../../components/TituloBanner";
import Fachada from "../../assets/images/fachada.jpg";
import Piano1 from "../../assets/images/piano1.jpg";
import Piano2 from "../../assets/images/piano2.jpg";
import historia1 from "../../assets/images/IMG20230405094444.jpg";
import historia2 from "../../assets/images/196519402_516271549803800_8454612399907073598_n.jpg";

export function AboutUs() {
  const titulo = "¿Quienes Somos?";
  return (
    <>
      <div className="lg:h-screen lg:-mb-40 mb-10">
        <TituloBanner titulo={titulo} srcImg={Fachada} />
      </div>
      <div className="flex flex-col items-center bg-white md:flex-row px-5 text-justify lg:text-start lg:px-32 lg:py-10">
        <div className="flex rounded-lg items-center h-64 w-max overflow-hidden filter lg:mr-10">
          <img
            className="rounded-lg h-auto lg:w-full w-screen lg:px-0 px-5"
            src={historia1}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Historia
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
        </div>
      </div>
      <div className="flex flex-col items-center bg-white md:flex-row px-5 text-justify lg:text-start lg:px-32 pb-10 lg:pt-10 lg:pb-40">
        <div className="flex flex-col justify-between p-4 leading-normal">
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
        </div>
        <img
          className="w-full rounded-lg h-auto md:h-96 lg:w-auto lg:ml-10"
          src={historia2}
          alt=""
        />
      </div>
      <div className="relative">
        <div className="flex object-center h-screen lg:items-center lg:h-96 lg:overflow-hidden object-cover filter brightness-50">
          <img
            className="lg:block hidden rounded-lg h-full w-full"
            src={Piano1}
            alt=""
          />
          <img
            className="lg:hidden block w-screen rounded-lg h-auto"
            src={Piano2}
            alt=""
          />
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center lg:gap-10 rounded-lg lg:px-20 text-center absolute inset-0 z-10 text-white bg-gray-800 bg-opacity-50">
          <div className="flex flex-col items-center lg:pt-10 lg:pb-10">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Misión</h5>
              <p className="mb-3 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel fringilla est. Duis commodo quam sed interdum cursus. Donec
                tincidunt augue ac ligula rutrum, ut feugiat est suscipit. Nulla
                facilisi. Fusce eget nibh pretium, pulvinar metus et, vehicula
                lacus. Sed blandit commodo arcu, quis dictum odio venenatis
                eget. Praesent commodo, arcu a rhoncus feugiat, velit magna
                vehicula lorem, nec bibendum eros nulla eu nibh. Maecenas
                tincidunt vel sapien ac finibus.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:pt-10 lg:pb-10">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">Visión</h5>
              <p className="mb-3 font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                vel fringilla est. Duis commodo quam sed interdum cursus. Donec
                tincidunt augue ac ligula rutrum, ut feugiat est suscipit. Nulla
                facilisi. Fusce eget nibh pretium, pulvinar metus et, vehicula
                lacus. Sed blandit commodo arcu, quis dictum odio venenatis
                eget. Praesent commodo, arcu a rhoncus feugiat, velit magna
                vehicula lorem, nec bibendum eros nulla eu nibh. Maecenas
                tincidunt vel sapien ac finibus. Sed in purus eget turpis mollis
                facilisis ac non lectus. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris vel fringilla est.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
