var word;

do {
	word = prompt('Digite a palavra:');
	if (word.length === 0) {
		alert('Não é uma palavra válida');
	}
} while (word.length === 0);

function cipher(word) {
	const index = 7;
	var value;
	var value2;
	var newWord;
	var arrWord = [];
	for (i = 0; i < word.length; i++) {
		value = word.charCodeAt(i);
		
		if (value >= 65 && value <= 90) {
			value2 = (value - 65 + index) % 26 + 65;
		} else if (value >= 97 && value <= 122) {
			value2 = (value - 97 + index) % 26 + 97;
		}
		arrWord.push(value2);
	}
	newWord = String.fromCharCode(...arrWord);
	alert(newWord);
	return newWord;
}

function decipher(neword) {
	const index = 7;
	var value;
	var value2;
	var newWord;
	var arrWord = [];
	for (i = 0; i < word.length; i++) {
		value = neword.charCodeAt(i);
			if (value >= 65 && value <= 90) {
			value2 = ((value - 65 - index) % 26 + 65)
		} else if (value >= 97 && value <= 122) {
			value2 = ((value - 97 - index) % 26 + 97);
		}
		arrWord.push(value2);
	}
	newWord = String.fromCharCode(...arrWord);
	alert(word);
	return word;
}


cipher(word);
decipher(word);


