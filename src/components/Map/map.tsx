import { Map, Marker } from "pigeon-maps";
import Box from "../Box";

const MyMap = () => {
  return (
    <Box>
      <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
        <Marker width={50} anchor={[50.879, 4.6997]} />
      </Map>
    </Box>
  );
};

export default MyMap;
