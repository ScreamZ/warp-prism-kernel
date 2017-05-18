"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MailerService {
    constructor(config) {
    }
    sendMail(mailOptions) {
        return this.transporter.sendMail(mailOptions);
    }
}
exports.MailerService = MailerService;
