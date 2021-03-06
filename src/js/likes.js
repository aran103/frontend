import api from './api.js';
import { likesTemplate } from './likesForm.js';

const { getBeersDetail } = api();

const renderLikes = async id => {
    try {
        const likesList = document.querySelector('#likesList');
        const beer = await getBeersDetail(id);
        likesList.innerHTML = likesTemplate(beer);
       
    } catch (err) {
        console.error(err);
    }
};

export { renderLikes };