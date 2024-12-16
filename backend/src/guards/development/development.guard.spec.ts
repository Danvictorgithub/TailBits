import { DevelopmentGuard } from './development.guard';

describe('DevelopmentGuard', () => {
  it('should be defined', () => {
    expect(new DevelopmentGuard()).toBeDefined();
  });
});
