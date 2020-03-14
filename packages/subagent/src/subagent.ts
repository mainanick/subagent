import fs from "fs";
import path from "path";
import { EventEmitter } from "events";
import debug from "./debug";

const pkgJsonPath = path.join(__dirname, "../", "./package.json");

export const version = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8")).version;

export class Subagent extends EventEmitter {
  constructor() {
    super();
  }
  send_mail(from: string, to: string[], subject?: string, content?: any) {
    this.emit("sent", {});
    debug(`Sent From: ${from}`);
    return [from, to, subject, content];
  }
}

export default Subagent;
