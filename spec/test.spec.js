var {Visitor} =require('../src/script');

describe('node', function(){
  


  it('checks if file exists', function(){
      expect("visitor_nhlaka_sola.json").toBeDefined();
  });

  it('checks if file is saved', function(){
    let mzito = new Visitor("Nhlaka _Sola","12","21/12/19","12:30","The boy", "Msizi");
    mzito.save();
    expectAsync(mzito.save()).toBeResolved();
  });

});




