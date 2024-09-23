let listaNG = [];
let listaVG = [];
let listaDG = [];
let posicionModificando = -1;

function clickBoton() {
  let nombreG = document.getElementById('nombreGasto').value;
  let valorG = document.getElementById('valorGasto').value;
  let DEsG = document.getElementById('DescripcionGasto').value;

  if (posicionModificando === -1) {
    listaNG.push(nombreG);
    listaVG.push(valorG);
    listaDG.push(DEsG);
  } else {
    listaNG[posicionModificando] = nombreG;
    listaVG[posicionModificando] = valorG;
    listaDG[posicionModificando] = DEsG;

    posicionModificando = -1;
  }

  if (valorG > 150) {
    alert('El gasto es mayor a 150$');
  }

  actualizarListaG();
}

function actualizarListaG() {
  let listaG = document.getElementById('listaDeGastos');
  let totalGastos = 0;
  let totalG = document.getElementById('totalGastos');
  let htmlLista = '';

  listaNG.forEach((elemento, posicion) => {
    const valorGasto = Number(listaVG[posicion]);
    const descripcionGasto = listaDG[posicion];

    htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - Descripción: ${descripcionGasto} 
      <button onclick="EliminarGasto(${posicion});">Eliminar Gasto</button>
      <button onclick="ModificarGasto(${posicion});">Modificar Gasto</button></li>`;
    totalGastos += valorGasto;
  });

  listaG.innerHTML = htmlLista;
  totalG.innerHTML = totalGastos.toFixed(2);
  limpiar();
}

function limpiar() {
  document.getElementById('nombreGasto').value = '';
  document.getElementById('DescripcionGasto').value = '';
  document.getElementById('valorGasto').value = '';
}

function EliminarGasto(posicion) {
  listaNG.splice(posicion, 1);
  listaVG.splice(posicion, 1);
  listaDG.splice(posicion, 1);
  actualizarListaG();
}

function ModificarGasto(posicion) {
  document.getElementById('nombreGasto').value = listaNG[posicion];
  document.getElementById('DescripcionGasto').value = listaDG[posicion];
  document.getElementById('valorGasto').value = listaVG[posicion];
  posicionModificando = posicion;
}
