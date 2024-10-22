const MenuPage = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24" id="menu">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              MENU
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              porro sapiente cumque recusandae, iste unde dolor delectus quis
              facilis est sunt consequatur ipsa doloribus excepturi consectetur
              dolores quas deleniti. Perspiciatis?
            </p>
          </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="relative">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-[250px]"
                    src="https://i.pinimg.com/736x/23/ed/d0/23edd0b146ffc32ab856ea9c1d1fcf94.jpg"
                    alt=""
                  />
                </a>
              </div>

              <p className="mt-5 text-2xl font-semibold">
                <a href="#" title="" className="text-black">
                  Nasi uduk
                </a>
              </p>
              <p className="mt-4 text-base text-gray-600">
                Nasi uduk, hidangan gurih khas Indonesia, cocok dinikmati kapan
                saja. Kami menyajikannya dengan resep tradisional yang kaya
                rasa, lengkap dengan lauk seperti ayam goreng dan tempe, praktis
                untuk gaya hidup modern.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="relative">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-[250px]"
                    src="https://i.pinimg.com/564x/03/3a/df/033adf996be0bb79959f1b088225096c.jpg"
                    alt=""
                  />
                </a>

                <div className="absolute top-4 left-4"></div>
              </div>

              <p className="mt-5 text-2xl font-semibold">
                <a href="#" title="" className="text-black">
                  jengkol
                </a>
              </p>
              <p className="mt-4 text-base text-gray-600">
                ini adalah menu paling rekomendasi di warung kami, kenapa ?? ya
                karena lezat sp delicious
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
              <div className="relative">
                <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                  <img
                    className="object-cover w-full h-[250px]"
                    src="https://i.pinimg.com/236x/58/82/0a/58820af8e9915e5064fba9ea2aec9d5e.jpg"
                    alt=""
                  />
                </a>

                <div className="absolute top-4 left-4"></div>
              </div>
              <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"></span>
              <p className="mt-5 text-2xl font-semibold">
                <a href="#" title="" className="text-black">
                  Aneka lauk
                </a>
              </p>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
