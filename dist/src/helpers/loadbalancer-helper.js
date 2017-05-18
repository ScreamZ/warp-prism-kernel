"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const monitor = require("os-monitor");
class LoadBalancerHelper {
    constructor(config) {
        this.systemStressed = false;
        this.initProbe();
    }
    initProbe() {
        monitor.start();
        monitor.on('loadavg1', () => {
            this.systemStressed = true;
        });
        setTimeout(() => {
            this.systemStressed = true;
        }, 5000);
    }
    isSystemStressed() {
        return this.systemStressed;
    }
}
exports.LoadBalancerHelper = LoadBalancerHelper;
