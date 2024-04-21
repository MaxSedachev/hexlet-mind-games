import game from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

function greatestCommonDivisor(num1, num2) {
    if(num1 === 0) { return num2}
    if(num2 === 0) { return num1}

    return greatestCommonDivisor(num2, num1 % num2);
};
   
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
   };

   const getQuestionAndAnswer = () => {
    const num1 = getRandomInt (1, 20);
    const num2 = getRandomInt (1, 20);
    const question = `${num1} ${num2}`;
    const correctAnswer = greatestCommonDivisor(num1, num2).toString();

    return [question, correctAnswer];
   };

   export default () => {
    game(description, getQuestionAndAnswer)
   };