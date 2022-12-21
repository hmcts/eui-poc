import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PartyService } from "./party.service";
import { CreatePartyDto } from "./dto/create-party.dto";
import { UpdatePartyDto } from "./dto/update-party.dto";

@Controller("party")
export class PartyController {
  constructor(private readonly partyService: PartyService) {}

  @Get()
  findAll(@Param('caseId') id: string) {
    if (id) {
      return this.partyService.findAllByCaseId(id);
    } else {
      return this.partyService.findAll();
    }
  }
  @Get('/byCaseId:caseId')
  findMany(@Param('caseId') id: string) {
    return this.partyService.findAllByCaseId(id);
  }
  @Get('?id')
  findOne(@Param('id') id: string) {
    return this.partyService.findOne(+id);
  }
  @Post()
  async create(@Body() body, createPartyDto: CreatePartyDto) {
    if (createPartyDto === undefined) {
      createPartyDto = new CreatePartyDto();
    }
    createPartyDto.connectedCases = body.caseId;
    createPartyDto.firstName = body.item.firstName;
    createPartyDto.lastName = body.item.lastName;
    return await this.partyService.create(createPartyDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body, updatePartyDto: UpdatePartyDto) {
    if (updatePartyDto === undefined) {
      updatePartyDto = new CreatePartyDto();
    }
    updatePartyDto.id = body.id;
    updatePartyDto.connectedCases = body.connectedCases;
    updatePartyDto.firstName = body.firstName;
    updatePartyDto.lastName = body.lastName;
    return this.partyService.update(+id, updatePartyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partyService.remove(+id);
  }
}
