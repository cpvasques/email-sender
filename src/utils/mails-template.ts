import { ISendMailOptions } from '@nestjs-modules/mailer';
require('dotenv').config();

export class MailTemplate {
  static testMail(param): ISendMailOptions {
    const mail: ISendMailOptions = {
      // to: process.env.SMTP_EMAIL,
      to: 'email@queirareceber.com.br',
      subject: 'Nome da Empresa - Contato',
      template: `${process.cwd()}/templates/mail-body.hbs`,
      context: {
        email: param.email,
        name: param.name,
        description: param.description,
      },
    };

    return mail;
  }
}
