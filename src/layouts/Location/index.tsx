import Box from "../../components/Box";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import KPI from "../../components/KPI/KPI";
import { Maps } from "../../components/Map/map";
import Row from "../../components/Row";
import Stack from "../../components/Stack";
import Table from "../../components/Table";
import Text from "../../components/Text";
import IconLocationAdd from "../../components/icons/addLocation";

export const Location = ({
  locationColumns,
  locationData,
  data,
  columns,
}: {
  locationColumns: any;
  locationData: any;
  data: any;
  columns: any;
}) => {
  return (
    <Box className="h-screen w-screen">
      <Gradient />
      <Box className="mx-9 mt-5">
        <Row className="place-content-between mb-10">
          <Text size="4xl" weight={"semibold"} className="mb-5">
            LOCATIONS
          </Text>
          <Text size="2xl" weight={"semibold"} className="mb-5">
            Organisation name
          </Text>
        </Row>
        <Row className="gap-8">
          <Stack className="w-1/2 gap-y-4">
            <Row className="h-7 gap-3">
              <Dropdown
                options={[{ value: "filter", label: "Filter" }]}
                className="border-2 rounded-[5px]"
              />
              <Input></Input>
              <Button />
              <Text>5/7</Text>
              <Button />
            </Row>
            <Table
              columns={locationColumns}
              data={locationData}
              size="md"
              colors="primary"
            />
          </Stack>
          <Stack className="w-1/2 gap-5">
            <Row className="gap-x-5">
              <KPI
                firstValue={27}
                secondValue={31}
                label="People"
                className="w-1/2 place-self-end h-1/6"
              />
              <Stack className="w-1/2">
                <IconLocationAdd
                  className="self-center m-8 text-primary-950/[.7]"
                  height="6em"
                  width="6em"
                />
                <Button variant="solid" width="full">
                  Add location
                </Button>
              </Stack>
            </Row>
            <Maps
              height={400}
              defaultCenter={[50.879, 4.6997]}
              defaultZoom={11}
              markerLocation={[50.879, 4.6997]}
            />
          </Stack>
        </Row>
      </Box>
    </Box>
  );
};
