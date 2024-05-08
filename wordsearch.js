const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  
  let horizontal = letters[0].length; //get the length of the letters index 0
  let vertical = letters.length; //get the column length of the array
  for (let i = 0; i < horizontal; i++) {  //iterate through the row
    let temp = [];
    for (let j = 0; j < vertical; j++) { //iterate through the column
      temp += letters[j][i]; //get the vertical word and put it into the temp array
      if (temp.includes(word)) return true; //if the word is found in the temp array, return true
    }
    
  }
  for (let l of horizontalJoin) { //iterate through the horizontal array
    if (l.includes(word)) return true; //if the word is found in the horizontal array, return true
  }

  return false;
};

module.exports = wordSearch;