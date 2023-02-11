const isNumber = require('is-number');


console.log(isNumber (5) );



const orcMe = require('orc-me');
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const orcThreeNames = capitalizeFirstLetter(orcMe()) + ' ' + capitalizeFirstLetter(orcMe()) + ' ' + capitalizeFirstLetter(orcMe());
const orcTwoNames = capitalizeFirstLetter(orcMe()) + ' ' + capitalizeFirstLetter(orcMe());

console.log('Orc battle started!');
console.log(orcThreeNames + '    ⚔️     ' + orcTwoNames);

