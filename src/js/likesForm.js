import api from './api.js'
import { renderLoader } from './ui.js';

const { addLike, getBeersDetail } = api();

export const likesTemplate = ({ likes }) => `
<div class="likes-item">
     Likes: ${likes} 
</div>
`;

const addLikesListener = id => {
    const likesForm = document.querySelector('#likes-form');
    const likesList = document.querySelector('#likesList');


    likesForm.addEventListener('submit', async evt => {
        evt.preventDefault();
        try {
            renderLoader('hide', 'show');
            const responseFail = await addLike(id);

            const beer = await getBeersDetail(id);
            likesList.innerHTML = likesTemplate(beer);

        } catch (err) {
            console.error(err);

        } finally {
            renderLoader('show', 'hide');
        }
    });

};

export default addLikesListener;