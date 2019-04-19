let orchidTypes = ['Phalaenopsis', 'Dendrobium', 'Cattleya', 'Cymbidium', 'Miltonia'];

// add another element to the array
orchidTypes.push('Paphiopedlium');

// remove the 3rd element
orchidTypes.splice(2, 1);

// make a spring of elements, separated by a comma
const orchidTypesList = orchidTypes.join(', ');

console.log(orchidTypesList);
