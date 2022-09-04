const user = document.querySelectorAll('.name');
const btn = document.querySelector('.sign__buttons');
const userImage = document.querySelector('.choose__img-user');

let userName;

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


let write = setTimeout(() => {
    userName = prompt('What is your name?');
    writeUserName();
}, 300);

let writeUserName = () => {
    if (userName == null || userName == undefined || userName == '') {
        for (let item of user) {
            item.innerText = 'You';
        }
    } else {
        for (let item of user) {
            item.innerText = userName;
        }
    }
};

let choosedSign = () => {
    let key = event.target.textContent;
    for (let i = 0; i < signArray.length; i++) {
        if (key === signArray[i].name) {
            addImage(signArray[i].image)
            console.log(key);
        }
    }
}

function addImage(link) {
    userImage.src = link;
}


btn.addEventListener('click', choosedSign)