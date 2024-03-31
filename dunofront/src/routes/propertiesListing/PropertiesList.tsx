import { listData } from "../../lib/data";
import ListCard from "../../components/ListCard";
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import Map from "../../components/Map";

const PropertiesList = () => {
  const data = listData;
  return (
    <div className="h-screen md:overflow-y-hidden">
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="rounded-lg lg:col-span-3">
            <div className="">
              <h3 className="text-xl font-bold py-2 px-8">Search For</h3>
              <Filter />
            </div>
            <hr className="my-4" />
            <div className="px-8">
              <h3 className="text-xl font-bold">Properties</h3>
              <hr className="my-4" />

              <div className="overflow-y-scroll max-h-[600px]">
                {data.map((item) => (
                  <ListCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="h-[90vh] my-auto overflow-hidden rounded-lg bg-gray-200 lg:col-span-2">
            <Map items={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
