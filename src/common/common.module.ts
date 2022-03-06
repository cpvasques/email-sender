import { Module } from '@nestjs/common';
import { SharedModule } from '../shared/shared.module';
import { MailController } from './mail/mail.controller';

@Module({
  imports: [SharedModule],
  controllers: [MailController],
})
export class CommonModule {}
