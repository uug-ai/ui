import Box from "../../components/Box";
import Icon from "../../components/DynamicIcon";
import {
  NavigationFooter,
  NavigationHeader,
  NavigationSocials,
} from "../../components/NavigationElements";
import NavItem from "../../components/NavigationItem";
import Row from "../../components/Row";

const Navigation = () => {
  return (
    <Box className="h-screen flex flex-col">
      <NavigationHeader />

      {/* Navigation Main (add new content here) */}
      <Box className="flex-grow bg-slate-100 overflow-auto">
        <Row>
          <NavItem type="dashboard" title="Dashboard" />
          <Icon type="notification" className="text-red-500 self-end mr-2" />
        </Row>
        <NavItem type="history" title="History" href="#" />
        <NavItem type="cameraswap" title="Camera" href="#" />
        <NavItem type="insights" title="Insights" href="#" />
      </Box>
      {/* end of Navigation main */}

      <NavigationSocials />
      <NavigationFooter />
    </Box>
  );
};

export default Navigation;
