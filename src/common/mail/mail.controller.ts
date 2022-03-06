import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmailDto } from './dto/email-dto';
import { MailService } from 'src/shared/mail/mail.service';

@ApiTags('Email')
@Controller('sendEmail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Post()
  @ApiOperation({ summary: 'Send form email' })
  @ApiResponse({ status: 201 })
  @ApiResponse({ status: 400 })
  @ApiResponse({ status: 422 })
  @ApiResponse({ status: 500 })
  @HttpCode(200)
  sendFormEmail(@Body() emailDto: EmailDto): Promise<void> {
    return this.mailService.sendEmail(emailDto);
  }
}
