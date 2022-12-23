import { DataSource } from "typeorm";
import { Party } from "./entities/party.entity";

export const party_providers = [
  {
    provide: 'PARTY_PROVIDERS',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Party),
    inject: ['DATA_SOURCE']
  }];
