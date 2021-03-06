let fs = require('fs');

class Visitor{
    constructor(fullName, age, dateOfVisit, timeOfVisit, comments, nameOfAssistant){
        this.fullName = fullName;
        this.age = age;
        this.dateOfVisit = dateOfVisit;
        this.timeOfVisit = timeOfVisit;
        this.comments = comments;
        this.nameOfAssistant = nameOfAssistant;
    }

    async save(){
        await fs.writeFile(`visitor_${(this.fullName).replace(' ','_').toLowerCase()}.json`,JSON.stringify(this, null, 4),
            function(err){
                if(err) throw new Error(err);
                return "Visitor's file saved";
        });
       }
    }

    async function load(string){
        let fileName = string.replace(' ','_').toLowerCase();
        await fs.readFile(`visitor_${fileName}.json`, (err, data) => {
            if (err) throw err;
            return JSON.parse(data);
        });
    }
module.exports = {Visitor,load};






