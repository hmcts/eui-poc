import {Controller, Get, Param} from '@nestjs/common';
import {CaseApi, getCaseApi} from "./case-api";
import {getSystemUser} from "./auth/user/oidc";
import { Logger } from '@hmcts/nodejs-logging';
import {initAuthToken} from "./auth/service/get-service-auth-token";

const logger = Logger.getLogger('service-auth-token');
initAuthToken();


@Controller('case')
export class CaseController {
    constructor(private readonly case_api: CaseApi) {}

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const caseworkerUserApi = getCaseApi(await getSystemUser(), logger);
        return await caseworkerUserApi.getCaseById(id)
    }

}
