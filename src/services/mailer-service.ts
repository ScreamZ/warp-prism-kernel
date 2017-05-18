import * as Promise from "bluebird";
import { createTransport, SendMailOptions, SentMessageInfo, Transporter } from "nodemailer";

/**
 * Manage mails in your application
 */
export class MailerService {
  private transporter: Transporter;

  constructor(config?: any) {
    // this.transporter = createTransport()

    // console.log(this.transporter.verify());
  }

  /**
   * Send an email to the user.
   */
  public sendMail(mailOptions: SendMailOptions): Promise<SentMessageInfo> {
    return this.transporter.sendMail(mailOptions);
  }
}
