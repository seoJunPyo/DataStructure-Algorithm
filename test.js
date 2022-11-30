function solution(S) {
	let answer = [];
	let stack = [];
	let operator = '';
	S = S.split(' ');

	for (let i = 0; i < S.length; i++) {
		if (!isNaN(Number(S[i]))) {
			answer.push(S[i]);
			if (operator) {
				answer.push(operator);
				operator = '';
			}
		}
		if (S[i] === '+' || S[i] === '-') {
			if (stack[stack.length - 1] === '+' || stack[stack.length - 1] === '+') {
				answer.push(S[i]);
			} else {
				stack.push(S[i]);
			}
		}

		if (S[i] === '*' || S[i] === '/') {
			if (S[i + 1] !== '(') {
				operator = S[i];
			} else {
				stack.push(S[i]);
			}
		}
	}
	answer = answer.concat(stack);

	return answer.join(' ');
}

solution('3 + 2 + 4 * 5 + 3 / 1');

// ('1 + 2 * 3 * ( 2 + 3 )');
// ('1 + ((2 * 3) * (2 + 3))');
// ('1 + ((23) * (23)+)*');
// ('(1 + ((23) * (23)+)*)');
// ('(1 ((23) * (23)+)*) +');
// ('123*23+*+');
