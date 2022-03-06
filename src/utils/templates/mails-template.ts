import { ISendMailOptions } from '@nestjs-modules/mailer';

export class MailTemplate {
  static testMail(param): ISendMailOptions {
    const mail: ISendMailOptions = {
      to: process.env.SMTP_EMAIL,
      subject: 'Nome da Empresa - Contato',
      template: '../../templates/mail-body.hbs',
      context: {
        email: param.email,
        name: param.name,
        description: param.description,
      },
    };

    return mail;
  }
}
