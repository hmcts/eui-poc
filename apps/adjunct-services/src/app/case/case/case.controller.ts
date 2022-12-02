import {Headers, Controller, Get, Param, Req} from '@nestjs/common';
import {CaseApi, getCaseApi} from "./case-api";
import {getSystemUser} from "./auth/user/oidc";
import { Logger } from '@hmcts/nodejs-logging';
import {initAuthToken} from "./auth/service/get-service-auth-token";
import {UserDetails} from "./AppRequest";

const logger = Logger.getLogger('service-auth-token');
initAuthToken();


@Controller('case')
export class CaseController {

    @Get(':id')
    async findOne(@Req() request: any, @Param('id') id: string) {

        var auth = request.cookies['__auth__']
        const caseworkerUserApi = getCaseApi(auth, logger);
        var c = await caseworkerUserApi.getCaseById(id)
        return c.applicant1SolicitorRepresented;
    }

}
