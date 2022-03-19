const isPangram = (input) => {
	var words = input.toLowerCase().split(/[^a-z]/);
  var letterSet = new Set();
  words.join("").split("").forEach((letter) => {
    if(!letterSet.has(letter)) {
      letterSet.add(letter);
    }  
  });

	return letterSet.size === 26;
}


console.log(isPangram("The quick brown fox jumps over the lazy dog."));


//other answer
const isPangramGitAnswer = (input) => {
  input = input.toUpperCase().split('')
  for(let i=65; i<91; i++){
      let char = String.fromCharCode(i);
      if(input.includes(char)) continue;
      else return false;
  }
  return true;
}