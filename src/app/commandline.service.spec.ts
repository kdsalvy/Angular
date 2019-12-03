import { TestBed } from '@angular/core/testing';

import { CommandlineService } from './commandline.service';

describe('CommandlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandlineService = TestBed.get(CommandlineService);
    expect(service).toBeTruthy();
  });
});
