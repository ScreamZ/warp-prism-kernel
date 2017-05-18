import { SystemService } from "./services/system-service";
export { SystemService } from "./services/system-service";
import { ImageService } from "./services/image-service";
export { ImageService } from "./services/image-service";
import { MailerService } from "./services/mailer-service";
export { MailerService } from "./services/mailer-service";
export interface IContainerInterface {
    systemService: SystemService;
    imageService: ImageService;
    mailerService: MailerService;
}
