import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreatCaseWorkerDto } from "./caseworkers.dto";

@Controller("caseworker")
export class CaseworkerController {
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
  create(@Body() createCaseWorker: CreatCaseWorkerDto) {
    return "created one";
  }
}
