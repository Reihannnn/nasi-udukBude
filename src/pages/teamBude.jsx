import momPicture from "/src/assets/founder.jpg"
import masReiPicture from "/src/assets/reihan.jpg"
import dadPicture from "/src/assets/bp.jpg"



const TeamBude = () => {
  return (
    <>
      <section className="py-10 bg-black  sm:py-16 lg:py-24 scroll-smooth" id="team">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white lg:text-5xl lg:leading-tight">
              Nasduk Team
            </h2>
            <p class="max-w-2xl mx-auto mt-4 text-xl text-white">
              jajaran team dari nasi Uduk Bude
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div className="relative ">
              <img
                className="w-full h-[487px] object-cover object-top"
                src={momPicture}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
              <h1 className=" absolute bottom-12 left-5 text-white font-bold text-4xl">
                Ms. Yanti
              </h1>
              <h1 className=" absolute bottom-2 left-5 text-white font-bold text-1xl">
                FOUNDER, CHEF & CEO
              </h1>
            </div>

            <div className="relative ">
              <img
                className="w-full h-[487px] object-cover object-top"
                src= {masReiPicture}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
              <h1 className=" absolute bottom-12 left-5 text-white font-bold text-4xl ">
                Mas Rei
              </h1>
              <h1 className=" absolute bottom-2 left-5 text-white font-bold text-1xl">
                CORE SUPPORT
              </h1>
            </div>

            <div className="relative z-1 bg-slate-500  ">
              <img
                className="w-full h-[487px] object-cover object-top z-0 "
                src={dadPicture}
                alt=""
              />
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
              <h1 className=" absolute bottom-12 left-5 text-white font-bold text-4xl">
                Mr. Surip
              </h1>
              <h1 className=" absolute bottom-2 left-5 text-slate-300 font-bold text-1xl ">
                TECHNICAL CLEANING
              </h1>
            </div>
          </div>

          <div className="mt-8 text-center md:mt-16">
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
