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
      <Stack className="gap-12 p-8 ">
        <Row className="justify-between p-4 gap-4">
          <Text as="h1" size="5xl" weight="semibold">
            Dashboard
          </Text>
          <Text as="h2" size="4xl" weight="semibold" className="self-end">
            Organization
          </Text>
        </Row>
        <Row className="justify-between h-60 p-4 gap-4">
          {/* <Text as="h3" size="2xl" weight="semibold">
              Locations
            </Text> */}
          {/* <Box className="basis-1/2 overflow-y-scroll w-full h-full border-2 rounded-lg border-box">
            <Table
              columns={locationColumns}
              data={locationData}
              size="md"
              colors="primary"
            />
          </Box> */}

          <Stack className="basis-1/2 gap-4">
            <Box className="flex justify-center items-center w-full border-2 rounded-lg border-box basis-1/3">
              <Text
                as="h4"
                size="xl"
                weight="semibold"
                className="p-2 self-center "
              >
                Locations: 8
              </Text>
            </Box>
            <Box className="flex justify-center w-full border-2 rounded-lg border-box basis-1/3">
              <Text
                as="h4"
                size="xl"
                weight="semibold"
                className="p-2 self-center"
              >
                Users: 34
              </Text>
            </Box>
            <Box className="flex justify-center w-full border-2 rounded-lg border-box basis-1/3">
              <Text
                as="h4"
                size="xl"
                weight="semibold"
                className="p-2 self-center "
              >
                Information
              </Text>
            </Box>
          </Stack>

          <Stack className="border-2 rounded-lg border-box items-end basis-1/4 place-self-end justify-end">
            <IconLocationAdd
              className="self-center m-8 grow text-primary-950/[.7]"
              height="10em"
              width="10em"
            />
            <Button variant="solid" width="full" className="">
              Add location
            </Button>
          </Stack>
          <Stack className="border-2 rounded-lg border-box basis-1/4 place-self-end justify-end">
            <IconUserAdd
              className="self-center m-8 grow text-primary-950/[.7]"
              height="10em"
              width="10em"
            />
            <Button variant="solid" width="full" className="">
              Add user
            </Button>
          </Stack>
        </Row>
        <Stack className="p-4 bg-primary-950/[.02] rounded-lg gap-4">
          <Row className="justify-between p-0 gap-4">
            <Text as="h3" size="2xl" weight="semibold" className="basis-1/2">
              Users
            </Text>
            <Row className="basis-1/2 p-0 gap-4">
              <Dropdown
                options={[{ value: "filter", label: "Filter" }]}
                className="border-2 rounded-[5px]"
              />
              <Input placeholder="search..." />
            </Row>
          </Row>
          <Table columns={columns} data={data} size="md" colors="primary" />
        </Stack>
      </Stack>
    </Box>
  );
};
