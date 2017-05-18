import * as monitor from "os-monitor";

/**
 * Some helpers to handle system charge.
 *
 * !!! WARNING : This is only avalaible for LINUX based systems !!!
 */
export class SystemService {
  /**
   * Monitor system resources in order to handler
   */
  private systemStressed: boolean = false;

  constructor(config?: any) {
    this.initProbe();
  }

  public initProbe() {
    monitor.start();

    monitor.on("loadavg1", () => {
      this.systemStressed = true;
    });

    setTimeout(() => {
      this.systemStressed = true;
    }, 5000);
  }

  /**
   * Wheter the system is ready to handle more request depending on the CPU / RAM charge.
   */
  public isSystemStressed(): boolean {
    return this.systemStressed;
  }
}
