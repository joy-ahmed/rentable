import PropertiesByCityCard from "./PropertiesByCityCard";

const PropertiesListByCity = () => {
  return (
    <div className="w-full bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto pb-12">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Properties by cities</h2>
            <p>Discover properties by cities which match your needs</p>
          </div>
          <a
            href="#"
            className="flex gap-2 items-center bg-cyan-100 px-4 py-2 rounded-full group text-cyan-500 font-semibold"
          >
            <span>Discover all cities</span>
            <i className="ri-arrow-right-up-line transition text-2xl group-hover:-translate-y-0.5"></i>
          </a>
        </div>

        <hr className="mt-4" />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="md:overflow-x-auto grid md:grid-flow-col gap-4 custom-scrollbar pb-2">
          <PropertiesByCityCard />
          <PropertiesByCityCard />
          <PropertiesByCityCard />
          <PropertiesByCityCard />
          <PropertiesByCityCard />
          <PropertiesByCityCard />
        </div>
      </div>
    </div>
  );
};

export default PropertiesListByCity;
