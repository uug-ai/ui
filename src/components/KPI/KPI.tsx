import React from "react";
import Box from "../Box";
import Stack from "../Stack";
import Text from "../Text";

interface KPIProps {
  firstValue: number;
  secondValue: number;
  label: string;
  className?: string; // Optional className prop
}

const KPI: React.FC<KPIProps> = ({
  firstValue,
  secondValue,
  label,
  className,
}) => {
  // const thirdValue = secondValue / firstValue;

  return (
    <Box className={`p-4 border rounded shadow-md text-center ${className}`}>
      <Stack className="items-center">
        <Text className="text-2xl font-semibold mb-2">{label}</Text>
        <Box className="mt-2 text-3xl font-semibold text-gray-600">
          {firstValue} / {secondValue}
        </Box>
        {/* <Text>{thirdValue}</Text> */}
      </Stack>
    </Box>
  );
};

export default KPI;
