import { Marker, Map as PigeonMap } from "pigeon-maps";
import React from "react";
import Box from "../Box";
interface MapProps {
  height: number;
  width: number;
  defaultCenter: [number, number];
  defaultZoom: number;
  markerLocation: [number, number];
}

export const Maps: React.FC<MapProps> = ({
  height,
  width,
  defaultCenter,
  defaultZoom,
  markerLocation,
}) => {
  return (
    <Box style={{ height: `${height}px`, width: `${width}px` }}>
      <PigeonMap
        height={height}
        width={width}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <Marker width={50} anchor={markerLocation} />
      </PigeonMap>
    </Box>
  );
};

export default Maps;
