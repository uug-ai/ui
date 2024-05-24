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
import IconUserAdd from "../../components/icons/addUser";

//TODO: Add variants for components according to styles here + fix button heights + further adjust styles
export const Dashboard = ({
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
    <Box>
      <Gradient />
      <Stack className="gap-12 p-8">
        <Row className="justify-between">
          <Text as="h1" size="5xl" weight="semibold">
            Dashboard
          </Text>
          <Text as="h2" size="4xl" weight="semibold">
            Organization
          </Text>
        </Row>
        <Row className="justify-between gap-4 h-60">
          <Stack className="basis-1/2">
            <Text as="h3" size="2xl" weight="semibold">
              Locations
            </Text>
            <Table
              columns={locationColumns}
              data={locationData}
              size="md"
              colors="primary"
            />
          </Stack>
          <Stack className="border-2 rounded-lg border-box items-end basis-1/4 place-self-end justify-end">
            <IconLocationAdd className="self-center m-8 grow" />
            <Button variant="solid" width="full" className="">
              Add location
            </Button>
          </Stack>
          <Stack className="border-2 rounded-lg border-box basis-1/4 place-self-end justify-end">
            <IconUserAdd className="self-center m-8 grow" />
            <Button variant="solid" width="full" className="">
              Add user
            </Button>
          </Stack>
        </Row>
        <Box className="w-full">
          <Row className="justify-between gap-4">
            <Text as="h3" size="2xl" weight="semibold" className="basis-1/2">
              Users
            </Text>
            <Row className="basis-1/2 gap-4">
              <Dropdown
                options={[{ value: "filter", label: "Filter" }]}
                className="border-2 rounded-[5px]"
              />
              <Input placeholder="search..." />
            </Row>
          </Row>
          <Table columns={columns} data={data} size="md" colors="primary" />
        </Box>
      </Stack>
    </Box>
  );
};
