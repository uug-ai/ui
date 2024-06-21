import React from "react";
import Box from "../Box";
import Stack from "../Stack";
import Text from "../Text";

interface KPIProps {
  firstValue: number;
  secondValue: number;
  label: string;
}

const KPI: React.FC<KPIProps> = ({ firstValue, secondValue, label }) => {
  // const thirdValue = secondValue / firstValue;

  return (
    <Box className="p-4 border rounded shadow-md">
      <Stack>
        <Text className="text-lg font-semibold mb-2">{label}</Text>
        <Box className="mt-2 text-sm text-gray-600 text-center">
          {firstValue} / {secondValue}
        </Box>
        {/* <Text>{thirdValue}</Text> */}
      </Stack>
    </Box>
  );
};

export default KPI;
