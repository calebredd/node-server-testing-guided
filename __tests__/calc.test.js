const calculator=require('../calculator.js');

describe('calc funcs',()=>{
  describe('adds',()=>{
    it('should add 2 numbers',()=>{
      expect(calculator.add([2,2])).toBe(4);
    })
    it('should be reflexive',()=>{
      expect(calculator.add([2,0])).toBe(2);
    })
    it('should subtract 2 numbers',()=>{
      expect(calculator.subtract(2,2)).toBe(0);
    })
    it('should divide 2 numbers',()=>{
      expect(calculator.divide(2,2)).toBe(1);
    })
    it('should multiply 2 numbers',()=>{
      expect(calculator.multiply(2,2)).toBe(4);
    })

  })
})