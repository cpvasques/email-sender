import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as Path from 'path';

export const mailerConfig: MailerOptions = {
  transport: {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    tls: { rejectUnauthorized: false },
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  },
  defaults: {
    from: process.env.SMTP_EMAIL,
  },
  template: {
    dir: Path.resolve(__dirname, '..', '..', 'templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      extName: '.hbs',
      layoutDir: Path.resolve(__dirname, '..', '..', 'templates'),
      partials: {
        dir: Path.resolve(__dirname, '..', '..', 'templates/partials'),
        options: {
          strict: true,
        },
      },
    },
  },
};
