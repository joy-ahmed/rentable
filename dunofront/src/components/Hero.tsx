import React, { useState } from "react";
import { RiBuilding2Line, RiBuildingLine, RiHomeOfficeLine } from "react-icons/ri";

const Hero: React.FC = () => {
  const [activeCTA, setActiveCTA] = useState("buy");
  let placeholderText = "";
  if (activeCTA === "buy") {
    placeholderText = "Best properties to buy...";
  } else if (activeCTA === "rent") {
    placeholderText = "Find the best rental property for you...";
  }

  return (
    <section className="relative bg-[url(https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?t=st=1711817267~exp=1711820867~hmac=956bcdbf820464ea6eae465f72c71a4e24dc3fbf330bc3d69f2304945a251c16&w=1800)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-white/25 sm:bg-transparent sm:from-slate-900/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-[calc(100vh-64px)] lg:items-center lg:px-8 lg:pt-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Let us find your
            <strong className="block font-extrabold text-cyan-500">
              {" "}
              Sweet Destination.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8">
            <div className="flex gap-1 text-white">
              <button
                onClick={() => setActiveCTA("buy")}
                className={`inline-block ${
                  activeCTA === "buy"
                    ? "bg-cyan-600 text-white"
                    : "border border-cyan-600"
                } px-8 py-3 text-sm font-medium rounded `}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveCTA("rent")}
                className={`inline-block ${
                  activeCTA === "rent"
                    ? "bg-cyan-600 text-white"
                    : "border border-cyan-600"
                } px-8 py-3 text-sm font-medium rounded`}
              >
                Rent
              </button>
            </div>
            <form className="flex flex-col md:flex-row border border-cyan-500">
              <input
                required
                type="text"
                placeholder={placeholderText}
                className="border border-cyan-300 px-4 py-4 text-sm font-medium flex-grow"
              />
              <input
                type="text"
                placeholder={"Min Price"}
                className="border border-cyan-300 px-4 py-4 text-sm font-medium md:w-32"
              />
              <input
                type="text"
                placeholder={"Max Price"}
                className="border border-cyan-300 px-4 py-4 text-sm font-medium md:w-32"
              />
              <button
                type="submit"
                className="inline-block bg-cyan-600 text-white px-5 py-3 text-sm font-medium"
              >
                <i className="ri-search-2-line text-lg"></i>
              </button>
            </form>
            <div className="mt-4 flex gap-4">
              <div className="flex items-center gap-1">
                <RiBuildingLine className="text-white text-xl" />
                <p className="text-white">100+ Apertments </p>
              </div>
              <div className="flex items-center gap-1">
                <RiBuilding2Line className="text-white text-xl" />
                <p className="text-white">100+ Office </p>
              </div>
              <div className="flex items-center gap-1">
                <RiHomeOfficeLine className="text-white text-xl" />
                <p className="text-white">100+ Apertments </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
