var {Visitor,load} =require('../src/script');
let fs = require('fs');
describe('node', function(){
  
  it('checks if file exists', function(){
      expect("visitor_nhlaka_sola.json").toBeDefined();
  });

  it('checks if the method works', function(){
    let mzito = new Visitor("Nhlaka Sola","12","21/12/19","12:30","The boy", "Msizi");
    mzito.save();
    expectAsync(mzito.save()).toBeResolved();
  });

  it('checks if the method works', function(){
    let mzito = new Visitor("Nhlaka Sola","12","21/12/19","12:30","The boy", "Msizi");
    mzito.save();
    expectAsync(load("Nhlaka Sola")).toBeResolved();
  });

  it('checks behaviour of the function', function(){
    let file = fs.readFileSync("visitor_nhlaka_sola.json")
    let data = JSON.parse(file)
    expect(data.fullName).toEqual("Nhlaka Sola")
    expect(data.age).toEqual("12")
    expect(data.dateOfVisit).toEqual("21/12/19")
    expect(data.timeOfVisit).toEqual("12:30")
    expect(data.comments).toEqual("The boy")
    expect(data.nameOfAssistant).toEqual("Msizi")
  });



});




