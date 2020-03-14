import fs from "fs";
import path from "path";
import { send } from "./src/mailer";
import { lookup } from "./src/mx";

const pkgJsonPath = path.join(__dirname, "../", "./package.json");

const version = JSON.parse(fs.readFileSync(pkgJsonPath, "utf8")).version;

console.log(version);
send("jkj@yjkh.hg", ["jkj@yjkh.hg"], "jf");
lookup("github.com")
  .then(console.log)
  .catch(console.error);
