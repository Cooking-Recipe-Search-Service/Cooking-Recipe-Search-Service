import { RecipeTagsPipe } from './recipe-tags.pipe';

const mockTimes = [60, 120, 180, 30, 10, 0, 100, 200];
const mockAnswers = [
    '1ч',
    '2ч',
    '3ч',
    '30мин',
    '10мин',
    '0мин',
    '1ч 40мин',
    '3ч 20мин',
];

describe('RecipeTagsPipe', () => {
    const pipe = new RecipeTagsPipe();

    it('should tranform time in correct string', () => {
        mockTimes.forEach((time, i) => {
            return expect(pipe.convertTime(time)).toEqual(mockAnswers[i]);
        });
    });
});
