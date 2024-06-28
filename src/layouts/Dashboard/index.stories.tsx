import { Meta, StoryObj } from "@storybook/react";
import { Dashboard } from ".";
import { ColumnProps } from "../../components/Table/Table";
import Text from "../../components/Text";

const meta: Meta<typeof Dashboard> = {
  title: "Layout/Dashboard",
  component: Dashboard,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Data = {
  id: number;
  name: string;
  department: string;
};

type locationData = {
  id: number;
  name: string;
};

const data: Array<Data> = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Marketing",
  },
  {
    id: 3,
    name: "Mike Johnson",
    department: "Sales",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    department: "Finance",
  },
  {
    id: 5,
    name: "David Lee",
    department: "Operations",
  },
  {
    id: 6,
    name: "Emily Wilson",
    department: "Human Resources",
  },
  {
    id: 7,
    name: "Michael Brown",
    department: "IT",
  },
  {
    id: 8,
    name: "Jessica Davis",
    department: "Customer Service",
  },
  {
    id: 9,
    name: "Andrew Miller",
    department: "Product Management",
  },
  {
    id: 10,
    name: "Olivia Clark",
    department: "Research and Development",
  },
  {
    id: 11,
    name: "Daniel Taylor",
    department: "Quality Assurance",
  },
];
const columns: Array<ColumnProps<Data>> = [
  {
    key: "id",
    title: "Id",
  },
  {
    key: "name",
    title: "Name",

    render: (_, record) => {
      return (
        <Text as="a" href="" className="">
          {record.name}
        </Text>
      );
    },
  },
  {
    key: "department",
    title: "Department",
  },
];

const locationData: Array<locationData> = [
  {
    id: 1,
    name: "Location 1",
  },
  {
    id: 2,
    name: "Location 2",
  },
  {
    id: 3,
    name: "Location 3",
  },
  {
    id: 4,
    name: "Location 4",
  },
  {
    id: 5,
    name: "Location 5",
  },
  {
    id: 6,
    name: "Location 6",
  },
  {
    id: 7,
    name: "Location 7",
  },
  {
    id: 8,
    name: "Location 8",
  },
];

const locationColumns: Array<ColumnProps<locationData>> = [
  {
    key: "name",
    title: "Locations",
  },
];

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    locationColumns,
    locationData,
    data,
    columns: columns as Array<ColumnProps<unknown>>,
  },
};
