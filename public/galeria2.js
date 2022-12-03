document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    { img: "images/img/20.jpg" },
    { img: "images/img/21.jpg" },
    { img: "images/img/22.jpg" },
    { img: "images/img/23.jpg" },
    { img: "images/img/24.jpg" },
    { img: "images/img/25.jpg" },
  ];

  let imagenes2 = [
    { img: "images/img2/2.jpg" },
    { img: "images/img2/3.jpg" },
    { img: "images/img2/4.jpg" },
    { img: "images/img2/5.jpg" },
  ];

  let imagenes3 = [
    { img: "images/img3/7.jpg" },
    { img: "images/img3/8.jpg" },
    { img: "images/img3/9.jpg" },
    { img: "images/img3/10.jpg" },
  ];

  let imagenes4 = [
    { img: "images/img4/13.jpg" },
    { img: "images/img4/14.jpg" },
    { img: "images/img4/15.jpg" },
    { img: "images/img4/16.jpg" },
  ];

  let contador = 0;
  const contenedor = document.querySelector(".slideshow");
  const overlay = document.querySelector(".overlay");
  const galeria_imagenes = document.querySelectorAll(".galeria");
  const img_slideshow = document.querySelector(".slideshow img");
  document
    .getElementById("peinados")
    .addEventListener("click", funcionPeinados);
  document
    .getElementById("galeria1")
    .addEventListener("click", funcionGaleria1);
  document
    .getElementById("galeria2")
    .addEventListener("click", funcionGaleria2);
  document
    .getElementById("galeria3")
    .addEventListener("click", funcionGaleria3);

  function funcionPeinados() {
    seleccionada = imagenes;
  }

  function funcionGaleria1() {
    seleccionada = imagenes2;
  }

  function funcionGaleria2() {
    seleccionada = imagenes3;
  }

  function funcionGaleria3() {
    seleccionada = imagenes4;
  }

  contenedor.addEventListener("click", function (event) {
    let atras = contenedor.querySelector(".atras"),
      adelante = contenedor.querySelector(".adelante"),
      img = contenedor.querySelector("img"),
      tgt = event.target;

    if (tgt == atras) {
      if (contador > 0) {
        img.src = seleccionada[contador - 1].img;
        contador--;
      } else {
        img.src = seleccionada[seleccionada.length - 1].img;
        contador = seleccionada.length - 1;
      }
    } else if (tgt == adelante) {
      if (contador < seleccionada.length - 1) {
        img.src = seleccionada[contador + 1].img;
        contador++;
      } else {
        img.src = seleccionada[0].img;
        contador = 0;
      }
    }
  });

  Array.from(galeria_imagenes).forEach((img) => {
    img.addEventListener("click", (event) => {
      const imagen_seleccionada = +event.target.dataset.imgMostrar;
      img_slideshow.src = seleccionada[imagen_seleccionada].img;
      contador = imagen_seleccionada;
      overlay.style.opacity = 1;
      overlay.style.visibility = "visible";
    });
  });

  document.querySelector(".btn_cerrar").addEventListener("click", () => {
    overlay.style.opacity = 0;
    overlay.style.visibility = "hidden";
  });
});
