const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'dagger'],
    attack: function() {
        console.log (player1 + 'Fight');
    }
};

const player2 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['knife', 'dagger'],
    attack: function() {
        console.log (player2 + 'Fight');
    }
};

// console.log(player1);
// console.log(player2);

function createPlayer() {
    const $player1 = document.createElement('div');
    $player1.classList.add('player1')
}

createPlayer();