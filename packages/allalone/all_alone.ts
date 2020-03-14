import fs from "fs";
import path from "path";
import { send } from "./src/mailer";
import debug from "./src/debug";

const pkgJsonPath = path.join(__dirname, "../", "./package.json");

const version = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8")).version;

debug("Version %o", version);

send("jkj@yjkh.hg", ["jkj@yjkh.hg"], "jf");
