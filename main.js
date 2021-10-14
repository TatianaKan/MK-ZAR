const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'dagger'],
    attack: function () {
        console.log(player1 + 'Fight');
    }
};

const player2 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife', 'dagger'],
    attack: function () {
        console.log(player2 + 'Fight');
    }
};

// console.log(player1);
// console.log(player2);

function createPlayer() {
    const $root = document.querySelector('.root');

    const $player1 = document.createElement('div');
    $player1.classList.add('player1');

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $character = document.createElement('div');
    $character.classList.add('character');

    $player1.appendChild($progressbar);
    $player1.appendChild($character);


    const $life = document.createElement('div');
    $life.classList.add('life');
    const $name = document.createElement('div');
    $name.classList.add('name');

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $name.innerText='SCORPION';

    const $img = document.createElement('img');
    $img.src='http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

    $character.appendChild($img)


    $root.appendChild($player1);
}

createPlayer();