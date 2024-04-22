import game from '../index.js';
import getRandom from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';

const greatestCommonDivisor = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  if (num2 === 0) {
    return num1;
  }
  return greatestCommonDivisor(num2, num1 % num2);
};

const getQuestionAndAnswer = () => {
  const num1 = getRandom(1, 20);
  const num2 = getRandom(1, 20);
  const question = `${num1} ${num2}`;
  const correctAnswer = greatestCommonDivisor(num1, num2).toString();

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
