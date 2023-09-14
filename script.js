const videoEle = document.querySelector("video");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    videoEle.srcObject = stream;
  });
