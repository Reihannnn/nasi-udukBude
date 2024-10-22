const TeamBude = () => {
  return (
    <>
      <section class="py-10 bg-black  sm:py-16 lg:py-24 scroll-smooth" id="team">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-white lg:text-5xl lg:leading-tight">
              Nasduk Team
            </h2>
            <p class="max-w-2xl mx-auto mt-4 text-xl text-white">
              jajaran team dari nasi Uduk Bude
            </p>
          </div>

          <div class="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div className="relative ">
              <img
                class="w-full h-[487px] object-cover object-top"
                src="/src/assets/founder.jpg"
                alt=""
              />
              <div class="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
              <h1 className=" absolute bottom-12 left-5 text-white font-bold text-4xl">
                Ms. Yanti
              </h1>
              <h1 className=" absolute bottom-2 left-5 text-white font-bold text-1xl">
                FOUNDER, CHEF & CEO
              </h1>
            </div>

            <div className="relative ">
              <img
                class="w-full h-[487px] object-cover object-top"
                src="/src/assets/reihan.jpg"
                alt=""
              />
              <div class="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
              <h1 className=" absolute bottom-12 left-5 text-white font-bold text-4xl ">
                Mas Rei
              </h1>
              <h1 className=" absolute bottom-2 left-5 text-white font-bold text-1xl">
                CORE SUPPORT
              </h1>
            </div>

            <div className="relative z-1 bg-slate-500  ">
              <img
                class="w-full h-[487px] object-cover object-top z-0 "
                src="/src/assets/bp.jpg"
                alt=""
              />
              <div class="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
              <h1 className=" absolute bottom-12 left-5 text-white font-bold text-4xl">
                Mr. Surip
              </h1>
              <h1 className=" absolute bottom-2 left-5 text-slate-300 font-bold text-1xl ">
                TECHNICAL CLEANING
              </h1>
            </div>
          </div>

          <div class="mt-8 text-center md:mt-16">
            <h1 className="text-4xl text-white font-bold">
             Doakan supaya warung ini jadi besar, aamiin
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamBude;
