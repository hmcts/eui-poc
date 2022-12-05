import {Headers, Controller, Get, Param, Req, Post, Body} from '@nestjs/common';
import {CaseApi, getCaseApi} from "./case-api";
import {getSystemUser} from "./auth/user/oidc";
import { Logger } from '@hmcts/nodejs-logging';
import {initAuthToken} from "./auth/service/get-service-auth-token";
import {CaseData, CITIZEN_UPDATE, CITIZEN_UPDATE_CASE_STATE_AAT} from "./definition";
import {Case} from "./case";

const logger = Logger.getLogger('service-auth-token');
initAuthToken();


@Controller('case')
export class CaseController {

    @Get(':id')
    async findOne(@Req() request: any, @Param('id') id: string) {
        var auth = request.cookies['__auth__']
        const caseworkerUserApi = getCaseApi(auth, logger);
        var c = await caseworkerUserApi.getCaseById(id)

        return c;
    }

    @Post(':id')
    async update(@Req() request: any, @Body() c: Partial<Case>, @Param('id') id: string) {
        var auth = request.cookies['__auth__']
        const caseworkerUserApi = getCaseApi(auth, logger);
        await caseworkerUserApi.triggerEvent('1669996761194595', c, 'update-appointment')
    }


}
