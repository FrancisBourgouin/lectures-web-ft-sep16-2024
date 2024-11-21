import vision from "@mediapipe/tasks-vision";
let lastVideoTime = -1;
const { FaceLandmarker, FilesetResolver } = vision;

// const pg = new Client({...authr})

export async function createFaceLandmarker() {
  const runningMode = "VIDEO";
  const filesetResolver = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  const faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
    baseOptions: {
      modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
      delegate: "GPU",
    },
    outputFaceBlendshapes: true,
    runningMode,
    numFaces: 1,
  });

  return faceLandmarker;
}


export async function predictWebcam(faceLandmarker, webcamRunning, video, action) {
  let results = undefined;
  let startTimeMs = performance.now();

  if (lastVideoTime !== video.currentTime) {
    lastVideoTime = video.currentTime;
    results = faceLandmarker.detectForVideo(video, startTimeMs);
  }

  if (results && results.faceLandmarks) {
    action(results);
  }

  // Call this function again to keep predicting when the browser is ready.
  if (webcamRunning === true) {
    window.requestAnimationFrame(() =>
      predictWebcam(faceLandmarker, webcamRunning, video, action)
    );
  }
}
