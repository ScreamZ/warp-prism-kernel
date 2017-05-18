/// <reference types="bluebird" />
import * as Promise from "bluebird";
import { SendMailOptions, SentMessageInfo } from "nodemailer";
export declare class MailerService {
    private transporter;
    constructor(config?: any);
    sendMail(mailOptions: SendMailOptions): Promise<SentMessageInfo>;
}
