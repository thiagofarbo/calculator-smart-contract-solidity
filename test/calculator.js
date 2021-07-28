const Calculator = artifacts.require('Calculator.sol');

contract('Calculator', () => {

    it('Should sum values', async () => {
            const calculator = await Calculator.new();
            await calculator.sum(10,10);

            const data = await calculator.getResult();
            assert(data.toString() === '20');
    });

    it('Should subtract values', async () => {
                const calculator = await Calculator.new();
                await calculator.subtract(20,10);

                const data = await calculator.getResult();
                assert(data.toString() === '10');
    });

    it('Should multiply values', async () => {
                const calculator = await Calculator.new();
                await calculator.multiply(6,5);

                const data = await calculator.getResult();
                assert(data.toString() === '30');
    });

    it('Should divide values', async () => {
                const calculator = await Calculator.new();
                await calculator.divide(6,6);

                const data = await calculator.getResult();
                assert(data.toString() === '1');
    });
});