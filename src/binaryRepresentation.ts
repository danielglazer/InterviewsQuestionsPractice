// input: integer
// output: the integer 30 bit representation in binary
export function binaryRepresentation(n: number): string {
	if (!Number.isInteger(n)) throw new Error('binaryRepresentation input should be integer');
	const result = new Array<string>(30);
	result.fill('0');
	let i = 0;
	while (n!== 0) {
		result[i++] = ((n % 2).toString());
		n = Math.floor(n / 2);
	}
	return result.reverse().join('');
}

console.log(binaryRepresentation(0));
console.log(binaryRepresentation(2));
console.log(binaryRepresentation(5));
