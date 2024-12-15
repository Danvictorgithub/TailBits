import { ProfileOwnerGuard } from './profile-owner.guard';

describe('ProfileOwnerGuard', () => {
  it('should be defined', () => {
    expect(new ProfileOwnerGuard()).toBeDefined();
  });
});
