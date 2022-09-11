const user = document.querySelectorAll('.name');
const btn = document.querySelector('.sign__buttons');
const userImage = document.querySelector('.choose__img-user');
const computerImage = document.querySelector('.choose__img-computer');

let userName;
let userChoose;
let signComputer;
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
    let userChoose = event.target.textContent;
    for (let i = 0; i < signArray.length; i++) {
        if (userChoose === signArray[i].name) {
            addImage(userImage, signArray[i].image);
            chooseComputer(signComputerArray);
            console.log(userChoose);
        }
    }
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
}

btn.addEventListener('click', choosedSign)