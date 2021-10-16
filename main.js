const player1 = {
    name: 'Scorpion',
    hp: 20,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'dagger'],
    attack: function () {
        console.log(player1.name + 'Fight');
    }
};

const player2 = {
    name: 'Kitana',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife', 'dagger'],
    attack: function () {
        console.log(player2.name + 'Fight');
    }
};

player1.attack();
player2.attack();

// console.log(player1);
// console.log(player2);

function createPlayer(players, obj ) {
    const $arenas = document.querySelector('.arenas');

    const $players = document.createElement('div');
    $players.classList.add(players);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $character = document.createElement('div');
    $character.classList.add('character');

    $players.appendChild($progressbar);
    $players.appendChild($character);


    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = obj.hp+'%';
    const $name = document.createElement('div');
    $name.classList.add('name');
    
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $name.innerText=obj.name;

    const $img = document.createElement('img');
    $img.src=obj.img;

    $character.appendChild($img)


    $arenas.appendChild($players);
}

// createPlayer();
// createPlayer('player1', 'SCORPION', 50);
// createPlayer('player2', 'SUB-ZERO', 60);

createPlayer('player1', player1);
createPlayer('player2', player2);