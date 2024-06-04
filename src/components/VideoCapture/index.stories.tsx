import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import VideoCapture from ".";
import Box from "../Box";
import Button from "../Button";

const meta: Meta<typeof VideoCapture> = {
  title: "Components/Video Capture",
  component: VideoCapture,
  argTypes: {
    isRecording: { control: "boolean" },
    onRecordingComplete: { action: "recordingComplete" },
  },
};

export default meta;

type Story = StoryObj<typeof VideoCapture>;

const Template: Story = {
  render: (args) => {
    const [isRecording, setIsRecording] = useState(args.isRecording);

    const handleRecordingComplete = (recordedChunks: Blob[]) => {
      const videoBlob = new Blob(recordedChunks, { type: "video/webm" });
      console.log("Final video blob:", videoBlob);
      args.onRecordingComplete(recordedChunks);
    };

    return (
      <Box>
        <VideoCapture
          isRecording={isRecording}
          onRecordingComplete={handleRecordingComplete}
        />
        <Box>
          {isRecording ? (
            <Button variant={"solid"} onClick={() => setIsRecording(false)}>
              Stop Recording
            </Button>
          ) : (
            <Button variant={"solid"} onClick={() => setIsRecording(true)}>
              Start Recording
            </Button>
          )}
        </Box>
      </Box>
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    isRecording: false,
  },
};
