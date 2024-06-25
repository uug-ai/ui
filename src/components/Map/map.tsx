import { Map, Marker } from "pigeon-maps";
import Box from "../Box";

export const Maps = ({
  height,
  defaultCenter,
  defaultZoom,
  markerLocation,
}: {
  height: number;
  defaultCenter: [number, number];
  defaultZoom: number;
  markerLocation: [number, number];
}) => {
  return (
    <Box className="w-full">
      <Map
        height={height}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <Marker width={50} anchor={markerLocation} />
      </Map>
    </Box>
  );
};

export default Maps;
