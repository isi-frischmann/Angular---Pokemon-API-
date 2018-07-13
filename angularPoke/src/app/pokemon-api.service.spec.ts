import { TestBed, inject } from '@angular/core/testing';

import { PokemonAPIService } from './pokemon-api.service';

describe('PokemonAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonAPIService]
    });
  });

  it('should be created', inject([PokemonAPIService], (service: PokemonAPIService) => {
    expect(service).toBeTruthy();
  }));
});
