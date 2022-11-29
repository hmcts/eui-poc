import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CaseWorker } from "./caseworker.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CaseworkersService {
  constructor(
    @InjectRepository(CaseWorker) private repo: Repository<CaseWorker>
  ) {}
  create(cw: CaseWorker) {
    // @ts-ignore
    const user = this.repo.create(null, cw.firstName, cw.lastName, cw.email);
    return this.repo.save(user);
  }
}
