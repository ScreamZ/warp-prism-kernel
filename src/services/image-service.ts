import * as sharp from "sharp";

/**
 * Manage image in your application
 */
export class ImageService {
  private systemStressed: boolean = false;

  /**
   * Get a sharp instance : see http://sharp.dimens.io/en/stable/ for documentation on filters.
   */
  public getSharpFrom(input?: Buffer | string) {
    // return input ? sharp(input) : sharp();
  }
}
