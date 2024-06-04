import { useState } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Icon from "../../components/DynamicIcon";
import Gradient from "../../components/Gradient";
import Input from "../../components/Input";
import Row from "../../components/Row";
import Socials from "../../components/Socials";
import Stack from "../../components/Stack";
import Text from "../../components/Text";
import VideoCapture from "../../components/VideoCapture";
import Logo from "../../components/icons/logo";

const Onboarding = () => {
  return (
    <Box className="bg-primary-50">
      <Stack>
        <Gradient />
        <Row className="w-full pt-14 px-20 items-center">
          <FormSection />
          <FaceScanSection />
        </Row>
        <InfoSection />
      </Stack>
    </Box>
  );
};

const FormSection = () => (
  <Stack className="w-1/3 flex ">
    <Box>
      <Logo size={"lg"} className="pb-8" />
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

const FaceScanSection = () => {
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordingComplete = (recordedChunks: Blob[]) => {
    const videoBlob = new Blob(recordedChunks, { type: "video/webm" });
    console.log("Final video blob:", videoBlob);
  };

  return (
    <Stack className="w-2/3 flex items-center place-content-center">
      {isRecording}
      <Box className="w-96">
        <VideoCapture
          isRecording={isRecording}
          onRecordingComplete={handleRecordingComplete}
        />
      </Box>
      <Box className="w-1/5 relative">
        {isRecording ? (
          <Row className="place-content-center pt-8">
            <Button variant={"solid"} onClick={() => setIsRecording(false)}>
              Stop Recording
            </Button>
            <Icon type="help" className="absolute -right-5 top-5" />
          </Row>
        ) : (
          <Row className="place-content-center pt-8">
            <Button variant={"solid"} onClick={() => setIsRecording(true)}>
              Start Recording
            </Button>
            <Icon type="help" className="absolute -right-5 top-5" />
          </Row>
        )}
      </Box>
    </Stack>
  );
};

const InfoSection = () => (
  <Stack className="p-14 items-center place-content-center">
    <Box className="p-10 shadow-md rounded-md bg-white text-xl w-full ">
      <Text as="a" weight="bold" className="shadow-inner bg-white" />
      Hello, this is a registration from where you can register with a video of
      yourself! <br />
      We will use this video to create biometrics, so you get acces into the
      company and won't need to use a badge or card.
    </Box>
    <Row className="pt-14 space-x-10">
      <Box className="w-1/2">
        <Stack>
          <Text size={"lg"} weight={"bold"} className="pb-5">
            About UUFT.Ai
          </Text>
          <Text as="a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus vero reiciendis quae porro, voluptates odit. Culpa
            ipsam beatae voluptas vitae est repudiandae, nulla atque, reiciendis
            labore, voluptatibus eum dolorem! Id inventore quidem ipsam impedit
            possimus?
          </Text>
        </Stack>
      </Box>
      <Box className="w-1/2">
        <Stack>
          <Text size={"lg"} weight={"bold"} className="pb-5">
            About UUFT.Ai
          </Text>
          <Text as="a">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus vero reiciendis quae porro, voluptates odit. Culpa
            ipsam beatae voluptas vitae est repudiandae, nulla atque, reiciendis
            labore, voluptatibus eum dolorem! Id inventore quidem ipsam impedit
            possimus?
          </Text>
        </Stack>
      </Box>
    </Row>
    <Box>
      <Socials size={"lg"} className="pt-16" />
    </Box>
  </Stack>
);

export default Onboarding;
