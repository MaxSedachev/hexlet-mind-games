import game from '../index.js';
import getRandom from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
    const question = getRandom (1, 9);
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [question, correctAnswer];
   };

   export default () => {
    game(description, getQuestionAndAnswer)
   };