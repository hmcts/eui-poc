import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartyService } from './party.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { Party } from "@hmcts-data";

@Controller('party')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Post()
  create(@Body() body, createPartyDto: CreatePartyDto) {
    console.log(body)
    createPartyDto.id = body.id;
    createPartyDto.caseId = body.caseId;
    createPartyDto.firstName = body.firstName
    createPartyDto.lastName = body.lastName
    return this.partyService.create(createPartyDto);
  }

  @Get()
  findAll() {
    // return this.partyService.findAll();
    return this.createDummyData();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePartyDto: UpdatePartyDto) {
    return this.partyService.update(+id, updatePartyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partyService.remove(+id);
  }

  private createDummyData(): Party[] {
    let retValue = new Array<Party>();
    retValue.push(
      {
        id: "2d532789-32d5-49fa-a030-a72634b6196d",
        firstName: "party1_firstName",
        lastName: "party1_lastName"
      } as Party);
    retValue.push({
      id: "2d532789-32d5-49fa-a030-a72634b6196d",
      firstName: "party2_firstName",
      lastName: "party2_lastName",
    } as Party);
    return retValue;
  }
}
