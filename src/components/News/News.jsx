import React from 'react';

let mass = ['as', 'News2', 3];
// let mass = [
//             { capital: 'Sacramento' },
//             { founded: '9 сентября 1850' },
//             { population: '40000000' },
//             { motto: 'Эврика' },
//             { anthem: 'I Love You, California' }
// ];


const News = (props) => {
    let name = prompt('Привіт, Як тебе звати');

    while (name == '' || name == null) {
        name = prompt('Привіт, Як тебе звати');
    }
    alert(name + ' вгадайте число від 1 до 5');

    let num = Math.ceil(Math.random()*3);
 
    let guess = prompt('Введіть число від 1 до 5');
    let numOfGuess = 1;

    while (guess != num) {
        if (guess > num) {
            guess = prompt('забагато Спробуй ще');
        } else  {
            guess = prompt('мало. Спробуй ще');
        }
        numOfGuess = numOfGuess +1;
    }
    alert('Вітаю ви відгадали ' + num + ' спроб: ' + numOfGuess);
    return (
        <div>

            <div>
                {mass[1]}
            </div>
            <div>

            </div>
        </div>
    );
}
export default News;