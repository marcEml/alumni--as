/* eslint-disable @next/next/no-img-element */

"use client";

import ImageViewer from "react-simple-image-viewer";
import { SetStateAction, useCallback, useState } from "react";

export default function Top() {
  const listNews = [
    {
      title: "Excellence académique",
      content:
        "Depuis son existence, le LSY obtient chaque année des taux de reussite les plus hauts du pays",
    },
    {
      title: "Formation",
      content:
        "À travers ses formations en série C et D",
    },
    {
      title: "Cadre de vie favorable",
      content:
        "Depuis son existence, le LSY obtient chaque année des taux de reussite les plus hauts du pays",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [active, setActive] = useState(0);
  const handleChangeActive = (index: number) => {
    setActive(index);
  };

  const openImageViewer = useCallback((index: SetStateAction<number>) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="max-w-[85rem] mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2
        data-aos="zoom-y-out"
        className="h2 mb-20 dark:text-white text-center"
      >
        2ALSY-ESATIC, une reférence locale
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {listNews.map((item, index) => (
          <div key={index} className="max-w-[300px]">
            <div
              data-aos="zoom-y-out"
              data-aos-delay="450"
              className="bg-gray-100 p-9 rounded-xl space-y-3"
            >
              <div className="h-11 w-11 rounded-lg bg-orange-600 flex justify-center items-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7"
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
                      className="fill-white"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.27103 2.11151C5.46135 2.21816 5.03258 2.41324 4.72718 2.71244C4.42179 3.01165 4.22268 3.43172 4.11382 4.225C4.00176 5.04159 4 6.12387 4 7.67568V16.2442C4.38867 15.9781 4.82674 15.7756 5.29899 15.6517C5.82716 15.513 6.44305 15.5132 7.34563 15.5135L20 15.5135V7.67568C20 6.12387 19.9982 5.04159 19.8862 4.22499C19.7773 3.43172 19.5782 3.01165 19.2728 2.71244C18.9674 2.41324 18.5387 2.21816 17.729 2.11151C16.8955 2.00172 15.7908 2 14.2069 2H9.7931C8.2092 2 7.10452 2.00172 6.27103 2.11151ZM6.75862 6.59459C6.75862 6.1468 7.12914 5.78378 7.58621 5.78378H16.4138C16.8709 5.78378 17.2414 6.1468 17.2414 6.59459C17.2414 7.04239 16.8709 7.40541 16.4138 7.40541H7.58621C7.12914 7.40541 6.75862 7.04239 6.75862 6.59459ZM7.58621 9.56757C7.12914 9.56757 6.75862 9.93058 6.75862 10.3784C6.75862 10.8262 7.12914 11.1892 7.58621 11.1892H13.1034C13.5605 11.1892 13.931 10.8262 13.931 10.3784C13.931 9.93058 13.5605 9.56757 13.1034 9.56757H7.58621Z"
                      fill="#1C274D"
                    ></path>{" "}
                    <path
                      className="fill-white"
                      d="M7.47341 17.1351H8.68965H13.1034H19.9991C19.9956 18.2657 19.9776 19.1088 19.8862 19.775C19.7773 20.5683 19.5782 20.9884 19.2728 21.2876C18.9674 21.5868 18.5387 21.7818 17.729 21.8885C16.8955 21.9983 15.7908 22 14.2069 22H9.7931C8.2092 22 7.10452 21.9983 6.27103 21.8885C5.46135 21.7818 5.03258 21.5868 4.72718 21.2876C4.42179 20.9884 4.22268 20.5683 4.11382 19.775C4.07259 19.4746 4.0463 19.1382 4.02952 18.7558C4.30088 18.0044 4.93365 17.4264 5.72738 17.218C6.01657 17.1421 6.39395 17.1351 7.47341 17.1351Z"
                      fill="#1C274D"
                    ></path>{" "}
                  </g>
                </svg>
              </div>

              <h2 className="text-lg font-semibold">{item.title}</h2>

              <div className="w-9 h-[3px] bg-orange-600 rounded-lg"></div>

              <p className="text-lg">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
