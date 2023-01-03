import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CaseworkersService } from "./caseworkers.service";
import { CreateCaseWorkerDto } from "./dto/createCaseWorkerDto";


@Controller("caseworker")
export class CaseworkerController {
  constructor(private service: CaseworkersService) {}

  @Get()
  findallCaseWorkers() {
    return "got all";
  }

  @Get(":id")
  findOne(@Param() params: string) {
    return `This action returns a #${params} case worker`;
  }

  @Post()
  async create(@Body() body, createCaseWorkerDto: CreateCaseWorkerDto) {
    //return "created "
    // body.id = null;
    // return this.service.create(body);
    if (createCaseWorkerDto === undefined) {
      createCaseWorkerDto = new CreateCaseWorkerDto()
    }
    createCaseWorkerDto.firstName = body.firstName
    createCaseWorkerDto.lastName = body.lastName
    createCaseWorkerDto.email = body.email
    return await this.service.create(createCaseWorkerDto);
  }
}
