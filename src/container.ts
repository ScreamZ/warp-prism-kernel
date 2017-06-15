import { ImageService } from "./services/image-service";
import { MailerService } from "./services/mailer-service";
import { SystemService } from "./services/system-service";
import { ValidatorService } from "./services/validator-service";

/**
 * Represent the container instance.
 */
export interface IContainerInterface {
  systemService: SystemService;
  imageService: ImageService;
  mailerService: MailerService;
  validatorService: ValidatorService;
}
