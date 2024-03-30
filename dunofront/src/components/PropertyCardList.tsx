import PropertyCard from "./PropertyCard";

const PropertyCardList = () => {
  return (
    <div className="py-24">
      <div className="pb-12">
        <div className="container mx-auto flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Properties on spot</h2>
            <p>Discover properties which match your needs</p>
          </div>
          <a
            href="#"
            className="flex gap-2 items-center bg-cyan-100 px-4 py-2 rounded-full group text-cyan-500 font-semibold"
          >
            <span>Discover all properties</span>
            <i className="ri-arrow-right-up-line transition text-2xl group-hover:-translate-y-0.5"></i>
          </a>
        </div>
        <hr className="mt-4" />
      </div>

      <div className="container mx-auto flex justify-between flex-col md:flex-row">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default PropertyCardList;
