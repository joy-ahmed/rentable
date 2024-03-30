const PropertiesByCityCard = () => {
  return (
    <div className="border border-cyan-500 p-2 rounded sm:w-[250px]">
      <a href="#" className="block">
        <img
          alt=""
          src="/Dhaka.jpg"
          className="h-64 w-full object-cover lg:max-h-64"
        />

        <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
          Dhaka.
        </h3>

        <p className="mt-2 max-w-sm text-gray-700">
          24 properties
        </p>
      </a>
    </div>
  );
};

export default PropertiesByCityCard;
