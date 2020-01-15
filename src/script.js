let fs = require('fs');

module.exports = class Visitor{
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfAssistant){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.nameOfAssistant = nameOfAssistant;
    }



    async save() { 
        try {
            await fs.writeFile(`visitor_${(this.fullName)
                .replace(' ','_')
                .toLowerCase()}.json`,
                 JSON.stringify(this, null, 4)
            );
             console.log('The data was add to file!');
           } catch (err) {
             console.log(err);
           }
 
    }

}








