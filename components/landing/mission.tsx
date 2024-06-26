/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Projects() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 mx-auto mb-32">
      <h2
        data-aos="zoom-y-out"
        className="text-xl font-black md:text-5xl text-center md:leading-tight text-gray-800 dark:text-gray-200"
      >
        Qu&apos;est ce que la 2ALSY ?
      </h2>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="relative p-6 md:p-16">
          <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
              <h2
                data-aos="fade-zoom-in"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-delay="100"
                className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200"
              >
                Découvrez cette incroyable association
              </h2>

              <nav
                className="grid gap-4 mt-5 md:mt-10"
                aria-label="Tabs"
                role="tablist"
              >
                <button
                  data-aos="fade-zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="250"
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active"
                  id="tabs-with-card-item-1"
                  data-hs-tab="#tabs-with-card-1"
                  aria-controls="tabs-with-card-1"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
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
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        Plus qu&apos;ne famille pour tout AS
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        La 2ALSY est l&apos;amicale des anciens du lycée
                        scientifique de yamoussoukro. Elle se veut le lieu de
                        consolider les liens tissés depuis le lycée.
                      </span>
                    </span>
                  </span>
                </button>

                <button
                  data-aos="fade-zoom-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="500"
                  type="button"
                  className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                  id="tabs-with-card-item-2"
                  data-hs-tab="#tabs-with-card-2"
                  aria-controls="tabs-with-card-2"
                  role="tab"
                >
                  <span className="flex">
                    <svg
                      className="flex-shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
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
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                    <span className="grow ms-6">
                      <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                        Un appui à la vie estudiantine
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                        À travers son programme de mentorat et de parrainage,
                        elle se veut être le lieu où tout AS puisse trouver une
                        solution de toute nature.
                      </span>
                    </span>
                  </span>
                </button>
              </nav>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div>
                  <div
                    data-aos="fade-zoom-in"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="250"
                    id="tabs-with-card-1"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-1"
                  >
                    <img
                      className="shadow-xl shadow-gray-300 rounded-xl dark:shadow-gray-900/[.2]"
                      src="https://scontent.fabj4-2.fna.fbcdn.net/v/t39.30808-6/444479293_7447223365331694_7402616110134355579_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ow405mEUTiUQ7kNvgGGujpM&_nc_ht=scontent.fabj4-2.fna&oh=00_AYAYCwah5Rss5iiTI7d3iaM5dXRl9lLqwPAxsDjdQwMmrA&oe=665D00C6"
                      alt="Image Description"
                    />
                  </div>

                  <div
                    data-aos="fade-zoom-in"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="250"
                    id="tabs-with-card-2"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-2"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src="https://scontent.fabj4-2.fna.fbcdn.net/v/t39.30808-6/444479293_7447223365331694_7402616110134355579_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ow405mEUTiUQ7kNvgGGujpM&_nc_ht=scontent.fabj4-2.fna&oh=00_AYAYCwah5Rss5iiTI7d3iaM5dXRl9lLqwPAxsDjdQwMmrA&oe=665D00C6"
                      alt="Image Description"
                    />
                  </div>

                  <div
                    data-aos="fade-zoom-in"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="250"
                    id="tabs-with-card-3"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tabs-with-card-item-3"
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                      src="https://scontent.fabj4-2.fna.fbcdn.net/v/t39.30808-6/444479293_7447223365331694_7402616110134355579_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ow405mEUTiUQ7kNvgGGujpM&_nc_ht=scontent.fabj4-2.fna&oh=00_AYAYCwah5Rss5iiTI7d3iaM5dXRl9lLqwPAxsDjdQwMmrA&oe=665D00C6"
                      alt="Image Description"
                    />
                  </div>
                </div>

                <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                  <svg
                    className="w-16 h-auto text-orange-500"
                    width="121"
                    height="135"
                    viewBox="0 0 121 135"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                      stroke="currentColor"
                      stroke-width="10"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 grid grid-cols-12 size-full">
            <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
