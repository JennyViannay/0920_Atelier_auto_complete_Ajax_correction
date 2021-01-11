/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

import 'bootstrap';

import axios from 'axios';

console.log('Edit on autocomplete.js');

document.getElementById('searchField').addEventListener('input', (event) => {
    const query = event.target.value;
    console.log(query);
    if (query !== '') {
        axios.get('/programs/autocomplete?q=' + query)
        .then(res => res.data)
        .then(data => {
            document.getElementById('autocomplete').replaceChildren(
                ...data.map(
                    (result) => {
                        const li = document.createElement('li');
                        li.innerHTML = `${result.title}`;
                        return li;
                    }
                )
            );
        });
    }
    else {
        document.getElementById('autocomplete').replaceChildren();
    }
});

