import dns from "dns";

export function lookup(hostname: string) {
  return new Promise<dns.MxRecord[]>((resolve, reject) =>
    dns.resolveMx(hostname, (err, records: dns.MxRecord[]) => {
      if (err) {
        if (err.code === "ENODATA" || err.code === "ENOTFOUND") {
          return reject(err);
        }
      }
      return resolve(records);
    })
  );
}
