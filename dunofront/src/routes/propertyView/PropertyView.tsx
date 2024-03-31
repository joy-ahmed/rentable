import { RiMapPin2Line } from "react-icons/ri";
import SliderImage from "../../components/SliderImage";
import { singlePostData as data } from "../../lib/data";
import { userData as user } from "../../lib/data";
import Aminities from "../../components/Aminities";

function PropertyView() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-5">
      <div className="h-screen col-span-3">
        {/* image container */}
        <div className="px-4 py-2">
          <SliderImage images={data.images} />
        </div>
        <div className="mt-4">
          <div className="px-4 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold">{data.title}</h1>
              <p className="flex items-center gap-2">
                <RiMapPin2Line />
                {data.address}
                </p>
              <p className="px-2 bg-cyan-100 self-start font-semibold text-lg">£{data.price}</p>
            </div>
            <div className="">
              <img
                className="w-[60px] h-[60px] object-cover rounded-full h-80px]"
                src={user.img}
                alt=""
              />
              <p>{user.name}</p>
            </div>
          </div>
        </div>
        <div className="px-4 mt-4">
          <p>{data.description}</p>
        </div>
      </div>
      <div className="h-screen col-span-2">
        <Aminities items={data} />
      </div>
    </div>
  );
}

export default PropertyView;
