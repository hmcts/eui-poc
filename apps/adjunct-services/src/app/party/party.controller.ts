import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PartyService } from './party.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';

@Controller('party')
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Post()
  async create(@Body() body, createPartyDto: CreatePartyDto) {
    console.log(body)
    if (createPartyDto === undefined) {
      createPartyDto = new CreatePartyDto()
    }
    createPartyDto.connectedCases = body.caseId;
    createPartyDto.firstName = body.item.firstName
    createPartyDto.lastName = body.item.lastName
    let reponse = await this.partyService.create(createPartyDto);
    return reponse
  }

  @Get()
  findAll() {
    return this.partyService.findAll();
  }

  @Get(':caseId')
  findMany(@Param('caseId') id: string) {
    return this.partyService.findAllByCaseId(id);
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
}
