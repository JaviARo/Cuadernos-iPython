const draggableButton = document.getElementById("bc-1").getElementsByClassName("button")[0];
const fileInput = document.querySelector("input");

window.addEventListener('dragover', (event) => {
  event.preventDefault();
  p = draggableButton.querySelector("p")
  p.innerText = "¡Suelte aquí su imagen!"
  draggableButton.classList.add("draggable")
})

window.addEventListener('dragleave', (event) => {
  event.preventDefault();
  p = draggableButton.querySelector("p")
  p.innerText = "Suba una foto de rayos X desde su dispositivo"
  draggableButton.classList.remove("draggable")
})

window.addEventListener('drop', (event) => {
  const dt = event.dataTransfer;
  const files = dt.files[0];

  if (files.length > 0) {
    fileInput.files = files;
  }
})

fileInput.addEventListener('change', (event) => {
  const files = event.target.files;
  console.log("files")
  if (files.length > 0) {
    console.log('File selected:', files[0]);
    // Puedes realizar acciones adicionales con el archivo aquí
  }
});