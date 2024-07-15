"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white w-full">
      <div className="bg-white">
        <div className=" self-center ">
          <button 
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="bg-black my-0 fixed mx-auto z-50 w-full"
          >
            <div className="px-[37.625px] my-[18px] flex top-0 items-center gap-4">
              <span className="text-white  text-[21px]">Open Filter</span>
              {!isOpen ? (
                <FaChevronDown className="text-white " />
              ) : (
                <FaChevronUp className="text-white" />
              )}
            </div>
          </button>
        </div>
        {isOpen && (
          <div className=" bg-[#1a1a1a] absolute max-sm:top-[16%] md:top-[13.5%] lg:top-[12.5%] w-full z-50 ">
            <fieldset className="flex p-[37.625px] ">
              <legend className="text-[#b3b3b3] mb-[24px]">Models</legend>
              <div className="mb-3 mr-3 float-left">
                {/* <input type="checkbox" className="hidden" /> */}
                <label
                  // for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 "
                >
                  e-tron GT
                </label>
              </div>
              <div className="mb-3 mr-3">
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Q8 e-tron
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  A3
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  A4
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  A5
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  A6
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  A7
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  A8
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Q3
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Q5
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Q7
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Q8
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  TT
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  RS
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  ETRON
                </label>
              </div>
            </fieldset>
            <fieldset className="mt-[54px] flex p-[37.625px] flex-col md:flex-row">
              <legend className="text-[#b3b3b3] mb-[24px]">Body style</legend>
              <div className="mb-3 mr-3 ">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Sportback
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Sport
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  SUV
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Sedan
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Avant
                </label>
              </div>
              <div className="mb-3 mr-3">
                <input type="checkbox" className="hidden" />
                <label
                  for="option"
                  className="text-white cursor-pointer border px-[18px] py-3 font-auditype text-base"
                >
                  Coupé
                </label>
              </div>
            </fieldset>
            <div className="bottom-0 pt-60 justify-center ">
              <div className="bg-black bottom-0 px-[76.797px] py-6 w-full">
                <button className=" text-white border-solid border items-center px-[42px] py-[15px]">
                  Show All Cars
                </button>
              </div>
            </div>
          </div>
        )}
        {/*-------------------------------------------------- e-tron GT -----------------------------------------------*/}
        <div className="bg-white h-full lg:pt-[163.5px] xl:[150px] 2xl:mx-[231.500px] md:pt-[96px] max-sm:pt-[68px]">
          <div className="md:flex mt-0 ">
            <div className="">
              <img
                className="w-[660px] relative lg:top-[-30px] lg:left-[-15px]"
                src="https://www.audi.co.th/bin/nemo.static.19020/cms4i-nemo-mofi/assets/img/modelfinder-2/etrongt.svg"
                width="550"
                height="285"
              />
              <picture>
                <img
                  className=" z-2 absolute flex 2xl:top-[300px] 2xl:left-[150px] md:top-[260px] md:left-[-50px] max-lg:w-[400px] max-md:top-[200px] max-sm:left-[50px]"
                  width="640"
                  height="299"
                  src="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/f83rj7/2022.png?wid=850"
                />
              </picture>
            </div>
            <div className=" bg-white md:grid md:grid-cols-3 z-20">
              <div className=" gap-4 flex justify-center flex-col">
                <div className=" px-[18px] pt-[18px]">
                  <h2 className="mb-3 lg:h-[100px] md:h-[50px]">
                    e-tron GT quatto
                  </h2>
                </div>
                <img
                  className=" w-auto max-w-full h-auto"
                  src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?wid=550"
                  width="550"
                  height="236"
                />
                <div className=" border border-solid border-black hover:text-[#4c4c4c] hover:border-[#4c4c4c] self-center p-[18px] lg:px-[80px] md:px-[30px] md:py-[15px] max-sm:px-[50px] max-sm:py-[10px]">
                  <a href="#">Information</a>
                </div>
              </div>
              <div className=" bg-white grid">
                <div className=" gap-4 flex justify-center flex-col">
                  <div className=" lg:px-[18px] pt-[18px] md:px-[18px] max-sm:px-[18px] max-sm:pt-[18px]">
                    <h2 className="mb-3 lg:h-[100px] md:h-[50px]">
                      RS e-tron GT
                    </h2>
                  </div>
                  <img
                    className=" w-auto max-w-full h-auto"
                    src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?wid=550"
                    width="550"
                    height="236"
                  />
                  <div className="border border-solid border-black py-[15px] hover:text-[#4c4c4c] hover:border-[#4c4c4c] self-center p-[18px] lg:px-[80px] md:px-[30px] md:py-[15px] max-sm:px-[50px] max-sm:py-[10px]">
                    <a href="#">Information</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------Q8 e-tron----------------------------- */}
          <div className="md:flex mt-0 lg:mt-[100px] md:mt-[80px] max-sm:mt-[50px]">
            <div className="">
              <img
                className="w-[660px] relative lg:top-[-30px] lg:left-[-15px]"
                src="https://www.audi.co.th/bin/nemo.static.19020/cms4i-nemo-mofi/assets/img/modelfinder-2/q8etron.svg"
                width="550"
                height="285"
              />
              <picture>
                <img
                  className=" z-2 absolute flex 2xl:top-[800px] 2xl:left-[150px] md:top-[570px] md:left-[-50px] max-lg:w-[400px] max-md:top-[200px] max-sm:left-[50px] max-sm:top-[1070px]"
                  width="640"
                  height="299"
                  src="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/gegcvc/2024.png?wid=850"
                />
              </picture>
            </div>
            <div className=" bg-white md:grid md:grid-cols-3 z-20">
              <div className=" gap-4 flex justify-center flex-col">
                <div className=" px-[18px] pt-[18px]">
                  <h2 className="mb-3 lg:h-[100px] md:h-[50px]">Q8 e-tron</h2>
                </div>
                <img
                  className=" w-auto max-w-full h-auto"
                  width="550"
                  height="236"
                  src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/gegcvc/2024.png?wid=550"
                />
                <div className=" border border-solid border-black hover:text-[#4c4c4c] hover:border-[#4c4c4c] self-center p-[18px] lg:px-[80px] md:px-[30px] md:py-[15px] max-sm:px-[50px] max-sm:py-[10px]">
                  <a href="#">Information</a>
                </div>
              </div>
              <div className=" bg-white grid">
                <div className=" gap-4 flex justify-center flex-col">
                  <div className=" lg:px-[18px] pt-[18px] md:px-[18px] max-sm:px-[18px] max-sm:pt-[18px]">
                    <h2 className="mb-3 lg:h-[100px] md:h-[50px]">
                      Q8 Sportback e-tron
                    </h2>
                  </div>
                  <img
                    className=" w-auto max-w-full h-auto"
                    width="550"
                    height="236"
                    src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/getcvc/2024.png?wid=550"
                  />

                  <div className="border border-solid border-black py-[15px] hover:text-[#4c4c4c] hover:border-[#4c4c4c] self-center p-[18px] lg:px-[80px] md:px-[30px] md:py-[15px] max-sm:px-[50px] max-sm:py-[10px]">
                    <a href="#">Information</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------A3--------------------------------- */}
          <div className="md:flex mt-0 lg:mt-[100px] md:mt-[80px] max-sm:mt-[50px]">
            <div className="">
              <img src="/a3.svg" width="550" height="285" />
              <picture>
                <img
                  className=" z-10 absolute flex 2xl:top-[1200px] 2xl:left-[150px] md:top-[870px] md:left-[-50px] max-lg:w-[400px] max-md:top-[200px] max-sm:left-[50px] max-sm:top-[1890px]"
                  width="640"
                  height="299"
                  src="https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8yaar/2021.png?wid=850"
                />
              </picture>
            </div>
            <div className="bg-white md:grid md:grid-cols-3 z-20 md:ml-[40px] lg:ml-[70px]">
              <div className=" gap-4 flex justify-center flex-col">
                <div className=" px-[18px] pt-[18px]">
                  <h2 className="mb-3 lg:h-[100px] md:h-[50px]">Q8 e-tron</h2>
                </div>
                <img
                  className=" w-auto max-w-full h-auto"
                  src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/8yaar/2021.png?wid=550"
                  width="550"
                  height="236"
                />
                <div className=" border border-solid border-black hover:text-[#4c4c4c] hover:border-[#4c4c4c] self-center p-[18px] lg:px-[80px] md:px-[30px] md:py-[15px] max-sm:px-[50px] max-sm:py-[10px]">
                  <a href="#">Information</a>
                </div>
              </div>
              <div className=" bg-white grid">
                <div className="gap-4 flex justify-center flex-col">
                  <div className=" lg:px-[18px] pt-[18px] md:px-[18px] max-sm:px-[18px] max-sm:pt-[18px] ">
                    <h2 className="mb-3 lg:h-[100px] md:h-[50px] ">
                      Q8 Sportback e-tron
                    </h2>
                  </div>
                  <img
                    className=" w-auto max-w-full h-auto"
                    src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?wid=550"
                    width="550"
                    height="236"
                  />
                  <div className="border border-solid border-black py-[15px] hover:text-[#4c4c4c] hover:border-[#4c4c4c] self-center p-[18px] lg:px-[80px] md:px-[30px] md:py-[15px] max-sm:px-[50px] max-sm:py-[10px]">
                    <a href="#">Information</a>
                  </div>
                </div>
              </div>
              <div className=" bg-white grid">
                <div className=" gap-4 flex justify-center flex-col">
                  <div className=" lg:px-[18px] pt-[18px] md:px-[18px] max-sm:px-[18px] max-sm:pt-[18px]">
                    <h2 className="mb-3 lg:h-[100px] md:h-[50px]">
                      Q8 Sportback e-tron
                    </h2>
                  </div>
                  <img
                    className=" w-auto max-w-full h-auto"
                    src="https://mediaservice.audi.com/media/live/50900/fly1400x601n8/f83rj7/2022.png?wid=550"
                    width="550"
                    height="236"
                  />
                  <div className="border border-solid border-black py-[15px] hover:text-[#4c4c4c] hover:border-[#4c4c4c] self-center p-[18px] lg:px-[80px] md:px-[30px] md:py-[15px] max-sm:px-[50px] max-sm:py-[10px]">
                    <a href="#">Information</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
