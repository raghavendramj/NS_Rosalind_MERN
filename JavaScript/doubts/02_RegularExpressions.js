function regExTest() {
  let str = "Apples are always juicy, but only fresh apples";
  const pattern = /apples/gi; //i->  case-insensitive, g-> global
  let result = str.match(pattern);
  console.log("Result :-", result);
}

// regExTest();

let getRegExMatches = (text, pattern) => {
  let result = text.match(pattern);
  console.log("Result :-", result);
};

// getRegExMatches("Is this all there is?", /abc/gi); //[abc] -> Find any character between the brackets
// getRegExMatches("Is this all there is?", /[^abc]/gi); //[abc] -> Find any character NOT between the brackets
// getRegExMatches("2564895a245b", /[^1-9]/gi); //[abc] -> Find any character NOT between the brackets
// getRegExMatches("Is this all there is?", /abc/gi); //[abc] -> Find any character between the brackets
// getRegExMatches("re, green, red, green, gren, gr, blue, yellow", /red|green/gi); //	Find any of the alternatives specified


// //Metacharacters
// getRegExMatches("my dog is dug into the soil", /d.g/gi);    
// getRegExMatches("i gave my 100% in the exams!", /\w/g);    
// getRegExMatches("i gave my 100% in the exams!", /\W/g);    
// getRegExMatches("i gave my 100% in the exams!", /\d/g);    
// getRegExMatches("i gave my 100% in the exams!", /\D/g);   
   
getRegExMatches("badword test one two abadwords three", /^(badword)/gi);   

// Match string not containing badword
// badword test one two abadwords three

//t1est 23 foo bar 304958 bar
getRegExMatches("t1est 23 foo bar 304958 bar 567", /\d+/g
); 