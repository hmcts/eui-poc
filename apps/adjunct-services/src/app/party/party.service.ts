import { Injectable } from '@nestjs/common';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Party } from "./entities/party.entity";
import { Repository } from "typeorm";

@Injectable()
export class PartyService {

  constructor(@InjectRepository(Party) private readonly party:Repository<Party>) {
  }
  create(createPartyDto: CreatePartyDto) {
     return this.party.save(createPartyDto)
  }

  findAll() {
    return this.party.find();
  }

  findAllByCaseId(caseID) {
    return this.party.find({where: { connectedCases: caseID},});
  }

  findOne(id: number) {
    return `This action returns a #${id} party`;
  }

  async update(id: number, updatePartyDto: UpdatePartyDto) {
    let changed = await this.party.update(id,updatePartyDto)
    if (changed.affected > 0) {
      return this.party.findOne({where: { id: id},})
    }
  }

  remove(id: number) {
    return this.party.delete(id);
  }
}
