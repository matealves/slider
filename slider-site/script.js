let totalSlides = document.querySelectorAll(".slider--item").length;
let currentSlide = 0;
let bolinha = document.getElementById("0");
let sliderWidth = document.querySelector(".slider").clientWidth;
let rolar = true;

//largura área do slide
document.querySelector(".slider--area").style.width = `${
  sliderWidth * totalSlides
}px`;
//largura e altura dos botões com base no tamanho do slide
document.querySelector(".slider--controls").style.width = `${sliderWidth}px`;
document.querySelector(".slider--controls").style.height = `${
  document.querySelector(".slider").clientHeight
}px`;

function back() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  rolar = false;
  update();
}

function next() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  rolar = false;
  update();
}

function clickBalls(item) {
  currentSlide = item;
  update();
}

function update() {
  let sliderItemWidth = document.querySelector(".slider--item").clientWidth;
  let newMargin = currentSlide * sliderItemWidth;
  document.querySelector(".slider--area").style.marginLeft = `-${newMargin}px`;

  let pointer = document.getElementById(`${currentSlide}`);
  switch (currentSlide) {
    case 0:
      document.querySelector(".active").classList.remove("active");
      pointer = document.getElementById(`${currentSlide}`);
      pointer.classList.add("active");
      break;
    case 1:
      document.querySelector(".active").classList.remove("active");
      pointer = document.getElementById(`${currentSlide}`);
      pointer.classList.add("active");
      break;
    case 2:
      document.querySelector(".active").classList.remove("active");
      pointer = document.getElementById(`${currentSlide}`);
      pointer.classList.add("active");
      break;
    case 3:
      document.querySelector(".active").classList.remove("active");
      pointer = document.getElementById(`${currentSlide}`);
      pointer.classList.add("active");
      break;
  }
}

setInterval(() => {
  if (rolar) {
    next();
  } else {
    rolar = true;
  }
}, 7000);
