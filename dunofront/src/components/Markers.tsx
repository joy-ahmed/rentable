import { FaBath } from "react-icons/fa";
import { RiHome4Fill, RiHotelBedFill } from "react-icons/ri";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import { ListCardProps } from "./ListCard";

const getIconUrl = (iconComponent: string | number | boolean | JSX.Element | Iterable<ReactNode> | null | undefined) => {
  const svgString = renderToStaticMarkup(iconComponent);
  const encodedSvg = encodeURIComponent(svgString);
  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
};

const customMarker = new L.Icon({
  iconUrl: getIconUrl(<RiHome4Fill size={32} color={"teal"} />), // Convert React icon to URL
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const Markers = ({ items }: { items: ListCardProps }) => {
  return (
    <Marker position={[items.latitude, items.longitude]} icon={customMarker}>
      <Popup>
        <div className="flex gap-2">
          <img className="w-[100px] " src={items.img} alt={items.title} />
          <div className="flex flex-col">
            <Link
              className="text-md font-semibold text-amber-400"
              to={`/properties/${items.id}`}
            >
              {items.title}
            </Link>
            <div className="flex gap-2 my-2">
              <span className="flex gap-1 bg-amber-100 p-1 rounded">
                <RiHotelBedFill className="text-amber-400" />
                {items.bedroom}
              </span>
              <span className="flex gap-1 bg-amber-100 p-1 rounded">
                <FaBath className="text-amber-400" />
                {items.bathroom}
              </span>
            </div>
            <b>£{items.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Markers;
