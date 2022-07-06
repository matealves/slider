let balls = document.querySelector(".balls");
let qtd = document.querySelectorAll(".slides .image");
let atual = 0;
let imagem = document.getElementById("atual");
let back = document.getElementById("back");
let next = document.getElementById("next");
let rolar = true;

document.querySelector(".slides").style.width = `calc(1024px * ${qtd.length})`;

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
  document.querySelector(".imgAtual").classList.remove("imgAtual");
  imagem.style.marginLeft = `${-1024 * atual}px`;
  document.getElementById(atual).classList.add("imgAtual");
}

setInterval(() => {
  if (rolar) {
    atual++;
    slide();
  } else {
    rolar = true;
  }
}, 7000);
