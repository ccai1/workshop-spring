// var array = [42];
// var selection = d3.select("body");
var h2 = d3.selectAll("h2");
console.log("h2")
console.log(h2);

var tds = d3.selectAll("tr").selectAll("td");
console.log("tds")
console.log(tds);
var spans = d3.selectAll("tr").selectAll("td").selectAll("span");
console.log("spans")
console.log(spans);
var sections = d3.selectAll("section");

var numbers = [4, 5, 18, 23, 42];
var divs = d3.selectAll("h2").data(numbers)
// divs.exit();
// divs.enter();
// console.log('divs')
// console.log(divs)
var letters = [
  {name: "A", frequency: .08167},
  {name: "B", frequency: .01492},
  {name: "C", frequency: .02780},
  {name: "D", frequency: .04253},
  {name: "E", frequency: .12702}
];

function names(freq) {
  return freq.name;
}
console.log("letters")

console.log(d3.selectAll("div").data(letters, names(letters)));
