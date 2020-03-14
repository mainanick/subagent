import dns from "dns";

/**
 * Sorts MX Records by lowest priority.
 *
 * The sending agent should attempt to establish an SMTP connection,
 *  trying the host with the lowest "Priority" value first.
 *
 * TODO For records with same preference and there is no clear reason to favor one,
 *  Randomize them to spread the load across multiple mail exchangers for a specific organization.
 */
export function sort_priotity(records: dns.MxRecord[]) {
  return records.sort((a, b) => a.priority - b.priority);
}

/**
 *
 * @param hostname
 *
 * Fallback to the address record,
 *  If (and only if) no MX record for the domain is present,
 *  treat the domain as if it had an MX record with the given domain
 *    as the target hostname and a preference value of 0
 *  Perform A or AAAA lookups as required to determine the IP address of the target hostname
 */
export function lookup(hostname: string) {
  return new Promise<dns.MxRecord[]>((resolve, reject) =>
    dns.resolveMx(hostname, (err, records: dns.MxRecord[]) => {
      if (err) {
        if (err.code === dns.NODATA || err.code === dns.NOTFOUND) {
          return reject(err);
        }
      }

      //Fallback
      if (records.length === 0) {
        records = [{ exchange: hostname, priority: 0 }];
      }
      return resolve(records);
    })
  );
}
