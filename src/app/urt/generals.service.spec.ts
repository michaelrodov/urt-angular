/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GeneralsService } from './generals.service';

describe('GeneralsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneralsService]
    });
  });

  it('should ...', inject([GeneralsService], (service: GeneralsService) => {
    expect(service).toBeTruthy();
  }));
});
