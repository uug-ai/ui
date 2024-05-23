import { Meta, StoryObj } from "@storybook/react";
import Table, { ColumnProps } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    colors: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

type Data = {
  id: number;
  name: string;
  department: string;
};

export default meta;

type Story = StoryObj<typeof meta>;

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
];
const columns: Array<ColumnProps<Data>> = [
  {
    key: "id",
    title: "Id",
  },
  {
    key: "name",
    title: "Name",
  },
  {
    key: "department",
    title: "Department",

    // render: (_, record) => {
    //   return <div className="text-blue-500 font-bold">{record.department}</div>;
    // },
  },
];

export const Default: Story = {
  args: {
    data,
    columns,
  },
};
