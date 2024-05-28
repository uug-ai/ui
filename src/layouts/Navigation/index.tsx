import React from "react";
import Box from "../../components/Box";
import Row from "../../components/Row";
import Socials from "../../components/Socials";
import Text from "../../components/Text";
import CameraSwap from "../../components/icons/cameraswap";
import Dashboard from "../../components/icons/dashboard";
import History from "../../components/icons/history";
import Insights from "../../components/icons/insights";
import LogOut from "../../components/icons/logout";
import Notification from "../../components/icons/notification";
import Profile from "../../components/icons/profile";

const Navigation: React.FC = () => {
  return (
    <Box className="border m-0 p-0 h-screen flex flex-col">
      <Box className="p-7 bg-slate-500 flex items-center justify-center">
        <Text className="text-white text-lg weight-thin">UUFT.AI</Text>
      </Box>
      <Box className="flex-grow bg-slate-100 overflow-auto">
        <Box>
          <a href="#" className="hover:bg-sky-700 block">
            <Row className="pt-6">
              <Dashboard className="ml-5" />
              <Text as="span" weight="bold" className="pl-2 pr-10">
                Dashboard
              </Text>
              <Notification className="mr-2 text-red-500" />
            </Row>
          </a>
          <Row className="pt-6">
            <History className="ml-5" />
            <Text as="span" weight="bold" className="pl-2 pr-10">
              History
            </Text>
          </Row>
          <Row className="pt-6">
            <CameraSwap className="ml-5" />
            <Text as="span" weight="bold" className="pl-2 pr-10">
              Cameras
            </Text>
          </Row>
          <Row className="pt-6">
            <Insights className="ml-5" />
            <Text as="span" weight="bold" className="pl-2 pr-10">
              Insights
            </Text>
          </Row>
        </Box>
      </Box>
      <Box className="bg-slate-100">
        <Row className="pt-6">
          <Socials className="pl-5 pb-5 gap-2 text-xs" />
        </Row>
      </Box>
      <Box className="bg-slate-500 flex items-center flex flex-row w-full pt-6 pb-6">
        <Profile className="text-white text-lg ml-5" />
        <Text as="a" weight="bold" className="text-white text-lg pl-2 pr-10">
          Profile
        </Text>
        <LogOut className="text-white text-lg ml-5" />
      </Box>
    </Box>
  );
};

export default Navigation;
