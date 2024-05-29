"use client";

import DashboardMobileMenu from "../ui/mobile-menu.dash";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CorroView() {
  const licence1 = [
    {
      level: "Tronc commun SRIT",
      link: "https://drive.google.com/drive/folders/11MwqcN7FuC1V112XXld3bcNPCmGnqmaN?usp=drive_link",
    },
    {
      level: "TWIN",
      link: "https://drive.google.com/drive/folders/11N5ZNWeH8ufzgHPICFC6mxdC-ezObYfA?usp=drive_link",
    },
  ];

  const licence2 = [
    {
      level: "SRIT",
      link: "https://drive.google.com/drive/folders/1E8E3TbECql7d7ZksehzisNLn-1lFB4Mx?usp=drive_link",
    },
    {
      level: "SIGL",
      link: "https://drive.google.com/drive/folders/11NG8yu2QscaI2ZQeGOTKbCjmojQIbbt9?usp=drive_link",
    },
    {
      level: "RTEL",
      link: "https://drive.google.com/drive/folders/1E9CmqK5HD6uJXU2qCXOISZROzQ6C1Atp?usp=drive_link",
    },
    {
      level: "TWIN",
      link: "https://drive.google.com/drive/folders/11NIvh4yRuYBx_IUKmmEtK4g-qKYjNVKw?usp=drive_link",
    },
  ];

  const licence3 = [
    {
      level: "SRIT",
      link: "https://drive.google.com/drive/folders/11NqisDIoQ8cFfnrDd5xPXRpL06S_xgAF?usp=drive_link",
    },
    {
      level: "SIGL",
      link: "https://drive.google.com/drive/folders/11R24SmG8SYp2kx-YmJygjO2RNTRBgy7-?usp=drive_link",
    },
    {
      level: "RTEL",
      link: "https://drive.google.com/drive/folders/11PmpmViAPGqwvxeCPQUR8RNxwRQEjUqy?usp=drive_link",
    },
    {
      level: "TWIN",
      link: "https://drive.google.com/drive/folders/11RxGFK7-SBahpfIHl0r6yYG9cLNhko_G?usp=drive_link",
    },
  ];

  const master1 = [
    {
      level: "Info",
      link: "https://drive.google.com/drive/folders/11Tj8LjEEsTzJUen7b016K3CeUJHNel6Q?usp=drive_link",
    },
    {
      level: "SIGL",
      link: "https://drive.google.com/drive/folders/11fudE6c9SxUprrR_HUyT-ta63gYPP9JQ?usp=drive_link",
    },
    {
      level: "SITW",
      link: "https://drive.google.com/drive/folders/11U6aFxq8KvnIhKu8e-G1FOZiG7_-2RWv?usp=drive_link",
    },
    {
      level: "RTEL",
      link: "https://drive.google.com/drive/folders/11nm_BtecTMXnf42PPPUt9KP77pYCwVEd?usp=drive_link",
    },
    {
      level: "BIHAR",
      link: "https://drive.google.com/drive/folders/11xbHpgjxcUsJTvRC8zu4HXNAVerAEioX?usp=drive_link",
    },
    {
      level: "MBDS",
      link: "https://drive.google.com/drive/folders/11pOT78cVKWsfrB88KqhYb1enf5WrI2R2?usp=drive_link",
    },
    {
      level: "ERIS",
      link: "https://drive.google.com/drive/folders/11vYqDzx4pUqDEGGL9q_iPPs4rhkj3GEQ?usp=drive_link",
    },
  ];

  const master2 = [
    {
      level: "SIGL",
      link: "https://drive.google.com/drive/folders/11xSEGslp-D8GBM3UrzuGGE85nJZpTQD1?usp=drive_link",
    },
    {
      level: "SITW",
      link: "https://drive.google.com/drive/folders/11xBEio6yPEHYhaQxct_WVE-Qn89v2frr?usp=drive_link",
    },
    {
      level: "BIHAR",
      link: "https://drive.google.com/drive/folders/11oU2SDs_qLUl3GbNqqP9fbPU_eQ-HfML?usp=drive_link",
    },
    {
      level: "MBDS",
      link: "https://drive.google.com/drive/folders/11xxLAgh8FngRjLGFoFueYnut-kMfxRJt?usp=drive_link",
    },
    {
      level: "ERIS",
      link: "https://drive.google.com/drive/folders/11xzxUAPpxN2XSG_49twZa8ljHPKsxHDm?usp=drive_link",
    },
  ];

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

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
              <Link key={index} target="blank" href={item.link}>
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
                  <p>{item.level}</p>
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
                href={item.link}
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
                  <p>{item.level}</p>
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
                href={item.link}
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
                  <p>{item.level}</p>
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
                href={item.link}
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
                  <p>{item.level}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h1 className="text-lg font-semibold">Master 2</h1>
          <div className="flex flex-wrap gap-x-4">
            {master2.map((item, index) => (
              <Link key={index} target="blank" href={item.link}>
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
                  <p>{item.level}</p>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
