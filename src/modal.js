import { saveTask } from './lib/firestore';
import { header } from './contents';

export function modal(navigateTo) {
  console.log('estamos en la modal');
  const cuepoModal = document.createElement('div')
  const modalHeader = header();
  cuepoModal.appendChild(modalHeader);

  const publicationModal = document.createElement('section');
  publicationModal.setAttribute('class', 'modal');

  const divX = document.createElement('button');
  divX.setAttribute('class', 'divX');
  divX.setAttribute('type', 'button');
  const imgX = document.createElement('img');
  imgX.setAttribute('class', 'imgX');
  imgX.setAttribute('src', 'imagenes/imagenx.png');
  divX.appendChild(imgX);
  publicationModal.appendChild(divX);

  const title = document.createElement('div');
  title.setAttribute('class', 'title');
  const labelTitle = document.createElement('label');
  labelTitle.innerHTML = 'TITULO DE LA RECETA';
  title.appendChild(labelTitle);
  const inputTitle = document.createElement('input');
  inputTitle.setAttribute('class', 'inputText');
  inputTitle.setAttribute('id', 'inputTextId');
  inputTitle.setAttribute('type', 'text');
  title.appendChild(inputTitle);
  publicationModal.appendChild(title);

  const description = document.createElement('div');
  description.setAttribute('class', 'description');
  const labelDescription = document.createElement('label');
  labelDescription.innerHTML = 'DESCRIBE TU RECETA';
  description.appendChild(labelDescription);
  const inputDescription = document.createElement('textarea');
  inputDescription.setAttribute('class', 'inputDescription');
  inputDescription.setAttribute('id', 'inputDescriptionId');
  description.appendChild(inputDescription);
  publicationModal.appendChild(description);

  const postBtn = document.createElement('button');
  postBtn.setAttribute('class', 'postBtn');
  postBtn.setAttribute('type', 'button');
  postBtn.innerHTML = 'PUBLICAR';
  publicationModal.appendChild(postBtn);
  cuepoModal.appendChild(publicationModal);

  const contenedorMenu = document.createElement('div');
  contenedorMenu.setAttribute('class', 'contenedorMenu');

  const botonPalta = document.createElement('button');
  botonPalta.setAttribute('class', 'buttonPalta');
  botonPalta.setAttribute('id', 'palta');

  const imagenPalta = document.createElement('img');
  imagenPalta.setAttribute('class', 'imagenPalta');
  imagenPalta.setAttribute('src', 'imagenes/paltamenu.png');
  botonPalta.appendChild(imagenPalta);
  contenedorMenu.appendChild(botonPalta);

  cuepoModal.appendChild(contenedorMenu);

  divX.addEventListener('click', () => {
    navigateTo('/home');
  });

  postBtn.addEventListener('click', () => {
    let titulo = document.getElementById('inputTextId').value;
    console.log(titulo);
    let descripcion = document.getElementById('inputDescriptionId').value;
    console.log(descripcion);
    navigateTo('/home');
    saveTask(titulo, descripcion);


  });
  return cuepoModal;

}
