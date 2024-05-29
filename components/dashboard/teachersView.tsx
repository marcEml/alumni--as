/* eslint-disable @next/next/no-img-element */
"use client";

import DashboardMobileMenu from "../ui/mobile-menu.dash";
import { useState, useEffect } from "react";
import { Drawer } from "@geist-ui/core";
import { User } from "@geist-ui/icons";

export default function TeachersView() {
  const [state, setState] = useState(false);

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
                  <path
                    className="dark:stroke-white"
                    d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
                  />
                </svg>
                <span className="ml-3 text-base font-semibold">2ASLY</span>
              </div>
              <DashboardMobileMenu />
            </div>
          </div>
        </header>
      ) : null}

      <Drawer visible={state} onClose={() => setState(false)} placement="right">
        <h1 className="font-bold text-left">
          Informations sur l&apos;enseignant
        </h1>
        <Drawer.Content>
          <div className="flex items-center gap-2">
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
                <circle
                  cx="12"
                  cy="6"
                  r="4"
                  stroke="#1C274C"
                  stroke-width="1.7759999999999998"
                ></circle>{" "}
                <path
                  className="dark:stroke-white"
                  d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                  stroke="#1C274C"
                  stroke-width="1.7759999999999998"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="">Dr Golli</p>
          </div>
          <img
            className="max-w-[300px] mt-3"
            src="https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <p className="max-w-[300px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            nulla eveniet amet qui non exercitationem, dolores atque molestias
            excepturi corrupti dolorum quo cupiditate ullam culpa in asperiores
            adipisci consectetur a!
          </p>
        </Drawer.Content>
      </Drawer>

      <div className="px-6">
        <div className="md:pt-6 mb-4 pt-24 pb-2 border-b-2 border-gray-100 flex items-center justify-between">
          <h1 className="font-bold text-lg text-blue-700 dark:text-white">
            Enseignants
          </h1>
        </div>

        <div>
          <h1 className="text-lg font-semibold dark:text-white">
            Mathématique
          </h1>
          <div className="flex flex-wrap gap-x-4">
            {math.map((item, index) => (
              <button
                onClick={() => setState(true)}
                key={index}
                className="hover:bg-blue-50 dark:hover:bg-transparent duration-300 flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
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
                      className="dark:stroke-white"
                      d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M18 7V12"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M6 7V11"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M10.05 7L10 12"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M14 7V10"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="dark:text-white">{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold dark:text-white">Physique</h1>
          <div className="flex flex-wrap gap-x-4">
            {physique.map((item, index) => (
              <button
                key={index}
                className="hover:bg-blue-50 dark:hover:bg-transparent duration-300 flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
                <svg
                  className="h-5 w-5"
                  fill="#000000"
                  height="200px"
                  width="200px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path
                          className="dark:fill-white"
                          d="M408.772,256c11.582-10.037,22.114-20.062,31.393-29.927c48.223-51.27,47.031-81.631,37.538-98.073 c-9.494-16.443-35.195-32.656-103.702-16.527c-13.182,3.103-27.131,7.212-41.614,12.223c-2.902-15.049-6.317-29.183-10.221-42.151 C301.877,14.148,274.985,0,256.001,0s-45.875,14.148-66.164,81.546c-3.904,12.968-7.32,27.103-10.221,42.151 c-14.483-5.011-28.432-9.121-41.615-12.223C69.49,95.346,43.791,111.56,34.297,128.001c-9.493,16.441-10.685,46.803,37.538,98.073 c9.279,9.865,19.811,19.89,31.393,29.927c-11.582,10.037-22.114,20.062-31.393,29.927c-48.224,51.27-47.031,81.632-37.538,98.073 c6.726,11.648,21.58,23.182,54.038,23.182c13.355,0,29.693-1.954,49.664-6.655c13.182-3.103,27.131-7.212,41.615-12.223 c2.902,15.049,6.317,29.183,10.221,42.151c20.29,67.396,47.18,81.544,66.165,81.544s45.875-14.148,66.164-81.546 c3.904-12.968,7.32-27.103,10.221-42.151c14.483,5.011,28.432,9.12,41.614,12.223c19.975,4.703,36.308,6.656,49.664,6.655 c32.452,0,47.313-11.535,54.038-23.182c9.493-16.441,10.686-46.803-37.538-98.073C430.886,276.062,420.354,266.037,408.772,256z M130.819,370.014c-47.631,11.213-66.206,3.798-69.373-1.688c-3.167-5.486-0.3-25.28,33.225-60.923 c9.661-10.271,20.815-20.754,33.2-31.257c13.01,10.068,26.957,20.046,41.644,29.787c1.093,17.589,2.761,34.657,4.974,50.958 C159.199,362.364,144.545,366.783,130.819,370.014z M168.058,266.935c-5.107-3.628-10.099-7.275-14.953-10.935 c4.855-3.66,9.846-7.308,14.953-10.935c-0.048,3.633-0.076,7.277-0.076,10.935C167.982,259.658,168.01,263.303,168.058,266.935z M169.515,206.065c-14.687,9.741-28.634,19.719-41.644,29.787c-12.385-10.502-23.539-20.985-33.201-31.256 c-33.525-35.643-36.393-55.436-33.225-60.923c1.96-3.395,9.82-7.53,26.819-7.53c10.468,0,24.401,1.568,42.553,5.841 c13.726,3.231,28.381,7.65,43.67,13.123C172.275,171.408,170.607,188.477,169.515,206.065z M309.443,185.306 c-3.122-1.858-6.264-3.704-9.432-5.534c-3.168-1.828-6.338-3.626-9.509-5.401c5.696-2.609,11.35-5.109,16.947-7.482 C308.192,172.923,308.855,179.069,309.443,185.306z M219.853,90.582c14.105-46.855,29.812-59.235,36.147-59.235 c6.335,0,22.043,12.38,36.148,59.235c4.065,13.502,7.566,28.403,10.47,44.38c-15.224,6.233-30.839,13.322-46.618,21.172 c-15.779-7.848-31.394-14.938-46.617-21.171C212.287,118.986,215.789,104.084,219.853,90.582z M204.553,166.89 c5.598,2.374,11.251,4.872,16.946,7.482c-3.17,1.775-6.34,3.573-9.508,5.402c-3.168,1.828-6.31,3.674-9.432,5.532 C203.147,179.069,203.81,172.924,204.553,166.89z M202.559,326.694c3.122,1.858,6.264,3.704,9.431,5.533 c3.168,1.83,6.338,3.627,9.509,5.402c-5.696,2.609-11.349,5.107-16.946,7.483C203.81,339.077,203.148,332.931,202.559,326.694z M292.149,421.418c-14.105,46.855-29.812,59.235-36.148,59.235c-6.335,0-22.043-12.38-36.147-59.235 c-4.065-13.502-7.566-28.403-10.47-44.381c15.223-6.233,30.839-13.322,46.617-21.171c15.779,7.848,31.395,14.939,46.618,21.172 C299.715,393.014,296.214,407.916,292.149,421.418z M307.449,345.111c-5.597-2.374-11.251-4.873-16.947-7.483 c3.17-1.775,6.339-3.573,9.508-5.402c3.168-1.829,6.311-3.675,9.433-5.533C308.856,332.931,308.192,339.077,307.449,345.111z M312.011,288.338c-8.981,5.688-18.218,11.282-27.675,16.742c-9.457,5.46-18.919,10.662-28.336,15.596 c-9.417-4.935-18.879-10.137-28.337-15.596c-9.456-5.46-18.692-11.053-27.674-16.741c-0.435-10.622-0.661-21.418-0.661-32.339 c0-10.92,0.226-21.715,0.661-32.339c8.982-5.687,18.218-11.282,27.674-16.741c9.457-5.46,18.919-10.662,28.337-15.596 c9.417,4.935,18.879,10.137,28.336,15.596c9.457,5.46,18.693,11.054,27.675,16.742c0.435,10.622,0.661,21.418,0.661,32.338 C312.673,266.919,312.447,277.715,312.011,288.338z M381.184,141.986c18.154-4.274,32.086-5.841,42.555-5.841 c16.995,0,24.858,4.134,26.818,7.53c3.167,5.487,0.3,25.28-33.225,60.923c-9.661,10.271-20.815,20.754-33.2,31.257 c-13.01-10.068-26.957-20.045-41.643-29.787c-1.093-17.589-2.761-34.657-4.975-50.959 C352.802,149.636,367.458,145.217,381.184,141.986z M343.944,245.065c5.107,3.627,10.098,7.275,14.953,10.935 c-4.855,3.66-9.845,7.307-14.953,10.935c0.048-3.633,0.076-7.277,0.076-10.935C344.021,252.342,343.992,248.698,343.944,245.065z M450.556,368.327c-3.167,5.487-21.747,12.898-69.373,1.688c-13.726-3.231-28.382-7.65-43.669-13.123 c2.214-16.3,3.882-33.369,4.975-50.959c14.686-9.741,28.634-19.719,41.643-29.787c12.384,10.503,23.538,20.987,33.2,31.257 C450.856,343.046,453.724,362.841,450.556,368.327z"
                        ></path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <polygon points="274.734,244.921 255.6,233.938 236.522,245.017 236.577,267.079 255.71,278.062 274.789,266.983 "></polygon>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className="dark:text-white">{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold dark:text-white">
            Informatique
          </h1>
          <div className="flex flex-wrap gap-x-4">
            {info.map((item, index) => (
              <button
                key={index}
                className="hover:bg-blue-50 dark:hover:bg-transparent duration-300 flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
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
                      className="dark:fill-white"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.78799 2H16.212C17.0305 1.99999 17.7061 1.99998 18.2561 2.04565C18.8274 2.0931 19.3523 2.19496 19.8439 2.45035C20.5745 2.82985 21.1702 3.42553 21.5497 4.1561C21.805 4.64774 21.9069 5.17258 21.9543 5.74393C22 6.29394 22 6.96949 22 7.78802V11.212C22 12.0305 22 12.7061 21.9543 13.2561C21.9069 13.8274 21.805 14.3523 21.5497 14.8439C21.1702 15.5745 20.5745 16.1702 19.8439 16.5497C19.3523 16.805 18.8274 16.9069 18.2561 16.9544C17.7061 17 17.0305 17 16.212 17H13V19H17C17.5523 19 18 19.4477 18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20C6 19.4477 6.44772 19 7 19H11V17H7.78798C6.96946 17 6.29393 17 5.74393 16.9544C5.17258 16.9069 4.64774 16.805 4.1561 16.5497C3.42553 16.1702 2.82985 15.5745 2.45035 14.8439C2.19496 14.3523 2.0931 13.8274 2.04565 13.2561C1.99998 12.7061 1.99999 12.0305 2 11.212V7.78799C1.99999 6.96947 1.99998 6.29393 2.04565 5.74393C2.0931 5.17258 2.19496 4.64774 2.45035 4.1561C2.82985 3.42553 3.42553 2.82985 4.1561 2.45035C4.64774 2.19496 5.17258 2.0931 5.74393 2.04565C6.29393 1.99998 6.96947 1.99999 7.78799 2ZM16.17 15C17.041 15 17.6331 14.9992 18.0905 14.9612C18.536 14.9242 18.7634 14.8572 18.9219 14.7748C19.2872 14.5851 19.5851 14.2872 19.7748 13.9219C19.8572 13.7634 19.9242 13.536 19.9612 13.0905C19.9992 12.6331 20 12.041 20 11.17V7.83C20 6.95898 19.9992 6.36686 19.9612 5.90945C19.9242 5.46401 19.8572 5.23663 19.7748 5.07805C19.5851 4.71277 19.2872 4.41493 18.9219 4.22517C18.7634 4.1428 18.536 4.07578 18.0905 4.03879C17.6331 4.0008 17.041 4 16.17 4H7.83C6.95898 4 6.36686 4.0008 5.90945 4.03879C5.46401 4.07578 5.23663 4.1428 5.07805 4.22517C4.71277 4.41493 4.41493 4.71277 4.22517 5.07805C4.1428 5.23663 4.07578 5.46401 4.03879 5.90945C4.0008 6.36686 4 6.95898 4 7.83V11.17C4 12.041 4.0008 12.6331 4.03879 13.0905C4.07578 13.536 4.1428 13.7634 4.22517 13.9219C4.41493 14.2872 4.71277 14.5851 5.07805 14.7748C5.23663 14.8572 5.46401 14.9242 5.90945 14.9612C6.36686 14.9992 6.95898 15 7.83 15H16.17Z"
                      fill="#0F1729"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="dark:text-white">{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold dark:text-white">Économie</h1>
          <div className="flex flex-wrap gap-x-4">
            {eco.map((item, index) => (
              <button
                key={index}
                className="hover:bg-blue-50 dark:hover:bg-transparent duration-300 flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
                <svg
                  className="h-5"
                  fill="#000000"
                  viewBox="0 0 24 24"
                  id="yuan"
                  data-name="Flat Color"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      className="dark:fill-white"
                      id="primary"
                      d="M18,14H13V12h5a1,1,0,0,0,0-2H14l4.8-6.4a1,1,0,1,0-1.6-1.2L12,9.33,6.8,2.4A1,1,0,1,0,5.2,3.6L10,10H6a1,1,0,0,0,0,2h5v2H6a1,1,0,0,0,0,2h5v5a1,1,0,0,0,2,0V16h5a1,1,0,0,0,0-2Z"
                    ></path>
                  </g>
                </svg>
                <p className="dark:text-white">{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold dark:text-white">Management</h1>
          <div className="flex flex-wrap gap-x-4">
            {Management.map((item, index) => (
              <button
                key={index}
                className="hover:bg-blue-50 dark:hover:bg-transparent duration-300 flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
                <svg
                  className="h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g className="dark:stroke-white" id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    className="dark:stroke-white"
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle
                      className="dark:stroke-white"
                      cx="12"
                      cy="6"
                      r="4"
                      stroke="#1C274C"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M18 9C19.6569 9 21 7.88071 21 6.5C21 5.11929 19.6569 4 18 4"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M6 9C4.34315 9 3 7.88071 3 6.5C3 5.11929 4.34315 4 6 4"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M17.1973 15C17.7078 15.5883 18 16.2714 18 17C18 19.2091 15.3137 21 12 21C8.68629 21 6 19.2091 6 17C6 14.7909 8.68629 13 12 13C12.3407 13 12.6748 13.0189 13 13.0553"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M20 19C21.7542 18.6153 23 17.6411 23 16.5C23 15.3589 21.7542 14.3847 20 14"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M4 19C2.24575 18.6153 1 17.6411 1 16.5C1 15.3589 2.24575 14.3847 4 14"
                      stroke="#1C274C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="dark:text-white">{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold dark:text-white">Français</h1>
          <div className="flex flex-wrap gap-x-4">
            {francais.map((item, index) => (
              <button
                key={index}
                className="hover:bg-blue-50 dark:hover:bg-transparent duration-300 flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
              >
                <svg
                  className="h-5 w-5"
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
                      className="dark:stroke-white"
                      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="dark:text-white">{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold dark:text-white">Droit</h1>
          <div className="flex flex-wrap gap-x-4">
            {droit.map((item, index) => (
              <button
                key={index}
                className="hover:bg-blue-50 dark:hover:bg-transparent duration-300 flex items-center gap-4 mt-4 border-2 border-gray-100 rounded-lg px-4 py-2"
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
                      className="dark:stroke-white"
                      d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M18 7V12"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M6 7V11"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M10.05 7L10 12"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      className="dark:stroke-white"
                      d="M14 7V10"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="dark:text-white">{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
