"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 02',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 03',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

const seleccionado = document.getElementById("items");
const imagenSelect = document.getElementById("displayImage");
const fotografoSelect = document.getElementById("photographer");
const descripcionSelect = document.getElementById("description");
const votos = document.getElementById("score");
const increaseBtn = document.getElementById("increaseScore");
const decreaseBtn = document.getElementById("decreaseScore");

let keyCurrent = null;

window.addEventListener("DOMContentLoaded", () => {
  // Rellenar el select con los nombres de los ítems
  for (const key in itemData) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = itemData[key].name;
    seleccionado.appendChild(option);
  }

  seleccionado.addEventListener("change", () => {
    keyCurrent = seleccionado.value;
    const selectedItem = itemData[keyCurrent];

    imagenSelect.src = selectedItem.image;
    fotografoSelect.value = selectedItem.photographer;
    descripcionSelect.value = selectedItem.description;
    votos.value = selectedItem.score;
  });

  increaseBtn.addEventListener("click", () => {
    if (keyCurrent) {
      itemData[keyCurrent].score++;
      votos.value = itemData[keyCurrent].score;
    }
  });

  decreaseBtn.addEventListener("click", () => {
    if (keyCurrent) {
      itemData[keyCurrent].score--;
      votos.value = itemData[keyCurrent].score;
    }
  });
});