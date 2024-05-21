const buttons = document.getElementById("buttons");
const bc1 = document.getElementById("bc-1");
const bc2 = document.getElementById("bc-2");
const draggableButton = bc1.getElementsByClassName("button")[0];
const cameraButton = bc2.getElementsByClassName("button")[0];
const fileInput = document.querySelector("input");
const canvas = document.getElementById("canvas");
const img = document.getElementById('image');
const o = document.getElementById("o");
console.log(img)

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
    const imageUrl = URL.createObjectURL(files[0]);
    console.log(img)
    img.src = imageUrl;
    bc1.classList.add("hide-bc-1");
    bc2.classList.add("hide-bc-2");
    setTimeout(() => {
      buttons.classList.add("disabled");
      bc1.classList.remove("hide-bc-1");
      bc2.classList.remove("hide-bc-2");
      img.classList.remove("disabled");
    }, 500)
    console.log('File selected:', files[0]);
    // Puedes realizar acciones adicionales con el archivo aquí
  }
});

cameraButton.addEventListener('click', (event) => {
  bc1.classList.add("hide-bc-1");
  bc2.classList.add("hide-bc-2");
  setTimeout(() => {
    buttons.classList.add("disabled");
    bc1.classList.remove("hide-bc-1");
    bc2.classList.remove("hide-bc-2");
    canvas.classList.remove("disabled");
  }, 500)
});