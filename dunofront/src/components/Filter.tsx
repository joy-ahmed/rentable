import { RiSearch2Line } from "react-icons/ri";

const Filter = () => {
  return (
    <div>
      <form className="px-8">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name">Location</label>
          <input
            className="w-full py-1.5 rounded px-4 border text-sm mb-2"
            name="name"
            id="name"
            type="text"
          />
        </div>
        <div className="flex items-end gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="type">
              Type
            </label>
            <select
              className="w-full py-1 rounded px-2 border"
              name="type"
              id="type"
            >
              <option value="all">All</option>
              <option value="house">House</option>
              <option value="flat">Flat</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="purpose">
              Purpose
            </label>
            <select
              className="w-full py-1 rounded px-2 border"
              name="purpose"
              id="purpose"
            >
              <option value="all">All</option>
              <option value="rent">Rent</option>
              <option value="sale">Sale</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="city">
              City
            </label>
            <select
              className="w-full py-1 rounded px-2 border"
              name="city"
              id="city"
            >
              <option value="all">All</option>
              <option value="dhaka">Dhaka</option>
              <option value="chittagong">Chittagong</option>
              <option value="sylhet">Sylhet</option>
              <option value="rajshahi">Rajshahi</option>
              <option value="khulna">Khulna</option>
              <option value="barishal">Barishal</option>
              <option value="rangpur">Rangpur</option>
              <option value="mymensingh">Mymensingh</option>
            </select>
          </div>
          <button
            className="px-2 py-1 bg-cyan-500 rounded active:scale-95"
            type="submit"
          >
            <RiSearch2Line size={24} className="text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
