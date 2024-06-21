import Box from "../../components/Box";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";
import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
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
      <Box className="mx-7 my-4">
        <Row className="place-content-between">
          <Text size="4xl" className="mb-5">
            Locations
          </Text>
          <Text size="2xl" className="mb-5">
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
              <Stack className="bg-slate-400 w-full place-self-end h-20">
                {/* replace with KPI component when available */}
                <Text className="text-center">People</Text>
                <Text className="text-center">27 / 31</Text>
                {/* KPI */}
              </Stack>
              <Stack>
                <IconLocationAdd
                  className="self-center m-8 text-primary-950/[.7]"
                  height="6em"
                  width="6em"
                />
                <Button variant="solid" width="full" className="">
                  Add location
                </Button>
              </Stack>
            </Row>
            {/* Replace with map component when available */}
            <Stack className="bg-slate-400 w-full h-96 text-center ">
              <Text>Map</Text>
              {/* Map */}
            </Stack>
          </Stack>
        </Row>
      </Box>
    </Box>
  );
};
