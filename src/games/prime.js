import game from '../index.js';
import getRandom from '../random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    else if (num === 2) {
        return true;
    }
    else if (num % 2 === 0) {
        return false;
    }
    let sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) { 
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const getQuestionAndAnswer = () => {
    const num = getRandom (1, 120);
    const question = `${num}`;
    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return [question, correctAnswer];
   };

   export default () => {
    game(description, getQuestionAndAnswer)
   };