import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { notCompletedGuard } from './not-completed.guard';

describe('notCompletedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notCompletedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
