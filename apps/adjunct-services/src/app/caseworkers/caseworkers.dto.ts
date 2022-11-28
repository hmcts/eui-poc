import { IsEmail, IsString } from "class-validator";

export class CreatCaseWorkerDto {
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
}
