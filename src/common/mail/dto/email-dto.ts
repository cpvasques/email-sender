import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class EmailDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Email is required' })
  @IsString({ message: 'Email is required' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name is required' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Description  is required' })
  @IsString({ message: 'Description  is required' })
  description: string;
}
