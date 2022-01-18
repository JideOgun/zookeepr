const express = require('express');

const app = express();

app.get('/api/animals', (req, res) => {
    let results = animals;
    if(req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});

const { animals } = require('./data/animals');

function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = [];
    // Note that we save the animalsArray as filteredResults here:
    let filteredResults = animalsArray;
    if(query.personalityTraits) {
        // Save personalityTraits as a dedicated array.
        // if personalitytraits is a string, place it into new array and save.
        if(typeof query.personalityTraits === 'string') {
            personalityTraitsArray = [query.personalityTraits];
        } else {
            personalityTraitsArray = query.personalityTraits;
        }
        // Loop through each trait in the personality traits array:
        personalityTraitsArray.forEach(trait => {
            //Check trait against each animal in the filteredResults array.
            //Remember, it is initially a copy of the animalsArray,
            //but we're updating it for erach trait in the .forEach loop.
            //For each trait being targeted by the filter, the filteredResults
            //array will then contain only thge entries that contain the trait,
            //so at the end we'll have an array of animals that have every one
            //of the traits when the .forEach() loop is finished.

            filteredResults = filteredResults.filter(
                animal => animal.personalityTraits.indexOf(trait) !== -1
            );
        });
    }
    if(query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);}
    if(query.species) {
            filteredResults = filteredResults.filter(animal => animal.species === query.species);}
    if(query.name) {
                filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
}

