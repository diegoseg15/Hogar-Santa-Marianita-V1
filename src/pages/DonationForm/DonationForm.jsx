import React from "react";

export function DonationForm() {
  return (
    <div className="flex object-center items-center justify-center py-32">
      <div className="lg:px-40 px-10 md:w-full">
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
          <div className="w-full flex items-center">
            <div className="w-56">
              <span className="text-gray-600 font-semibold">
                Organización o Empresa
              </span>
            </div>
            <input
              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:border-3 transition-colors"
              placeholder="Empresa"
              type="text"
            />
          </div>
        </div>
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
          <div className="w-full p-3 border-b border-gray-200">
            <div className="mb-5">
              <label for="type1" className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-primary"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-6 ml-3"
                />
              </label>
            </div>
            <div>
              <div className="mb-3">
                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                  Nombre del Propietario
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:border-3 transition-colors"
                    placeholder="John Smith"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                  Numero de la tarjeta
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:border-3 transition-colors"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3 -mx-2 flex items-end">
                <div className="px-2 w-1/4">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Día de Espiración
                  </label>
                  <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:border-3 transition-colors cursor-pointer">
                      <option value="01">01 - January</option>
                      <option value="02">02 - February</option>
                      <option value="03">03 - March</option>
                      <option value="04">04 - April</option>
                      <option value="05">05 - May</option>
                      <option value="06">06 - June</option>
                      <option value="07">07 - July</option>
                      <option value="08">08 - August</option>
                      <option value="09">09 - September</option>
                      <option value="10">10 - October</option>
                      <option value="11">11 - November</option>
                      <option value="12">12 - December</option>
                    </select>
                  </div>
                </div>
                <div className="px-2 w-1/4">
                  <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:border-3 transition-colors cursor-pointer">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2026">2030</option>
                    <option value="2027">2031</option>
                    <option value="2028">2032</option>
                    <option value="2029">2033</option>
                  </select>
                </div>
                <div className="px-2 w-1/4">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Código de Seguridad
                  </label>
                  <div>
                    <input
                      className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:border-3 transition-colors"
                      placeholder="000"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-3">
            <label for="type2" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-primary"
                name="type"
                id="type2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                width="80"
                className="ml-3"
              />
            </label>
          </div>
        </div>
        <div>
          <button className="block w-full max-w-xs mx-auto bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-secondary text-lg text-white rounded-lg px-4 py-3 font-semibold">
            Donar Ahora
          </button>
        </div>
      </div>
    </div>
  );
}
