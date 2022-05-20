"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MathBasic_1 = require("./MathBasic");
describe('A MathBasic', () => {
    it('should cointains add, subtract, multiply, and divide function', () => {
        expect(MathBasic_1.MathBasic).toHaveProperty('add');
        expect(MathBasic_1.MathBasic).toHaveProperty('subtract');
        expect(MathBasic_1.MathBasic).toHaveProperty('multiply');
        expect(MathBasic_1.MathBasic).toHaveProperty('divide');
        expect(MathBasic_1.MathBasic.add).toBeInstanceOf(Function);
        expect(MathBasic_1.MathBasic.subtract).toBeInstanceOf(Function);
        expect(MathBasic_1.MathBasic.multiply).toBeInstanceOf(Function);
        expect(MathBasic_1.MathBasic.divide).toBeInstanceOf(Function);
    });
});
