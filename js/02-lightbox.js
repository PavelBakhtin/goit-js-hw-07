import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup(items){
    return items.map(({original, preview, description}) => {
    return `
    <div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>
    `
}).join('') ;}

const galleryMakup = createGalleryMarkup(galleryItems)

const gallery = document.querySelector('.gallery')

gallery.insertAdjacentHTML('beforeend',galleryMakup)

gallery.addEventListener('click', galleryModalOpener)

var lightbox = new SimpleLightbox('.gallery a', {captionsData : 'alt', captionDelay : 250})

function galleryModalOpener(e) { 
    e.preventDefault()

        if(!e.target.classList.contains('gallery__image')){
        return}

}   
