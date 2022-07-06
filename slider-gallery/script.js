let balls = document.querySelector(".balls");
let qtd = document.querySelectorAll(".slider--area .slider--item");
let area = document.querySelector(".slider--area");
let slideWidth = document.querySelector(".slide");
let back = document.getElementById("back");
let next = document.getElementById("next");
let atual = 0;
let rolar = true;

//calcula a largura do slide * quantidade de imagens
area.style.width = `calc(${slideWidth.clientWidth}px * ${qtd.length})`;

for (let i = 0; i < qtd.length; i++) {
  let div = document.createElement("div");
  div.id = i;
  balls.appendChild(div);
}

document.getElementById("0").classList.add("imgAtual");

let pos = document.querySelectorAll(".balls div");

for (let i = 0; i < pos.length; i++) {
  pos[i].addEventListener("click", () => {
    atual = pos[i].id;
    rolar = false;
    slide();
  });
}

back.addEventListener("click", () => {
  atual--;
  rolar = false;
  slide();
});
next.addEventListener("click", () => {
  atual++;
  rolar = false;
  slide();
});

function slide() {
  if (atual >= qtd.length) {
    atual = 0;
  } else if (atual < 0) {
    atual = qtd.length - 1;
  }
  //calcula a margin pela largura atual do slide(responsivo) * slide atual(index)
  let margin = slideWidth.clientWidth * atual;
  document.querySelector(".imgAtual").classList.remove("imgAtual");
  area.style.marginLeft = `-${margin}px`;
  document.getElementById(atual).classList.add("imgAtual"); // busca id pela let atual
}

setInterval(() => {
  if (rolar) {
    atual++;
    slide();
  } else {
    rolar = true;
  }
}, 5000);
