//this file is for connecting data with the memes page
//Do not use this file to fetch data. Fetch data with the classes imported from the models.


import {
    clearElement,
    createMemeHtml,
    insertHtml
}
from "../helpers/helpers.js"

import Memes from "../models/memes-model.js"

/**
 * This is the main function
 * 
 * This function runs when the page loads.
 * Grabs a list of scriptures from the model
 * Uses a loop to do the following:
 * 1. call createMemeHtml to wrap the meme in html
 * 2. call insertHtml to add the cards
 * 
 * Not sure how this will work yet, but we should be able to receive data in
 * a paginated format. This function will also need to add an intersection observer
 * to call the next page of data
 * 
 */
 function main() {
    clearElement('output');
    for (i = 0; i < 5; i ++){
        Memes.getRandomMeme((meme => {
            let cardHtml = createMemeHtml(meme);
            insertHtml('output', cardHtml)
        }));

    }
 }

 main()