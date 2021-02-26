/* 
  You are given an statement

  You should remove the word "and dogs" by using substring 
*/

let statement = "I like programming and dogs";
// method 1
let splitStatement = statement.split(" ").slice(0, 3).join(" ")

//method 2
statement = statement.substring(0, statement.lastIndexOf("a"));

console.log(statement);

/* EXPECTED OUTPUT

  "I like programming"

*/
