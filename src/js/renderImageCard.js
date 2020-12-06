import getRefs from './refs';
const refs = getRefs();
import CardTmpl from '../templates/gallery-tmpl.hbs';

export default function renderImageCard(cards) {
    const markup = CardTmpl(cards)
    makeMarkup(markup);
}

function makeMarkup(html) {
    refs.galleryContainer.insertAdjacentHTML('beforeend', html);
}