import React, { useState, useRef } from "react";
import "./Component.css";
import ComponentCart from "../Cart/ComponentCart";

export default function VoiceRecord() {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const mediaRecorder = useRef(null);
  const audioRef = useRef(null);

  const startRecording = () => {
    const stream = navigator.mediaDevices.getUserMedia({ audio: true });

    stream
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.current.ondataavailable = (e) => {
          chunks.push(e.data);
        };

        mediaRecorder.current.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/wav" });
          setAudioBlob(blob);
        };

        mediaRecorder.current.start();
        setRecording(true);
      })
      .catch((err) => {
        console.error("Error accessing microphone:", err);
      });
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state !== "inactive") {
      mediaRecorder.current.stop();
      setRecording(false);
    }
  };

  const downloadAudio = () => {
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "recorded_audio.wav";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  return (
    <div>
      <ComponentCart mainText="Voice Record" bodyText="Voice Record...." />
      <div className="ComponentBody">
        <div>
          <h2>Voice Recorder</h2>
          <audio ref={audioRef} controls />
          <div>
            {recording ? (
              <button onClick={stopRecording}>Stop Recording</button>
            ) : (
              <button onClick={startRecording}>Start Recording</button>
            )}
            {audioBlob && (
              <button onClick={downloadAudio}>Download Audio</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
