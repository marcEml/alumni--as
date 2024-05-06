"use client";

export default function CorroView() {
  const licence1 = [
    "Tronc commun SRIT",
    "TWIN",
  ];

  const licence2 = [
    "SRIT",
    "SIGL",
    "RTEL",
    "TWIN",
  ];

  const licence3 = [
    "SRIT",
    "SIGL",
    "RTEL",
    "TWIN",
  ];

  const master1 = [
    "Info",
    "SIGL",
    "SITW",
    "BIHAR",
    "MBDS",
    "MDSI",
    "ERISE",
  ];

  const master2 = [
    "Info",
    "SIGL",
    "SITW",
    "BIHAR",
    "MBDS",
    "MDSI",
    "ERISE",
  ];

  return (
    <div className="w-full">
      <div className="px-6 pt-5 pb-2 border-b-2 border-gray-100">
        <h1 className="font-bold text-lg text-blue-700">Le corro</h1>
      </div>

      <div className="px-6 py-2 mt-6">
        <div>
          <h1 className="text-lg font-semibold">Licence 1</h1>
          <div className="flex flex-wrap gap-x-4">
            {licence1.map((item, index) => (
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
        
        <div className="mt-8">
          <h1 className="text-lg font-semibold">Licence 2</h1>
          <div className="flex flex-wrap gap-x-4">
            {licence2.map((item, index) => (
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
        
        <div className="mt-8">
          <h1 className="text-lg font-semibold">Licence 3</h1>
          <div className="flex flex-wrap gap-x-4">
            {licence3.map((item, index) => (
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
        
        <div className="mt-8">
          <h1 className="text-lg font-semibold">Master 1</h1>
          <div className="flex flex-wrap gap-x-4">
            {master1.map((item, index) => (
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
        
        <div className="mt-8">
          <h1 className="text-lg font-semibold">Master 2</h1>
          <div className="flex flex-wrap gap-x-4">
            {master2.map((item, index) => (
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
