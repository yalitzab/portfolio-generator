const inquirer = require('inquirer');

fs.writefile('./dist/index.html', pageHTML, err => {
  if (err) {
    console.log(err);
    return
  }
  console.log('Page created! Check out index.html in this directory to see it!');

  fs.copyFile('./src/style.css', './dist/style.css', err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Style sheet copied successfully!');
  });
});

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
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// fs.writeFile('./index.html', generatePage(name, github), err => {
    
//     if (err) throw new Error(err);

//     console.log('Portfolio complete! Check out index.html to see the output!');

// });






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