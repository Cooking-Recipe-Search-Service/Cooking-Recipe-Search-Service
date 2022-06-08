import { DeclensionsPipe } from './declensions.pipe';

describe('DeclensionsPipe', () => {
    const pipe = new DeclensionsPipe();
    const one = ['1', '21', '141', '201', '401', '991'];
    const two = ['2', '3', '4', '33', '44', '182', '223', '902'];
    const many = [
        '0',
        '5',
        '10',
        '11',
        '15',
        '20',
        '56',
        '90',
        '111',
        '148',
        '512',
        '999',
    ];
    
    it('transforms to one: "ингредиентов" в "ингредиент"', () => {
        one.forEach((el) => {
            return expect(pipe.transform('ингредиентов', el)).toBe(
                'ингредиент',
            );
        });
    });


    it('transforms to two: "ингредиентов" в "ингредиента"', () => {
        two.forEach((el) => {
            return expect(pipe.transform('ингредиентов', el)).toBe(
                'ингредиента',
            );
        });
    });

    it('transforms to many: "ингредиентов" в "ингредиентов"', () => {
        many.forEach((el) => {
            return expect(pipe.transform('ингредиентов', el)).toBe(
                'ингредиентов',
            );
        });
    });

});
