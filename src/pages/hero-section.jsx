import { Link } from "react-router-dom";

const Example = () => {
  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 h-screen ">
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-shrink-0">
              <h1 className="text-white text-3xl font-bold">
                Nasiuduk{" "}
                <span className="underline underline-offset-4">Bude</span>
              </h1>
            </div>

            <div className="md:hidden">
              <button
                type="button"
                className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
              <a
                href="#team"
                title=""
                className="font-sans text-xl font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary scroll-smooth md:scroll-auto"
              >
                <h1>Team</h1>
              </a>

              <Link to ="/pro"
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            font-normal
                            leading-7
                            transition-all
                            duration-200
                            text-white
                            text-xl
                            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                            hover:bg-white hover:text-black
                            focus:ring-offset-secondary
                        "
              >
                Tentang
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-25"
          src="/src/assets/image-hero.jpg"
          alt=""
        />
      </div>

      <div className="relative">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="w-full lg:w-2/3 xl:w-1/2">
            <h1 className="font-sans text-xl font-normal tracking-tight text-white text-opacity-70 ">
              Menerima Pesanan
            </h1>
            <p className="mt-6 tracking-tighter text-white">
              <span className="font-sans font-bold text-7xl">
                Nasi uduk paling Enak
              </span>
              <br />
              <br />
              <span className="font-serif italic font-normal text-6xl">
                Delecious uduk rice
              </span>
            </p>
            <p className="mt-7 mb-7 font-sans text-2xl font-normal text-white text-opacity-80">
              Dimulai dari Rp.7000 / pcs
            </p>

            <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
              <a
                href="#"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                role="button"
              >
                Get started
              </a>

              <a
                href="#menu"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                role="button"
              >
                Menu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Example;
