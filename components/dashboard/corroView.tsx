"use client";

import DashboardMobileMenu from "../ui/mobile-menu.dash";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CorroView() {
  const licence1 = ["Tronc commun SRIT", "TWIN"];

  const licence2 = ["SRIT", "SIGL", "RTEL", "TWIN"];

  const licence3 = ["SRIT", "SIGL", "RTEL", "TWIN"];

  const master1 = ["Info", "SIGL", "SITW", "BIHAR", "MBDS", "MDSI", "ERISE"];

  const master2 = ["Info", "SIGL", "SITW", "BIHAR", "MBDS", "MDSI", "ERISE"];



  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <div className="w-full mb-9">
      {windowSize.width < 730 ? (
        <header className="fixed w-full text-white z-30 md:bg-opacity-90 transition duration-300 ease-in-out dark:bg-[#222] text-gray-400 dark:bg-[#222] backdrop-blur-sm dark:bg-opacity-90 shadow-lg">
          <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
            <div className="flex items-center justify-between h-16 md:h-20">
              <div className="flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white">
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
                <span className="ml-3 text-base font-semibold">2ASLY</span>
              </div>
              <DashboardMobileMenu />
            </div>
          </div>
        </header>
      ) : null}

      <div className="px-6">
        <div className="md:pt-6 mb-4 pt-24 pb-2 border-b-2 border-gray-100 flex items-center justify-between">
          <h1 className="font-bold text-lg text-blue-700">Le corro</h1>
        </div>

        <div>
          <h1 className="text-lg font-semibold">Licence 1</h1>
          <div className="flex flex-wrap gap-x-4">
            {licence1.map((item, index) => (
              <Link key={index} target="blank" href="#">
                <button className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2">
                  <svg
                    className="h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M18 7V12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M6 7V11"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M10.05 7L10 12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M14 7V10"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>{item}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-semibold">Licence 2</h1>
          <div className="flex flex-wrap gap-x-4">
            {licence2.map((item, index) => (
              <Link
                key={index}
                target="blank"
                href="https://drive.google.com/drive/folders/1licrVEjh1_UytiGQbPtZ41WldMvQo6Gh?usp=sharing"
              >
                <button className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2">
                  <svg
                    className="h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M18 7V12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M6 7V11"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M10.05 7L10 12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M14 7V10"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>{item}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-semibold">Licence 3</h1>
          <div className="flex flex-wrap gap-x-4">
            {licence3.map((item, index) => (
              <Link
                key={index}
                target="blank"
                href="https://drive.google.com/drive/folders/1VccLmgxgpDRyA-hTwbT9V39pRM_XlVLY?usp=sharing"
              >
                <button className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2">
                  <svg
                    className="h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M18 7V12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M6 7V11"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M10.05 7L10 12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M14 7V10"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>{item}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-semibold">Master 1</h1>
          <div className="flex flex-wrap gap-x-4">
            {master1.map((item, index) => (
              <Link
                key={index}
                target="blank"
                href="https://drive.google.com/drive/folders/1lgNaHAkKClYE2SfE0mkOr3xaH59C9plN?usp=sharing"
              >
                <button className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2">
                  <svg
                    className="h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M18 7V12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M6 7V11"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M10.05 7L10 12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M14 7V10"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>{item}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-semibold">Master 2</h1>
          <div className="flex flex-wrap gap-x-4">
            {master2.map((item, index) => (
              <Link key={index} target="blank" href="#">
                <button className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2">
                  <svg
                    className="h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M18 7V12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M6 7V11"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M10.05 7L10 12"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                      <path
                        d="M14 7V10"
                        stroke="#292D32"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>{" "}
                    </g>
                  </svg>
                  <p>{item}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
