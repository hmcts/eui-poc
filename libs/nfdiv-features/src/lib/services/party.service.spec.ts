import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator/jest';
import { PartyService } from './party.service';
import { environment } from "../../../../../apps/eui/src/environment/environment";
import { Party } from "@hmcts-data";

describe('Http testing PartyService', () => {
  const BASE_PATH = environment.BASE_URL
  let spectator: SpectatorHttp<PartyService>;
  let partiesURL = `${BASE_PATH} /party`
  let testData = [{
    "id": "2d532789-32d5-49fa-a030-a72634b6196d",
    "firstName": "party1_firstName",
    "lastName": "party1_lastName"
  }, {
    "id": "2d532789-32d5-49fa-a030-a72634b6196d",
    "firstName": "party2_firstName",
    "lastName": "party2_lastName",
  }];
  let addItem =
  {id: '', firstName: 'Testy', lastName: 'Geezer'}
  let data:  Party[]


  const createHttp = createHttpFactory(PartyService);

  beforeEach(() => {
    spectator = createHttp()

    spectator.service.parties$.subscribe((response) => {
      data = response;
    });
    spectator.service.getParties();
    const request = spectator.expectOne(partiesURL, HttpMethod.GET);
    request.flush( testData );
  });

  it('it should get a list of parties', () => {
    expect(data).toBeTruthy();
    if (data) {
      expect(data[0]).toStrictEqual({
        "id": "2d532789-32d5-49fa-a030-a72634b6196d",
        "firstName": "party1_firstName",
        "lastName": "party1_lastName"
      })
      expect(data[1]).toStrictEqual({
        "id": "2d532789-32d5-49fa-a030-a72634b6196d",
        "firstName": "party2_firstName",
        "lastName": "party2_lastName",
      })
    }
  });

  it('it can add a party and deal with the correct response', () => {
    let incoming
    spectator.service.addParty(addItem).subscribe( (response) => {
      incoming = response
    })
    const request = spectator.expectOne(partiesURL, HttpMethod.POST);
    request.flush({id: '12345', firstName: 'Testy', lastName: 'Geezer'})
    expect(incoming).toStrictEqual([
      {
        "firstName": "party1_firstName",
        "id": "2d532789-32d5-49fa-a030-a72634b6196d",
        "lastName": "party1_lastName"
      },
      {
        "firstName": "party2_firstName",
        "id": "2d532789-32d5-49fa-a030-a72634b6196d",
        "lastName": "party2_lastName"
      },
      {
        "firstName": "Testy",
        "id": "12345",
        "lastName": "Geezer"
      }
    ])
    expect(data).toBeTruthy();
    if (data) {
      expect(data[2]).toStrictEqual({
        "id": "12345",
        "firstName": "Testy",
        "lastName": "Geezer",
      })
    }
  })

  it ('should find a party by id', () => {
    let incoming
    // spectator.service.addParty(addItem).subscribe( (response) => {
    //   incoming = response
    // })
    // const request = spectator.expectOne(partiesURL, HttpMethod.POST);
    // request.flush({id: '12345', firstName: 'Testy', lastName: 'Geezer'})

    // expect(incoming).toStrictEqual([
    //   {
    //     "firstName": "party1_firstName",
    //     "id": "2d532789-32d5-49fa-a030-a72634b6196d",
    //     "lastName": "party1_lastName"
    //   },
    //   {
    //     "firstName": "party2_firstName",
    //     "id": "2d532789-32d5-49fa-a030-a72634b6196d",
    //     "lastName": "party2_lastName"
    //   },
    //   {
    //     "firstName": "Testy",
    //     "id": "12345",
    //     "lastName": "Geezer"
    //   }
    // ])
    let party = spectator.service.getPartyById('12345');
    expect(party.firstName === 'Testy')
    expect(party.lastName === 'Geezer')
    expect(party.id === '12345')
  })

  it('it should update an party using an ID and an attribute', () => {
    let data;
    spectator.service.getParties();
    const request0 = spectator.expectOne(partiesURL, HttpMethod.GET);
    request0.flush( testData );

    spectator.service.updateParty('12345', {firstName: 'Freddy'}).subscribe( (response) => {
      data =[response]
    })


    const request = spectator.expectOne(partiesURL + '/id/12345', HttpMethod.PATCH);
    request.flush({id: '12345', firstName: 'Freddy', lastName: 'Geezer'})

    expect(data).toBeTruthy();
    if (data) {
      expect(data).toStrictEqual([{
        "id": "12345",
        "firstName": "Freddy",
        "lastName": "Geezer",
      }])
    }
  })

  it('it should delete  a party using an ID and an attribute', () => {

    let currentLen = data.length

    spectator.service.deleteParty('2d532789-32d5-49fa-a030-a72634b6196d')

    const request = spectator.expectOne(partiesURL + '/id/2d532789-32d5-49fa-a030-a72634b6196d', HttpMethod.DELETE);
    request.flush(      {
      id: "2d532789-32d5-49fa-a030-a72634b6196d",
      firstName: "party1_firstName",
      lastName: "party1_lastName"
    })

    expect(data).toBeTruthy();
    if (data) {
      expect(data.length).toStrictEqual(currentLen -1 )
    }
  })

});
