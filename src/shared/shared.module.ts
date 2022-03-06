import { Module } from '@nestjs/common';
import { MailService } from './mail/mail.service';

@Module({
  imports: [],
  providers: [MailService],
  exports: [MailService],
})
export class SharedModule {}
