const findTheOldest = function(people) {
    let currYear = new Date().getFullYear();
    let ourGuy;
    people.reduce((oldest, current) => {
        let death;
        if(!current.yearOfDeath) death = currYear;
        else death = current.yearOfDeath;
        let age = death - current.yearOfBirth;
        if(age > oldest){
            oldest = age;
            ourGuy = current;
        }
        return oldest;
    }, 0);

    return ourGuy;
};

// Do not edit below this line
module.exports = findTheOldest;
