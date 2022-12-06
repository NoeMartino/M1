const { checkSeatStatus, getRowNumber, book } = require('../homework');

describe('checkSeatStatus tests', () => {
  //TEST ONE
  it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });

  //TEST TWO
  it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
  });

  // TEST THREE
  it('should throw a TypeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('A', '2')).toThrow(new TypeError('Second parameter is not a number'));
  });

  //TEST FIVE
  it('should return true if the given seat defined by row and column is booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
  });

  it('should return false if the given seat defined by row and column is not booked', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
  });
});

describe('getRowNumber tests', () => {
  //TEST FOUR
  it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });

  it('should return 2 if the letter given is a C', () => {
    expect(getRowNumber('C')).toBe(2);
  });
});

describe('book tests', () => {
  it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
    expect(book('E',3)).toBe('Seat in E3 successfully booked');
  });

  it('should return "Seat in XX is already booked" if the given seat is booked', () => {
    expect(book('A',1)).toBe('Seat in A1 is alredy booked');
  });
});