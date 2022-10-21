const modelViewer = document.querySelector('model-viewer');
console.log(modelViewer.activateAR)
modelViewer.addEventListener('load', () => {
  modelViewer.activateAR();
});