import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Webcam from "react-webcam";
import { createFaceLandmarker, predictWebcam } from "./helpers/faceHelpers";
import { calculateDistance3D } from "./helpers/mathHelpers";
function App() {
  const [face, setFace] = useState({
    rightEyeOpenFactor:1,
    leftEyeOpenFactor:1,
    mouthOpenFactor:1,
  });
  
  setTimeout(() => {
    setFace({
      rightEyeOpenFactor:Math.random(),
      leftEyeOpenFactor:Math.random(),
      mouthOpenFactor:Math.random(),
    })
  },100)

  const webcamRef = useRef();

  console.log(webcamRef.current);

  const report = (results) => console.log(results);

  const eyeDistance = (results) => {
    if (results && results.faceLandmarks && results.faceLandmarks[0]) {
      const eyeRightTop = results.faceLandmarks[0][159];
      const eyeRightBottom = results.faceLandmarks[0][145];

      const eyeLeftTop = results.faceLandmarks[0][386];
      const eyeLeftBottom = results.faceLandmarks[0][374];

      const faceTop = results.faceLandmarks[0][10];
      const faceBottom = results.faceLandmarks[0][152];

      const mouthTop = results.faceLandmarks[0][13];
      const mouthBottom = results.faceLandmarks[0][14];

      const faceSize = calculateDistance3D(faceTop, faceBottom);
      const mouthOpenFactor =
        (calculateDistance3D(mouthTop, mouthBottom) / faceSize) * 1000 / 40;
      const rightEyeOpenFactor =
        (calculateDistance3D(eyeRightTop, eyeRightBottom) / faceSize) * 1000 / 40;
      const leftEyeOpenFactor =
        (calculateDistance3D(eyeLeftTop, eyeLeftBottom) / faceSize) * 1000 / 40;

      // console.log({ rightEyeOpenFactor, leftEyeOpenFactor, mouthOpenFactor });
      setFace({ rightEyeOpenFactor, leftEyeOpenFactor, mouthOpenFactor })
    }
  };

  const onWebcamReady = async () => {
    try {
      console.log("Webcam ready!");
      console.log("Loading the model");
      const faceLandmarker = await createFaceLandmarker();
      console.log("Model loaded!");

      // predictWebcam(faceLandmarker, true, webcamRef.current.video, eyeDistance);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="FACE">
        <div className="leftEye" style={{transform:`scaleY(${face.leftEyeOpenFactor})`}}></div>
        <div className="rightEye" style={{transform:`scaleY(${face.rightEyeOpenFactor})`}}></div>
        <div className="nose"></div>
        <div className="mouth" style={{transform:`scaleY(${face.mouthOpenFactor})`}}></div>
      </div>
      {/* <Webcam ref={webcamRef} style={{ width: 1280 }} onUserMedia={onWebcamReady} /> */}
    </>
  );
}

export default App;
