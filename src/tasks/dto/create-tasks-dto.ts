import { IsNotEmpty, IsString } from "class-validator";

export class CreateTasksDto{
    @IsString()
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    @IsString()
    content: string
}