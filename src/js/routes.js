import { renderBeersDOM } from './beers.js'
import renderDetail from './detail.js';
import { hideFilter, showFilter } from './navbar.js';
import { showQuotesForm, hideQuotesForm } from './ui.js';
import addQuoteListener from './quotesForm.js'
import addLikesListener from './likesForm.js'


page('/', () => {
    console.log('Home page');

    showFilter();
    hideQuotesForm();
    renderBeersDOM();
});

page('/detail/:id', ctx => {
    console.log('Detail');
    const { params: { id } } = ctx;
    hideFilter();
    showQuotesForm();
    renderDetail(id);
    addLikesListener(id);
    addQuoteListener(id);

});

page();