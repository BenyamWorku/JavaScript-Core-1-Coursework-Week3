/* 
  You are given an array with a list of names.

  You should log only the peoples first names.

  For example, if the name is "John Smith" you should return "John"
*/

let names = [
  "Tamzin Lindsay",
  "Jessica Tate",
  "Tony Holcomb",
  "Shae Patton",
  "Arron Graham",
];
// Sorry this is too long. See the solution with map
// names[0] = names[0].substring(0, names[0].lastIndexOf(" "));
// names[1] = names[1].substring(0, names[1].lastIndexOf(" "));
// names[2] = names[2].substring(0, names[2].lastIndexOf(" "));
// names[3] = names[3].substring(0, names[3].lastIndexOf(" "));
// names[4] = names[4].substring(0, names[4].lastIndexOf(" "));

names = names.map((name) => name.substring(0, name.lastIndexOf(" ")))
names.forEach((name) => {
  console.log(name);
});

/* EXPECTED OUTPUT

  "Tamzin"
  "Jessica"
  "Tony"
  "Shae"
  "Arron"

*/
