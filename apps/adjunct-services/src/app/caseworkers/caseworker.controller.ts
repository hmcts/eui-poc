import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreatCaseWorkerDto } from "./caseworkers.dto";
import { CaseworkersService } from "./caseworkers.service";
import { CaseWorker } from "./caseworker.entity";

@Controller("caseworker")
export class CaseworkerController {
  constructor(private service: CaseworkersService) {}

  @Get()
  findallCaseWorkers() {
    return "got all";
  }

  @Get(":id")
  findOne(@Param() params: string) {
    console.log(params);
    return `This action returns a #${params} case worker`;
  }

  @Post()
  create(@Body() body: CaseWorker) {
    console.log(body);
    body.id = null;
    return this.service.create(body);
  }
}
