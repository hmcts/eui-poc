import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { PartyService } from './party.service';

describe('PartyService', () => {
  let spectator: SpectatorHttp<PartyService>;
  const createHttp = createHttpFactory(PartyService);

  beforeEach(() => spectator = createHttp());

 it('can test HttpClient.get', () => {
    // spectator.service.getTodos().subscribe();
    // spectator.expectOne('api/todos', HttpMethod.GET);
  });
});
