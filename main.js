const user = document.querySelectorAll('.name');
const btn = document.querySelector('.sign__buttons');
const userImage = document.querySelector('.choose__img-user');
const computerImage = document.querySelector('.choose__img-computer');
const computerScore = document.querySelector('.computer__score');
const drawScore = document.querySelector('.draw__score');
const userScore = document.querySelector('.user__score');

let userName;
let userChoose;
let signComputer;
let userPoint = 0;
let draw = 0;
let computerPoint = 0;

let signComputerArray = ['Rock', 'Paper', 'Scissors'];
const signArray = [{
        'name': 'Rock',
        'image': 'image/rock.png'
    },
    {
        'name': 'Paper',
        'image': 'image/paper.png'
    },
    {
        'name': 'Scissors',
        'image': 'image/csissors.png'
    }
];


// let write = setTimeout(() => {
//     userName = prompt('What is your name?');
//     writeUserName();
// }, 300);

// let writeUserName = () => {
//     if (userName == null || userName == undefined || userName == '') {
//         for (let item of user) {
//             item.innerText = 'You';
//         }
//     } else {
//         for (let item of user) {
//             item.innerText = userName;
//         }
//     }
// };

let choosedSign = () => {
    userChoose = event.target.textContent;
    for (let i = 0; i < signArray.length; i++) {
        if (userChoose === signArray[i].name) {
            addImage(userImage, signArray[i].image);
            chooseComputer(signComputerArray);
        }
    };
    countResult();
}

function chooseComputer(array) {
    let result = Math.floor(Math.random() * array.length);
    signComputer = array[result];
    for (let i = 0; i < signArray.length; i++) {
        if (array[result] === signArray[i].name) {
            addImage(computerImage, signArray[i].image);
        }
    }
};

function addImage(player, link) {
    player.src = link;
};

function countResult() {
    if (userChoose === signComputer) {
        draw += 1;
        showResult(drawScore, draw);
    } else if (userChoose === 'Paper' && signComputer === 'Rock' || userChoose === 'Scissors' && signComputer === 'Paper' || userChoose === 'Rock' && signComputer === 'Scissors') {
        userPoint += 1;
        showResult(userScore, userPoint)
    } else {
        computerPoint += 1;
        showResult(computerScore, computerPoint)
    }
};

function showResult(player, point) {
    player.innerText = point;
}

btn.addEventListener('click', choosedSign)