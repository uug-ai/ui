import React from "react";
import Box from "../../components/Box";
import Row from "../../components/Row";
import Socials from "../../components/Socials";
import Stack from "../../components/Stack";
import Text from "../../components/Text";
import IconDashboard from "../../components/icons/dashboard";
import IconHistory from "../../components/icons/history";
import IconLogOut from "../../components/icons/logout";
import IconNotification from "../../components/icons/notification";
import IconProfile from "../../components/icons/profile";

const Navigation: React.FC = () => {
  return (
    <Box className="border max-h-screen m-0 p-0">
      <Stack>
        <Box className="w-full h-screen">
          <Box className="h-1/6 p-7 bg-slate-500">
            <Text className="text-white text-lg weight-thin">UUFT.AI</Text>
          </Box>
          <Box className="h-3/5 bg-slate-100">
            <a href="#" className="hover:bg-sky-700">
              <Row className="pt-6">
                <IconDashboard className="ml-5" />
                <Text as="a" weight={"bold"} className="pl-2 pr-10">
                  Dashboard
                </Text>
                <IconNotification className="mr-2 text-red-500" />
              </Row>
            </a>
            <Row className="pt-6">
              <IconHistory className="ml-5" />
              <Text as="a" weight={"bold"} className="pl-2 pr-10">
                History
              </Text>
            </Row>
            <Row className="pt-6">
              <IconDashboard className="ml-5" />
              <Text as="a" weight={"bold"} className="pl-2 pr-10">
                Cameras
              </Text>
            </Row>
            <Row className="pt-6">
              <IconDashboard className="ml-5" />
              <Text as="a" weight={"bold"} className="pl-2 pr-10">
                Insights
              </Text>
            </Row>
          </Box>
          <Box className="bg-slate-100">
            <Row className="pt-6">
              <Socials className="pl-5 pb-5 gap-2 text-xs" />
            </Row>
          </Box>
          <Box className="bg-slate-500 h-1/6">
            <Stack>
              <Row className="pt-6 place justify-between">
                <IconProfile className="ml-5 text-white text-lg" />
                <Text
                  as="a"
                  weight={"bold"}
                  className="pl-2 pr-16 text-white text-lg"
                >
                  Profile
                </Text>
                <IconLogOut className="mr-2 text-white text-lg" />
              </Row>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Navigation;
