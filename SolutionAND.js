function solution(input) {
  var results = [];
  var int = input.match(/\d+/g); // Use regex to find only and all numbers in input string 


  if (int == null) {
    return "Error: Input provided does not contain any integers";
  }; // Display error and end function if input contains no 


  int = int.join(""); // In cases where numbers were between letters and resulted in an array of strings, this joins them to create a single string
  var intArr = int.split(""); // Convert string to array

  // Sort intArr into descending order so that the next function returns siblings in descending order
  intArr.sort(function (a, b) {
    return b - a
  });


  function permute(arr, memo) {
    var cur, memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      console.log(cur);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  var solution = permute(intArr); // solution is now an array of arrays
  solution = solution.map(x => x.join('')); // convert to array of strings 
  solution = solution.filter((item, index) => solution.indexOf(item) === index); // remove duplicates
  solution = solution.join(','); // join all strings into one and separate by a comma. 
  return solution
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
// console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236