import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { MailTemplate } from 'src/utils/templates/mails-template';
import { mailerConfig } from 'src/config/mailer.config';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(param: any): Promise<void> {
    try {
      const testMail = MailTemplate.testMail(param);
      await this.mailerService.sendMail(testMail);
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException(
        'Não foi possível enviar o e-mail',
      );
    }
  }
}
