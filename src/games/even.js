import game from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
   };

   const getQuestionAndAnswer = () => {
    const question = getRandomInt (1, 9);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [question, correctAnswer];
   };

   export default () => {
    game(description, getQuestionAndAnswer)
   };