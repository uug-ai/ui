import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

interface VideoCaptureProps {
  isRecording: boolean;
  onRecordingComplete: (recordedChunks: Blob[]) => void;
}

const VideoCapture: React.FC<VideoCaptureProps> = ({
  isRecording,
  onRecordingComplete,
}) => {
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  const handleDataAvailable = useCallback(({ data }: BlobEvent) => {
    if (data.size > 0) {
      setRecordedChunks((prev: Blob[]) => prev.concat(data));
    }
  }, []);

  useEffect(() => {
    if (isRecording) {
      if (webcamRef.current && webcamRef.current.stream) {
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
          mimeType: "video/webm",
        });
        mediaRecorderRef.current.addEventListener(
          "dataavailable",
          handleDataAvailable
        );
        mediaRecorderRef.current.start();
      }
    } else {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
    }
  }, [isRecording, handleDataAvailable]);

  useEffect(() => {
    if (!isRecording && recordedChunks.length > 0) {
      onRecordingComplete(recordedChunks);
      setRecordedChunks([]); // Clear chunks after handling
    }
  }, [isRecording, recordedChunks, onRecordingComplete]);

  return <Webcam audio={true} ref={webcamRef} />;
};

export default VideoCapture;
