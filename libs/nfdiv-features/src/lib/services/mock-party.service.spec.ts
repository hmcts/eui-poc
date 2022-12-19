import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockPartyService } from "@nfdiv/features";

describe('MockPartyService', () => {
  let spectator: SpectatorService<MockPartyService>;
  const createService = createServiceFactory(MockPartyService);

  beforeEach(() => {
    spectator = createService()
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it ('should have 2 mock entries', () => {
    let parties = spectator.service.parties$.value;
    expect(parties.length).toEqual(2);
  })
  it ('should have 3  entries after add', () => {
    spectator.service.addParty({id: '', firstName: 'Testy', lastName: 'geezer'})
    let parties = spectator.service.parties$.value;
    expect(parties.length).toEqual(3);
    expect(parties[2].id).toEqual('12345')
  })

  it ('should find a party by id', () => {
    spectator.service.addParty({id: '12345', firstName: 'Testy', lastName: 'Geezer'})
    let party = spectator.service.getPartyById('12345');
    expect(party.firstName === 'Testy')
    expect(party.lastName === 'Geezer')
    expect(party.id === '12345')
  })

  it ('should update a party by id', () => {
    spectator.service.updateParty({id: '2d532789-32d5-49fa-a030-a72634b6196d', firstName: 'Testy', lastName: 'Geezer'})
    let party = spectator.service.getPartyById('2d532789-32d5-49fa-a030-a72634b6196d');
    expect(party.firstName === 'Testy')
    expect(party.lastName === 'Geezer')
    expect(party.id === '12345')
  })

  it ('should delete a party by id', () => {
    spectator.service.deleteParty('2d532789-32d5-49fa-a030-a72634b6196d')
    let parties = spectator.service.parties$.value;
    expect(parties.length).toEqual(1);
  })

});
