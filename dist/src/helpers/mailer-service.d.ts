/// <reference types="bluebird" />
import { SendMailOptions, SentMessageInfo } from 'nodemailer';
import * as Promise from 'bluebird';
export declare class MailerService {
    private transporter;
    constructor(config?: any);
    sendMail(mailOptions: SendMailOptions): Promise<SentMessageInfo>;
}
