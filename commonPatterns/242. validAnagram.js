/** link : https://leetcode.com/problems/valid-anagram/
 *	category : Arrays
 *	difficulty : Normal
 *
 * * desc : Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * *		An Anagram is a word or phrase formed by rearranging the letters of a different word
 * *		or phrase, typically using all the original letters exactly once.
 *
 * @input : s = "anagram", t = "nagaram"
 * @output : true
 *
 * @input : s = "rat", t = "car"
 * @output : false
 *
 * ?constraints:
 *		1 <= s.length, t.length <= 5 * 104
 *		s and t consist of lowercase English letters.
 *
 */

// Better Solution - Time O(n) | Space O(n)
const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;

	const lookup = {};

	// if char exists, increment, otherwise set to 1
	for (let val in str1) {
		lookup[val] = (lookup[val] || 0) + 1;
	}

	for (let i = 0; i < str2.length; i++) {
		// can't find char or char is 0 then it is not an anagram
		if (!lookup[str2[i]]) return false;
		else lookup[str2[i]] -= 1;
	}

	return true;
};

// trial cases
let s1 = 'anagram';
let t1 = 'nagaram';

console.log(`
	input: str1: '${s1}', str2: '${t1}'
	output: ${validAnagram(s1, t1)} 
`);

// validAnagram('', ''); // true
// validAnagram('aaz', 'zza'); // false
// validAnagram('anagram', 'nagaram'); // true
// validAnagram('rat', 'car'); // false
// validAnagram('awesome', 'awesom'); // false
// validAnagram('qwerty', 'qeywrt'); // true
// validAnagram('texttwisttime', 'timetwisttext'); // true
