import {
  RiHotelBedFill,
  RiLayout2Line,
  RiShakeHandsFill,
  RiToolsFill,
} from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import Map from "./Map";

function Aminities() {
  return (
    <div>
      <div className="">
        <h3 className="text-xl font-semibold p-4">General</h3>
        <div className="px-4">
          <div className="flex flex-col gap-4 bg-yellow-50 p-4 rounded">
            <div className="flex gap-2">
              <RiToolsFill className="text-2xl" />
              <div className="">
                <p className="font-semibold leading-5">Utilities</p>
                <p className="text-sm leading-4">Agent is responsible</p>
              </div>
            </div>
            <div className="flex gap-2">
              <MdOutlinePets className="text-2xl" />
              <div className="">
                <p className="font-semibold leading-5">Pet Policies</p>
                <p className="text-sm leading-4">All kinda pet allowed</p>
              </div>
            </div>
            <div className="flex gap-2">
              <RiShakeHandsFill className="text-2xl" />
              <div className="">
                <p className="font-semibold leading-5">Property Fees</p>
                <p className="text-sm leading-4">Negotiable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* room details */}
      <div className="">
        <h3 className="text-xl font-semibold px-4 pt-8 pb-2">Room Details</h3>
        <div className="flex flex-wrap flex-col lg:flex-row gap-4 px-4 rounded">
          <div className="flex items-center bg-yellow-50 px-6 py-4 rounded-md gap-2">
            <RiLayout2Line className="text-cyan-500 text-lg" />
            <div className="">
              <p className="leading-5">80sqm (861 sqft)</p>
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-6 py-4 rounded-md gap-2">
            <RiHotelBedFill className="text-cyan-500 text-lg" />
            <div className="">
              <p className="leading-5">2 Bedroom</p>
            </div>
          </div>
          <div className="flex items-center bg-yellow-50 px-6 py-4 rounded-md gap-2">
            <FaBath className="text-cyan-500" />
            <div className="">
              <p className="leading-5">2 Bathroom</p>
            </div>
          </div>
        </div>
      </div>
      {/* map  */}
      <div className=" h-[400px] max-h-[400px] mt-12">
        <Map items={[]} containerHeight="h-[400px]" />
      </div>
    </div>
  );
}

export default Aminities;
