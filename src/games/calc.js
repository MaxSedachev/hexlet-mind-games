import game from '../index.js';

const description = 'What is the result of the expression?';

const operations = ['+', '-', '*'];

const calcAnswer = (num1, num2, operations) => {
    let result
    switch (operations) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
    }
    return result;
};


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
   };

   const getQuestionAndAnswer = () => {
    const num1 = getRandomInt (1, 20);
    const num2 = getRandomInt (1, 20);
    const operation = operations[getRandomInt(0, operations.length)];
    const question = `${num1}${operation}${num2}`;
    const correctAnswer = calcAnswer(num1, num2, operation).toString();

    return [question, correctAnswer];
   };

   export default () => {
    game(description, getQuestionAndAnswer)
   };