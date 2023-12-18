import { RiceCooker } from './';

describe('RiceCooker', () => {
  let riceCooker: RiceCooker;

  beforeEach(() => {
    riceCooker = new RiceCooker();
  });

  it('should start with idle cooking status', () => {
    expect(riceCooker.getCookingStatus()).toBe('idle');
  });

  it('should add rice to the cooker', () => {
    riceCooker.addRice();
    expect(riceCooker.getHasRice()).toBe(true);
  });

});
