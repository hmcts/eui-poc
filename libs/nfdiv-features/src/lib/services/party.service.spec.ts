import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { PartyService } from './party.service';
import { environment } from "../../../../../apps/eui/src/environment/environment";

describe('Http testing PartyService', () => {
  const BASE_PATH = environment.BASE_URL
  let spectator: SpectatorHttp<PartyService>;
  let partiesURL  = `${BASE_PATH} /party`
  const createHttp = createHttpFactory(PartyService);

  beforeEach(() => spectator = createHttp());

 it('can test HttpClient.get', () => {
    spectator.service.parties$.subscribe();
    spectator.expectOne(partiesURL, HttpMethod.GET);
  });
});
