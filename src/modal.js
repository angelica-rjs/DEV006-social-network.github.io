export function modal () {
    console.log('estamos en la modal');

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
    labelTitle.innerHTML = 'TITULO DE LA RECETA'
    title.appendChild(labelTitle);
    const inputTitle = document.createElement('input');
    inputTitle.setAttribute('class', 'inputText');
    inputTitle.setAttribute('type', 'text');
    title.appendChild(inputTitle);
    publicationModal.appendChild(title);


    const description = document.createElement('div');
    description.setAttribute('class', 'description');
    const labelDescription = document.createElement('label');
    labelDescription.innerHTML = 'DESCRIBE TU RECETA'
    description.appendChild(labelDescription);
    const inputDescription = document.createElement('textarea');
    inputDescription.setAttribute('class', 'inputDescription');
    description.appendChild(inputDescription);
    publicationModal.appendChild(description);

    const postBtn = document.createElement('button');
    postBtn.setAttribute('class', 'postBtn');
    postBtn.setAttribute('type', 'button');
    postBtn.innerHTML = 'PUBLICAR';
    publicationModal.appendChild(postBtn);

    divX.addEventListener('click', () => {
      publicationModal.style.display='none';
    });

    postBtn.addEventListener('click', () => {
        publicationModal.style.display='none';
     });
  

    return publicationModal;
}