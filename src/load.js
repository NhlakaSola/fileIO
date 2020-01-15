let fs = require('fs');

async function load(x) { 
    let jsonData = {};
    let file = x.toLowerCase().replace(' ','_');
    await fs.readFile(`visitor_${file}.json`, (err, data) => {
        if (err) throw err

        jsonData = JSON.parse(data);
        console.log(jsonData);
    })

}


module.exports = load;