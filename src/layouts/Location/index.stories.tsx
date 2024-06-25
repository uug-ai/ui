import { Meta, StoryObj } from "@storybook/react";
import { Location } from ".";
import { ColumnProps } from "../../components";

const meta: Meta<typeof Location> = {
  title: "Layout/Location",
  component: Location,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type locationData = {
  id: number;
  name: string;
};

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
  {
    id: 9,
    name: "Location 9",
  },
  {
    id: 10,
    name: "Location 10",
  },
  {
    id: 11,
    name: "Location 11",
  },
  {
    id: 12,
    name: "Location 12",
  },
  {
    id: 13,
    name: "Location 13",
  },
  {
    id: 14,
    name: "Location 14",
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
  },
};
