import { galleryItems } from './gallery-items.js';

// Change code below this line

function createGalleryMarkup(items)
{return items.map(({original, preview, description}) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `
}).join('') ;}

const galleryMakup = createGalleryMarkup(galleryItems)

const gallery = document.querySelector('.gallery')

gallery.insertAdjacentHTML('beforeend',galleryMakup)

gallery.addEventListener('click', galleryModalOpener)

function galleryModalOpener(e) { 
       e.preventDefault()
       
       if(!e.target.classList.contains('gallery__image')){
        return}
        const modal =  basicLightbox.create(`<img src="${e.target.dataset.source}">`)
        modal.show()

        if (modal.show()) {
        return document.addEventListener("keydown",(e) => {
            if (e.code!== 'Escape'){return}
            return modal.close()
            } )   }
}

