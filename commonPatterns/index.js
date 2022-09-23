// Anagram
// Given two strings, write a function to determine if the second string is an
// anagram of the first. An anagram is a word, phrase, or name formed by
// rearranging the letters of another, such as cinema, formed from iceman const

const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	const lookup = {};

	for (let i = 0; i < str1.length; i++) {
		lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
	}

	console.log(lookup);

	for (let i = 0; i < str2.length; i++) {
		if (!lookup[str2[i]]) return false;
		else lookup[str2[i]] -= 1;
	}

	return true;
};

validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('awesome', 'awesom'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
