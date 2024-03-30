import { Link } from "react-router-dom";

type ListCardProps = {
  id: number;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
};

const ListCard = ({ item }: { item: ListCardProps }) => {
  return (
    <div className="py-4">
      <div className="flex gap-4">
        <div className="max-w-[200px] max-h-[200px] ">
         <Link to={`/properties/${item.id}`}>
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg"
          />
          </Link>
        </div>
        <div className="">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm">{item.address}</p>
          <p className="text-sm">£{item.price}</p>
          <div className="flex gap-2">
            <p className="text-sm p-1 rounded bg-slate-300">
              {item.bedroom} Bedroom
            </p>
            <p className="text-sm p-1 rounded bg-slate-300">
              {item.bathroom} Bathroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
