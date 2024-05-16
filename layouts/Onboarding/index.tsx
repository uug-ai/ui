import { Button, Gradient, Input, Text } from "../../components";
import FaceScan from "../../icons/facescan";
import Help from "../../icons/help";
import Logo from "../../icons/logo";
import { Box } from "../Box";
import { Row } from "../Row";
import { Stack } from "../Stack";

const Onboarding = () => {
  return (
    <Box className="bg-primary-50">
      <Stack>
        <Gradient />
        <Row className="h-screen">
          <FormSection />
          <FaceScanSection />
        </Row>
        <InfoSection />
      </Stack>
    </Box>
  );
};

const FormSection = () => (
  <Stack className="pl-10 pt-10 items-center">
    <Box>
      <Logo />
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          First Name
        </Text>
        <Input type="text" placeholder="First Name" />
      </Box>
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          Last Name
        </Text>
        <Input type="text" placeholder="Last Name" />
      </Box>
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          E-Mail
        </Text>
        <Input type="text" placeholder="E-Mail" />
      </Box>
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          Phone Number
        </Text>
        <Input type="text" placeholder="Phone Number" />
      </Box>
      <Box className="mb-4">
        <Text as="label" weight="semibold" className="mb-1">
          Date of Birth
        </Text>
        <Input type="date" />
      </Box>
      <Button type="submit" variant="solid" width="third">
        Register
      </Button>
    </Box>
  </Stack>
);

const FaceScanSection = () => (
  <Stack className="items-center place-content-center">
    <Box>
      <FaceScan />
    </Box>
    <Box>
      <Row className="pt-10">
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
  <Stack className="p-14 text-center">
    <Box className="p-10 shadow-md rounded-md bg-white text-xl">
      <Text as="a" weight="bold" className="shadow-inner bg-white" />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptates,
      quos in debitis illo architecto nesciunt obcaecati, iure eos quia dolore
      natus delectus quibusdam ab rem cumque tenetur expedita doloremque fuga
      reiciendis asperiores totam suscipit! Lorem ipsum dolor sit, amet
      consectetur adipisicing elit. Sequi voluptas perspiciatis esse minima at
      quam earum architecto neque, eos ad assumenda excepturi quisquam deleniti
      deserunt commodi eligendi saepe ex ratione illum ipsum sit. Numquam, fuga!
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
