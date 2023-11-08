let slideIndex = 0;
showSlides(); 

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide-de-transicao");
  let dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  setTimeout(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  const inputBusca = document.getElementById("busca");
  const itensDaGrade = document.querySelectorAll(".item-da-grade");

  inputBusca.addEventListener("input", function () {
    const termoBusca = inputBusca.value.toLowerCase();

    itensDaGrade.forEach((item) => {
      const titulo = item.querySelector(".titulo").textContent.toLowerCase();
      if (titulo.includes(termoBusca)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputBusca = document.getElementById("busca");
  const itensDaGrade = document.querySelectorAll(".item-da-grade");

  inputBusca.addEventListener("input", function () {
    const termoBusca = inputBusca.value.toLowerCase();

    itensDaGrade.forEach((item) => {
      const titulo = item.querySelector(".titulo").textContent.toLowerCase();
      if (titulo.includes(termoBusca)) {
        item.classList.add("mostrar"); // Adiciona classe para mostrar o item
      } else {
        item.classList.remove("mostrar"); // Remove classe para ocultar o item
      }
    });
  });
});
const audio = document.getElementById('background-audio');
const playPauseButton = document.getElementById('play-pause-button');
const muteButton = document.getElementById('mute-button');
const volumeSlider = document.getElementById('volume-slider');

playPauseButton.addEventListener('click', togglePlayPause);
muteButton.addEventListener('click', toggleMute);
volumeSlider.addEventListener('input', setVolume);

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '❚❚';
  } else {
    audio.pause();
    playPauseButton.textContent = '►';
  }
}

function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteButton.textContent = '🔊';
  } else {
    audio.muted = true;
    muteButton.textContent = '🔇';
  }
}

function setVolume() {
  audio.volume = volumeSlider.value;
}

// Defina o volume inicial para 1 (máximo)
audio.volume = 1;
