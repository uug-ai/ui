import Box from "../Box";
import Icon from "../DynamicIcon";
import NavItem from "../NavigationItem";
import Row from "../Row";
import Socials from "../Socials";
import Text from "../Text";

// This is the navigation header
const NavigationHeader = () => (
  <Box className="bg-slate-500 text-white p-7">
    <Text className="text-white" size={"lg"} weight={"bold"}>
      UUFT.AI
    </Text>
  </Box>
);

// This is the navigation socials component
const NavigationSocials = () => (
  <Box>
    <Socials className="pl-5 pb-4 gap-2 text-xs bg-slate-100" />
  </Box>
);

// This is the navigation footer
const NavigationFooter = () => (
  <Box className="bg-slate-500 pb-5 items-center self-end w-full relative">
    <Row>
      <NavItem
        type="profile"
        title="Profile"
        className="text-white text-lg flex flex-row"
      />
      <Icon
        type="logout"
        className="text-white text-lg absolute right-2 top-3"
      />
    </Row>
  </Box>
);

export { NavigationFooter, NavigationHeader, NavigationSocials };
