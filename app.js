const fs = require('fs');
const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
}; 


    const promptProject = portfolioData => {
        console.log(`
      =================
      Add a New Project
      =================
      `);
      
        // If there's no 'projects' array property, create one
      if (!portfolioData.projects) {
        portfolioData.projects = [];
      }
        return inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?'
          },
          {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
          },
          {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
          },
          {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
          },
          {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
          },
          {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
          }
        ])
        .then(projectData => {
            portfolioData.projects.push(projectData);
            if (projectData.confirmAddProject) {
              return promptProject(portfolioData);
            } else {
              return portfolioData;
            }
        });

    };    

    promptUser()
    .then(promptProject)
    .then(portfolioData => {
      const pageHTML = generatePage(portfolioData);
  
      // fs.writeFile('./index.html', pageHTML, err => {
      //   if (err) throw new Error(err);
  
      //   console.log('Page created! Check out index.html in this directory to see it!');
      // });
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
