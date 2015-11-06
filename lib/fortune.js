//to test dynamic content
var fortuneCookies = [
  "blaBla",
  "fdfsfsdfs",
  "sdsdsdsdsds"
];

exports.getFortune = function (){

  var idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];

};
