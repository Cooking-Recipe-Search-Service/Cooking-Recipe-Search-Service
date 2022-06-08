import { EnergyPipe } from './energy.pipe';

const mockCalories = [1,2,3,4,1000,11.2,12222.2223,10.2,1220.22,12334.123,10000.2]
const answerMock = ['0','0','0','0', '1','0','12.22','0','1.22','12.33','10'];
describe('EnergyPipe', () => {
  const pipe =new EnergyPipe();


  it('shold remove 0 on the and stay two digits on the ned', () => {

    mockCalories.forEach((num,i) => {
      return expect(pipe.format(num)).toBe(
        answerMock[i],
    );
    })

  });
});
