
//---------------------------------------------------------//

function addToZero(nums){
    for (let i=0; i<nums.length; i++){
        for(let j = i + 1; j<nums.length; j++) {
            if (nums[i] + nums[j] === 0) {
                return true;
            }
        }
        }
        return false;

    }

    console.log(addToZero([1, 2, 3, -2]));

//Because this function uses two nested for loops, the runtime is O(n^2). 

//---------------------------------------------------------//

function hasUniqueChars(str){
    for (let i=0; i<str.length; i++){
        for (let j = i + 1; j < str.length; j++) {
            
            if (str[i] === str[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Monday"))

//This function uses a nested for loop as well, so the runtime is going to be
// O(n^2).

//---------------------------------------------------------//

function isPangram(str){
    str = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let i = 0; i < alphabet.length; i++) {
        //i dont know what to put here//
            return false;
        }
    }
    return true;



console.log(isPangram("The quick brown fox jumps over the lazy dog"))

//If i finished writing this function, it would have a runtime of O(n) because it 
//uses a single for loop. 

//---------------------------------------------------------//

function findLongestWord(words) {
    let longestWord =words[0];
    let longestWordLength = 0;

    for (let i=0; i < words.length; i++) {
        let wordLength = words[i].length;
        if (wordLength > longestWordLength) {
            longestWordLength = wordLength;
        }
    }
    return longestWordLength;
}