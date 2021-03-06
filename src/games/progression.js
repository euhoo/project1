import game from '..';
import makeRandomNumber from '../utils';

const rule = 'What number is missing in the progression?';
const lengthOfProgressionsRow = 10;

const makeRowOfNumbers = (min, step, indexOfCorrectAnswer) => {
  let question = ''; // сразу обозначаю,что это строка
  for (let count = 0; count < lengthOfProgressionsRow; count += 1) {
    question += (count === indexOfCorrectAnswer) ? '.. ' : `${min + step * count} `;
  }
  return question;
};

const logic = () => {
  const firstElement = makeRandomNumber(1, 10);
  const step = makeRandomNumber(1, 15);
  const indexOfCorrectAnswer = makeRandomNumber(0, lengthOfProgressionsRow - 1);
  const correctAnswer = String(firstElement + (step * indexOfCorrectAnswer));
  const question = makeRowOfNumbers(firstElement, step, indexOfCorrectAnswer);
  return [question, correctAnswer];
};
export default () => game(logic, rule);
