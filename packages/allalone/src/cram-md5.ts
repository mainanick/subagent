import crypto from "crypto";
export function response(username: string, password: string, challenge: string) {
  const chlg = Buffer.from(challenge, "base64").toString("ascii"); // Challenge
  const hmac = crypto.createHmac("md5", password);
  hmac.update(chlg);
  const digest = hmac.digest("hex").toLowerCase();
  const res = Buffer.from(username + " " + digest).toString("base64");
  return res;
}
