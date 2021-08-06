const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
    
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');

});







// same as this
// const name = profileDataArgs [0];
// const github = profileDataArgs[1];

// const printProfileData = profileDataArr => {
//     // this
//     for (let i = 0; i < profileDataArr.lenght; i += 1){
//         console.log(profileDataArr[i]);
//     }

//     console.log('=====================');

//     // is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
