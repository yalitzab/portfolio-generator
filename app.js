const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
    // this
    for (let i = 0; i < profileDataArr.lenght; i += 1){
        console.log(profileDataArr[i]);
    }

    console.log('=====================');

    // is the same as this...
    profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);