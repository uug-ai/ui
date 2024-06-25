import { Map, Marker } from "pigeon-maps";

interface MapsProps {
  height: string;
  width: string;
  defaultCenter: [number, number];
  defaultZoom: number;
  markerLocation: [number, number];
}

const Maps: React.FC<MapsProps> = ({
  height,
  width,
  defaultCenter,
  defaultZoom,
  markerLocation,
}) => {
  return (
    <div style={{ height, width }}>
      <Map defaultCenter={defaultCenter} defaultZoom={defaultZoom}>
        <Marker width={50} anchor={markerLocation} />
      </Map>
    </div>
  );
};

export default Maps;
