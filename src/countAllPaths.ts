export function countAllPaths(m: number, n: number): number {
	// initialize subProblems array
	const subProblems: number[][] = [];
	for (let i = 0; i < m; i++) {
		subProblems.push(new Array<number>(n).fill(0));
	}
	// set up base case in subproblems 
	for (let i = 0; i < m; i++) {
		subProblems[i][0] = 1;
	}
	for (let i = 0; i < n; i++) {
		subProblems[0][i] = 1;
	}
	// calculate complex case
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			subProblems[i][j] = subProblems[i - 1][j] + subProblems[i][j - 1]
		}
	}

	return subProblems[m - 1][n - 1];
}

console.log(countAllPaths(1, 5)); // 1
console.log(countAllPaths(3, 3)); // 6
console.log(countAllPaths(2, 8)); // 8

