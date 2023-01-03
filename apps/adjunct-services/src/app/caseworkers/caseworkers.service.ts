import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CaseWorker } from "./caseworker.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateCaseWorkerDto } from "./dto/createCaseWorkerDto";

@Injectable()
export class CaseworkersService {
  constructor(
    @InjectRepository(CaseWorker) private repo: Repository<CaseWorker>
  ) {}
  async create(cw: CreateCaseWorkerDto) {
    return  await this.repo.save(cw);
  }
}
