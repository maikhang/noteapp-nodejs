const validator = require('validator')
const chalk = require('chalk')

// console.log(process.argv);

const command = process.argv[2];

if (command === 'add') {
    console.log('Add item successfully!')
}
else {
    console.log('Add item failed!')
}