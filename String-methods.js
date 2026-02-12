// 1
const str = 'JavaScript';
console.log(str.slice(4));

// 2
const filename = 'report.pdf';
console.log(filename.startsWith('rep'));
console.log(filename.endsWith('.pdf'));

// 3
let phrase = 'I like cats';
phrase = phrase.replace('cats', 'dogs');
console.log(phrase);

// 4
const fruits = 'apple,banana,orange,apple';
const fruitArray = fruits.split(',');
const appleCount = fruitArray.filter(fruit => fruit === 'apple').length;
console.log(appleCount);

// 5
const text = 'My phone number is 12345 and my code is 67890';
const numbersOnly = text.match(/\d+/g);
console.log(numbersOnly.join(','));

// 6
const greeting = 'Hello World From JS';
const words = greeting.split(' ');
words[0] = words[0].toLowerCase();
console.log(words.join(' '));

// 7
const sentence = 'JavaScript is a cool language';
console.log(sentence.replace('cool', '****'));

// 8
const email = 'user@example.com';
if(email.includes('@') && email.includes('.')) {
    console.log("Email valid");
} else {
    console.log("Invalid");
}

// 9
const fullName = 'Java Script Object Notation';
const abbreviations = fullName.split(' ').map(word => word.charAt(0).toUpperCase());
console.log(abbreviations.join(''));

// 10
const sentence2 = 'I love learning JavaScript programming';
const longestWord = sentence2.split(' ')
                              .reduce((longest, current) => current.length > longest.length ? current : longest, '');
console.log(longestWord);

// 11
const emailAddress = 'user@example.com';
const domain = emailAddress.split('@')[1];
console.log(domain);

// 12
const filepath = 'archive.backup.zip';
const filenameWithoutExt = filepath.substring(0, filepath.lastIndexOf('.'));
console.log(filenameWithoutExt);

// 13
const spacedString = 'make this a slug line';
const sluggedString = spacedString.replace(/ /g, '_');
console.log(sluggedString);

// 14
const phoneNumber = '+7 (999) 123-45-67';
const hiddenPhone = phoneNumber.replace(/(\+\d+ $\*\*$\ *)(\d{3})/, '$1***');
console.log(hiddenPhone);

// 15
const filePath = 'main.test.js';
const extension = filePath.slice(filePath.lastIndexOf('.') + 1);
if (extension === 'js') {
    console.log('JS file');
} else {
    console.log('Other');
}

// 16
const messyText = ' I love JS ';
const cleanText = messyText.trim().replace(/\s+/g, ' ');
console.log(cleanText);

// 17
const dateStr = '2026-02-06';
const parts = dateStr.split('-');
const formattedDate = `${parts[2]}.${parts[1]}.${parts[0]}`;
console.log(formattedDate);

// 18
const mixedCapsSentence = 'hELLo woRLD fRoM js';
const capitalizedWords = mixedCapsSentence.toLowerCase()
                                           .split(' ')
                                           .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                           .join(' ');
console.log(capitalizedWords);

// 19
const hashtagText = 'Read more #JavaScript today';
const afterHashTag = hashtagText.split('#')[1]?.trim(); 
console.log(afterHashTag);

// 20
const petsPhrase = 'cat scatter catapult cat';
const result = petsPhrase.replaceAll(/\bcat\b/g, 'dog');
console.log(result);
