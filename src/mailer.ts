import { Address } from "address-rfc2822";
export function send(
  from: string | Address,
  to: string | Address[],
  content: string
) {
  try {
    const mail_from = from instanceof Address ? from : new Address(from);
    return [mail_from, to];
  } catch (e) {
    console.error(e);
  }
}
