import game from '../index.js';
import getRandom from '../random.js';

const description = 'What is the result of the expression?';

const mathOperations = ['+', '-', '*'];

const calcAnswer = (num1, num2, operations) => {
  let result;
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

const getQuestionAndAnswer = () => {
  const num1 = getRandom(1, 20);
  const num2 = getRandom(1, 20);
  const operation = mathOperations[getRandom(0, mathOperations.length)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = calcAnswer(num1, num2, operation).toString();

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
