import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from './common/common.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { mailerConfig } from './config/mailer.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MailerModule.forRoot(mailerConfig),
    SharedModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
