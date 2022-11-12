const func = (n) => {
	for (let i = 1; i <= n; i++) {
		i % 3 === 0
			? i % 5 !== 0
				? console.log('fizz')
				: console.log('fizzbuzz')
			: i % 5 === 0
			? console.log('buzz')
			: console.log(i);
	}
};

// sample case 1
let arr1 = 31;

console.log(`
	input: [${arr1}]
	output: ${func(arr1)} 
`);
