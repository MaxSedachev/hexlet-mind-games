import game from '../index.js';
import getRandom from '../random.js';

const description = 'What number is missing in the progression?';
const getProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandom(0, 5);
  const step = getRandom(1, 5);
  const length = getRandom(10, 15);
  const progression = getProgression(start, step, length);
  const hiddenvalue = getRandom(0, (length - 1));
  const correctAnswer = progression[hiddenvalue].toString();
  progression[hiddenvalue] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  game(description, getQuestionAndAnswer);
};
