import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";


export class SignUpBodyDto {

    @ApiProperty({
        example: 'senya@mail.ru'
    })
    @IsEmail()
    email: string

    @ApiProperty({
        example: '228'
    })
    @IsNotEmpty()
    password: string


}

export class SignInBodyDto {

    @ApiProperty({
        example: 'senya@mail.ru'
    })
    email: string

    @ApiProperty({
        example: '228'
    })
    password: string

}

export class GetSessionInfoDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string
}