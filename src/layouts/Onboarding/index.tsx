import Box from "../../components/Box";
import Button from "../../components/Button";
import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import Row from "../../components/Row";
import Stack from "../../components/Stack";
import Text from "../../components/Text";
import FaceScan from "../../components/icons/facescan";
import Help from "../../components/icons/help";

const Onboarding = () => {
  return (
    <Box className="bg-primary-50">
      <Stack>
        <Gradient />
        <Row className="w-full justify-center pt-14 px-10">
          <FormSection />
          <FaceScanSection />
        </Row>
        <InfoSection />
      </Stack>
    </Box>
  );
};

const FormSection = () => (
  <Stack className="w-1/2 flex items-center place-content-center">
    <Box>
      <Logo />
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          First Name
        </Text>
        <Input type="text" placeholder="First Name" className="bg-white" />
      </Box>
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          Last Name
        </Text>
        <Input type="text" placeholder="Last Name" className="bg-white" />
      </Box>
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          E-Mail
        </Text>
        <Input type="text" placeholder="E-Mail" className="bg-white" />
      </Box>
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          Phone Number
        </Text>
        <Input type="text" placeholder="Phone Number" className="bg-white" />
      </Box>
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          Date of Birth
        </Text>
        <Input type="date" className="bg-white" />
      </Box>
      <Button type="submit" variant="solid" width="third">
        Register
      </Button>
    </Box>
  </Stack>
);

const FaceScanSection = () => (
  <Stack className="w-1/2 h-fit flex items-center place-content-center">
    <Box>
      <FaceScan />
    </Box>
    <Box className="pt-10 w-full">
      <Row className="justify-center">
        <Box>
          <Button type="submit" variant="solid" width="third">
            Scan Face
          </Button>
        </Box>
        <Box>
          <Help />
        </Box>
      </Row>
    </Box>
  </Stack>
);

const InfoSection = () => (
  <Stack className="p-14 text-center items-center place-content-center">
    <Box className="p-10 shadow-md rounded-md bg-white text-xl w-full ">
      <Text as="a" weight="bold" className="shadow-inner bg-white" />
      Hello, this is a registration from where you can register with a video of
      yourself! <br />
      We will use this video to create biometrics, so you get acces into the
      company and won't need to use a badge or card.
    </Box>
    <Row className="pt-14">
      <Box className="w-1/2">
        <Text as="a" />
        About UUG.Ai
      </Box>
      <Box className="w-1/2">
        <Text as="a" />
        About UUG.Ai
      </Box>
    </Row>
    <Row className="text-sm text-center w-full space-x-10">
      <Text as="a" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero
      reiciendis quae porro, voluptates odit. Culpa ipsam beatae voluptas vitae
      est repudiandae, nulla atque, reiciendis labore, voluptatibus eum dolorem!
      Id inventore quidem ipsam impedit possimus?
      <Text as="a" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corrupti
      aperiam, maiores nam nulla voluptatem enim suscipit, voluptatibus sunt,
      deserunt blanditiis? Pariatur soluta, aliquid sunt, placeat officia quis
      id libero temporibus nihil earum voluptas quasi!
    </Row>
  </Stack>
);

export default Onboarding;
