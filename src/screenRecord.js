import React, { useRef, useState } from "react";
import useScreenRecorder from "use-screen-recorder";
import axios from "axios";

const App = () => {
  const {
    startRecording,
    pauseRecording,
    blobUrl,
    blob,
    resetRecording,
    resumeRecording,
    status,
    stopRecording,
  } = useScreenRecorder({ audio: true });

  const [uploadProgress, updateUploadProgress] = useState(0);

  const videoRef = useRef();

  const handleFileUpload = (e) => {
    e.preventDefault();

    // setUploading(true);
    const formData = new FormData();
    formData.append("video", blob);

    axios({
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
      url: "http://localhost:8000/api/save",
      onUploadProgress: (ev) => {
        const progress = (ev.loaded / ev.total) * 100;
        updateUploadProgress(Math.round(progress));
      },
    })
      .then((resp) => {
        resetRecording();
        videoRef.current.load();
      })
      .catch((err) => console.error(err));
  };

  const onStopRecord = (e) => {
    stopRecording();
    handleFileUpload(e);
  };

  return (
    <div id="container">
      <p>{blobUrl}</p>
      <p>{uploadProgress}</p>
      {/* <button onClick={handleFileUpload}>Upload</button> */}
      <div className="wrapper">
        <div>
          <video
            ref={videoRef}
            src={blobUrl}
            poster={process.env.PUBLIC_URL + "/logo192.png"}
            controls
            autoPlay
          />
        </div>

        <div className="buttons">
          {(status === "idle" || status === "error") && (
            <button onClick={startRecording}>Start recording</button>
          )}
          {(status === "recording" || status === "paused") && (
            <button onClick={onStopRecord}>Stop recording</button>
          )}
          {(status === "recording" || status === "paused") && (
            <button
              onClick={() =>
                status === "paused" ? resumeRecording() : pauseRecording()
              }
            >
              {status === "paused" ? "Resume recording" : "Pause recording"}
            </button>
          )}
          {status === "stopped" && (
            <button
              onClick={() => {
                resetRecording();
                videoRef.current.load();
              }}
            >
              Reset recording
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
