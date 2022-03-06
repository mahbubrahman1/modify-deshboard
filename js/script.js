// document.getElementById('top-players-color').style.color = 'violet';

// const players = document.getElementsByClassName('player');
// for (const player of players) {
//     player.style.backgroundColor = 'rgba(255, 0, 0, 0.4)';
// }

// document.getElementById('add-button').addEventListener('click', function () {
//     const inputField = document.getElementById('input-box');
//     const userInput = inputField.value;
//     const createItem = document.createElement('li');
//     createItem.innerText = userInput;
//     const appendItem = document.getElementById('item-container');
//     appendItem.appendChild(createItem);
//     inputField.value = '';
// })

// document.getElementById('plus-button').addEventListener('click', function () {
//     const numberField = document.getElementById('number-field');
//     const userNumber = numberField.value;
//     if (userNumber < 5) {
//         numberField.value = parseInt(userNumber) + 1;
//     } else if (userNumber == 5) {
//         document.getElementById('plus-button').setAttribute('disabled', true);
//     }
// })

// const booksName = [
//     "You Don't Know JavaScript",
//     'Learn JAVASCRIPT Visually',
//     'High-Performance Browser Networking',
//     'Beginning JavaScript',
//     'Eloquent JavaScript',
//     'A Smarter Way to Learn JavaScript',
//     'JS Enlightenment',
//     'Functional Programming in JavaScript'
// ];

// const searching = 'javascript';
// const result = [];
// for (const book of booksName) {
//     if (book.toLowerCase().includes(searching.toLowerCase())) {
//         result.push(book);
//     }
// }
// console.log(result);

// const booksName = [
//     "You Don't Know JavaScript",
//     'Learn JAVASCRIPT Visually',
//     'High-Performance Browser Networking',
//     'Beginning JavaScript',
//     'Eloquent JavaScript',
//     'A Smarter Way to Learn JavaScript',
//     'JS Enlightenment',
//     'Functional Programming in JavaScript'
// ];
// const searching = 'javascript';
// const result = [];
// for (const book of booksName) {
//     if (book.toLowerCase().indexOf(searching.toLowerCase())) {
//         result.push(book);
//     }
// }
// console.log(result);

const numbers = [56, 4, 2, 98, 67, 45, 92, 33];
const sortedNumbers = numbers.sort(function (a, b) {
    return a - b;
})
console.log(sortedNumbers);