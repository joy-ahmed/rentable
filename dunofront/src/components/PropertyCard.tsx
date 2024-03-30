import { FaBath } from "react-icons/fa";


const PropertyCard = () => {
  return (
    <div>
      <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">$240,000</dd>
            </div>

            <div>
              <dt className="sr-only">Address</dt>

              <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <i className="ri-car-fill text-cyan-500 text-lg"></i>
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Parking</p>

                <p className="font-medium">2 spaces</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <FaBath className="text-cyan-500 text-[16px]" />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Bathroom</p>

                <p className="font-medium">2 rooms</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <i className="ri-hotel-bed-fill text-cyan-500 text-lg"></i>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Bedroom</p>

                <p className="font-medium">4 rooms</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PropertyCard;
