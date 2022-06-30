const profileDataArgs = process.argv.slice(2, process.argv.length);
//Added require to be able to use it to make files
const fs = require('fs');

// Start
//const printProfileData = profileDataArr => {
// This...
// for (let i = 0; i < profileDataArr.length; i += 1) {
//   console.log(profileDataArr[i]);
// }

// console.log('================');

// Is the same as this...
//profileDataArr.forEach(profileItem => console.log(profileItem));

//};

//printProfileData(profileDataArgs);
// End

//-----------------------------------------------

//Template Literals Start
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('Jane', 'JaneHub'));
//Temp Lit End

//-----------------------------------------------

//Multi-line Strings Start
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//     `;
// };

//console.log(generatePage('Jane', 'JaneHub')); *removed for Deconstructuring Assignment and added 'process.argv.length' at top*
//Multi-line Strings End

//-----------------------------------------------

//Deconstructuring Assignment Start
const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

//Longer way to type
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];

//shorter way to type
const [name, github] = profileDataArgs;

//Removed both of us these
// console.log(name, github);
// console.log(generatePage(name, github));
// //Deconstruct Assi End

//-----------------------------------------------

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see output!');
});