import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import { ListCardProps } from "./ListCard";

const Map = ({ items }: { items: ListCardProps }) => {
  return (
    <MapContainer
      center={[37.27, -35.26]}
      zoom={3}
      scrollWheelZoom={true}
      className="h-screen"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item: ListCardProps) => (
        <Markers items={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
