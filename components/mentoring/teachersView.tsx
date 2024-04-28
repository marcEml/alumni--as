"use client";

import { Button, Drawer } from "flowbite-react";
import { useState } from "react";

export default function TeachersView() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const math = [
    "Dr Golli",
    "Dr Coulibaly Arouna",
    "Dr pandry Ghislain",
    "Dr Coulibaly Arouna",
    "Dr Aska marcellin",
    "Dr Diop Fatou",
    "Dr Brou Pacôme",
  ];

  const physique = [
    "Mr Soro Yahafehe",
    "M Kadolotien",
    "Pr Bamba Aliou",
    "Dr Akahoule",
  ];

  const info = [
    "Dr Konan Yacinthe",
    "Dr N'drin",
    "Dr pandry Ghislain",
    "Dr Johnson Grâce",
    "M Aska Marcelin",
    "Pr Diaby moustapha",
  ];

  const eco = ["Dr Franklin", "Dr Hien clotaire", "Dr Zambe"];

  const droit = ["Dr Yeo Ladji", "Dr Zambe"];

  const Management = ["Dr Franklin", "Dr Zambe"];

  const francais = ["M Coulibaly", "Mme Coulibaly"];

  return (
    <div className="w-full">
      <div className="px-6 pt-5 pb-2 border-b-2 border-gray-100">
        <h1 className="font-bold text-lg text-blue-700">Enseignants</h1>
      </div>

      {/* <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Drawer" />
        <Drawer.Items>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our&nbsp;
            <a
              href="#"
              className="text-cyan-600 underline hover:no-underline dark:text-cyan-500"
            >
              limited-time sale
            </a>
            &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K
            top-ranked candidates and the #1 design job board.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Get access&nbsp;
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Drawer.Items>
      </Drawer> */}

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold">Mathématique</h1>
          <div className="flex flex-wrap gap-x-4">
            {math.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
                onClick={() => setIsOpen(true)}
              >
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
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold">Physique</h1>
          <div className="flex flex-wrap gap-x-4">
            {physique.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
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
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold">Informatique</h1>
          <div className="flex flex-wrap gap-x-4">
            {info.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
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
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold">Économie</h1>
          <div className="flex flex-wrap gap-x-4">
            {eco.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
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
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold">Management</h1>
          <div className="flex flex-wrap gap-x-4">
            {Management.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
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
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold">Français</h1>
          <div className="flex flex-wrap gap-x-4">
            {francais.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
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
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold">Droit</h1>
          <div className="flex flex-wrap gap-x-4">
            {droit.map((item, index) => (
              <button
                key={index}
                className="flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
