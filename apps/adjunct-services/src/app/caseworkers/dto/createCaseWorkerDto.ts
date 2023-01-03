import { IsEmail, IsString } from "class-validator";

export class CreateCaseWorkerDto {
  id: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
}